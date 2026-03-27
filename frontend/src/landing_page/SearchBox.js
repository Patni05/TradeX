import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchData = [
    { title: "Account Opening", link: "/account" },
    { title: "Add Funds", link: "/funds" },
    { title: "Withdraw Money", link: "/withdraw" },
    { title: "Intraday Charges", link: "/pricing" },
    { title: "Create Ticket", link: "/support" }
  ];

  const results = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Results */}
      {query && (
       <div className="mt-2 p-2 rounded shadow search-box">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={index}
                className="p-2"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(item.link)}
              >
                {item.title}
              </div>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBox;