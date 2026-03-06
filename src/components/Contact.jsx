
import React, { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${email}!`);
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <textarea 
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button 
            type="submit"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-green-600  hover:text-xl transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};