import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ChatAi() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const res = await fetch("http://localhost:3002/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setLoading(false);

    const botMsg = { sender: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <>
      {/* 🤖 Floating Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00c6ff, #0072ff)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
        }}
      >
        🤖
      </motion.div>

      {/* 💬 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: 90,
              right: 20,
              width: 320,
              height: 420,
              background: "#1e1e1e",
              color: "#fff",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: 12,
                background: "#2a2a2a",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                fontWeight: "bold",
              }}
            >
              Tradex AI 🚀
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                padding: 10,
                overflowY: "auto",
              }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    textAlign: msg.sender === "user" ? "right" : "left",
                    margin: "6px 0",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius: 12,
                      background:
                        msg.sender === "user"
                          ? "linear-gradient(135deg, #00c6ff, #0072ff)"
                          : "#333",
                    }}
                  >
                    {msg.text}
                  </span>
                </motion.div>
              ))}

              {/* 🤖 Typing Indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontSize: 12, color: "#aaa" }}
                >
                  🤖 Typing...
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div style={{ display: "flex", borderTop: "1px solid #333" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about market..."
                style={{
                  flex: 1,
                  padding: 10,
                  border: "none",
                  outline: "none",
                  background: "#1e1e1e",
                  color: "#fff",
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  padding: "10px 14px",
                  background: "#0072ff",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatAi;