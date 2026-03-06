import { useState } from "react";

export const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:tuyizeresh@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message} (${form.email})`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 px-6">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-8">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};