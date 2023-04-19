import Layout from "@/components/Layout";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold">Contact me</h1>

        <form className="flex flex-col gap-2 mt-6 bg-neutral-800 p-3 rounded-md">
          <input
            className="bg-neutral-700 placeholder:text-white px-2 py-2"
            type="text"
            placeholder="Name"
          />

          <input
            className="bg-neutral-700 placeholder:text-white px-2 py-2"
            type="email"
            placeholder="Email"
          />

          <textarea
            className="bg-neutral-700 placeholder:text-white px-2 py-2"
            placeholder="Message"
            cols="30"
            rows="5"
          />

          <button
            className="bg-neutral-600 p-2 rounded-xl font-semibold"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
