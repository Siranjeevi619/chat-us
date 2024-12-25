import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="d-flex flex-column vh-100 bg-light">
      {/* Chat Header */}
      <div className="bg-primary text-white py-3 text-center shadow-sm">
        <h5 className="mb-0">Chat Box</h5>
      </div>

      {/* Message Display Area */}
      <div
        className="flex-grow-1 overflow-auto p-3"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        {messages.length === 0 ? (
          <div className="text-muted text-center mt-5">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex ${
                msg.sender === "user"
                  ? "justify-content-end"
                  : "justify-content-start"
              } mb-3`}
            >
              <div
                className={`p-3 rounded ${
                  msg.sender === "user"
                    ? "bg-primary text-white"
                    : "bg-secondary text-light"
                } shadow-sm`}
                style={{ maxWidth: "75%" }}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="d-flex align-items-center p-3 bg-white border-top">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control me-2 rounded-pill"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="btn btn-primary rounded-pill px-4"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
