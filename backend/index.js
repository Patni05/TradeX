


const cors = require("cors");
const { GoogleGenerativeAI }  = require("@google/generative-ai");
const express = require("express");
const mongoose = require("mongoose");
const fetch = require("node-fetch");

const {HoldingsModel } = require("./model/HoldingsModel");
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');
const UserModel = require('./model/UserModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


require("dotenv").config();


const PORT = process.env.PORT || 3005;
const url = process.env.MONGO_URL;

const app = express();


app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());


// end point to fetch  data ....

app.get('/allHoldings',async(req,res)=> {

    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions',async(req,res)=> {

    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});


// insert into the database --> order Api (read From user)
app.post("/newOrder", async (req, res) => {
  try {
    const name = req.body.name.toUpperCase();
    const qty = parseInt(req.body.qty);
    const price = parseFloat(req.body.price);
    const mode = req.body.mode;

    if (!name || !qty || !price || !mode) {
      return res.status(400).send("Invalid input ❌");
    }

    let holding = await HoldingsModel.findOne({ name });

    // ================= BUY =================
    if (mode === "BUY") {
      if (holding) {
        holding.price =
          ((holding.qty * holding.price) + (qty * price)) /
          (holding.qty + qty);

        holding.qty += qty;
      } else {
        holding = new HoldingsModel({ name, qty, price });
      }

      await holding.save();
    }

    // ================= SELL =================
    else if (mode === "SELL") {
      if (!holding) {
        return res.status(400).send("You don't own this stock ❌");
      }

      if (holding.qty < qty) {
        return res.status(400).send("Not enough quantity ❌");
      }

      holding.qty -= qty;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    // ================= INVALID =================
    else {
      return res.status(400).send("Invalid mode ❌");
    }

    // ✅ Save order only once (common)
    await OrdersModel.create({ name, qty, price, mode });

    return res.send(`${mode} order placed ✅`);

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error ❌");
  }
});


//ChatBot With Error Handling....

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.json({ reply: "No message ❌" });
    }

    // ✅ STEP 1: Fetch data (limit size)
    const holdings = await HoldingsModel.find({}).limit(10);
    const positions = await PositionsModel.find({}).limit(10);

    // ✅ STEP 2: Smart prompt (shorter = faster)
    const prompt = `
You are a stock market assistant of TradeX.

Rules:
- Greeting only first time
- Short answers
- Suggest BUY / SELL / HOLD
- Mention profit/loss if possible

Holdings: ${JSON.stringify(holdings)}
Positions: ${JSON.stringify(positions)}

User: ${userMessage}
`;

    // ✅ STEP 3: Retry function
    const callGemini = async (model, retries = 2) => {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [{ text: prompt }],
                },
              ],
            }),
          }
        );

        const data = await response.json();

        // ❌ Handle API error
        if (!response.ok) {
          throw new Error(data?.error?.message || "API Error");
        }

        return data;
      } catch (err) {
        if (retries > 0) {
          console.log(`Retrying ${model}...`);
          await new Promise((r) => setTimeout(r, 2000));
          return callGemini(model, retries - 1);
        }
        throw err;
      }
    };

    let data;

    try {
      // ✅ Try best model first
      data = await callGemini("gemini-2.5-flash");
    } catch (err) {
      console.log("Switching to fallback model...");

      // ✅ Fallback model (VERY IMPORTANT)
      data = await callGemini("gemini-2.0-flash");
    }

    console.log("FULL:", data);

    // ✅ STEP 4: Extract reply safely
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response ❌";

    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.json({ reply: "AI failed ❌" });
  }
});


// SigIn....
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,   // ✅ ADD THIS
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({ message: "User registered ✅" });

  } catch (err) {
    res.json({ message: "Signup failed ❌" });
  }
});


//Log In....

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found ❌" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "Wrong password ❌" });
    }

    const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
    username: user.username
  },
  "SECRET_KEY"
);
    res.json({ message: "Login successful ✅", token });

  } catch (err) {
    res.json({ message: "Login failed ❌" });
  }
});


// Profile update...
app.put("/update-profile", async (req, res) => {
  try {
    const { id, username, email, password } = req.body;

    let updateData = { username, email };

    // if password entered → hash it
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

   const updatedUser = await UserModel.findByIdAndUpdate(
  id,
  updateData,
  { new: true }
);

console.log("UPDATED USER:", updatedUser);

    res.json({ message: "Profile updated ✅" });

  } catch (err) {
    console.error(err);
    res.json({ message: "Update failed ❌" });
  }
});



// Protected Router.....
// app.get("/dashboard", verifyToken, (req, res) => {
//   res.json({ message: "Welcome to dashboard 🚀" });
// });





app.listen(PORT, () => {
  console.log("App Started at Port ",PORT);
mongoose.connect(url);
console.log("DataBase Connected")
});





// Check models....
app.get("/models", async (req, res) => {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models?key=${process.env.GEMINI_API_KEY}`
  );

  const data = await response.json();
  console.log(data);

  res.json(data);
});


//...For Holdings..




// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
//   });

//   res.send("Done ! All Holdings Added ");
// });



//...For Positions...
app.get("/addPositions",async(req,res) =>{
    let tempPosition = [{
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,


    }]

    tempPosition.forEach((item) => {
        let newPositions = new PositionsModel ({
            product : item.product,
            name : item.name,
            qty : item.qty,
            avg : item.avg,
            price : item.price,
            net : item.net,
            day : item.day,
            isLoss : item.isLoss
        });

        newPositions.save();

    })

    res.send("Done! All Positions Added");
})
