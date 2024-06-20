"use client";

import { useState } from "react";

export default function Contact() {
  /* Manejar el formulario */

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);

    try {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());

      if (data.name === "" || data.email === "" || data.message === "") {
        setError("Please fill all the fields");
        setLoading(false);
        return;
      }

      /* Enviar el correo con mailto */

      const body = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;

      const mailto = `mailto:allanlautarodelgadodev@gmail.com
?subject=Contact from Portfolio
        &body=${encodeURIComponent(body)}`;

      window.open(mailto, "_blank")?.focus();

      /* Resetear */
      setError(null);
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fade-in mt-14">
      <h2 className="text-2xl md:text-4xl font-bold text-black/80">Contact</h2>

      <div className="mt-5">
        <p className="text-black/60">
          If you have any questions or want to work together, feel free to
          contact me.
        </p>

        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex flex-col gap-2">
              <label className="text-black/80 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="p-3 bg-gray-100 rounded-2xl
                 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black/80 focus:ring-opacity-50
             "
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black/80 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="p-3 bg-gray-100 rounded-2xl
                    active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black/80 focus:ring-opacity-50
                "
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black/80 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                className="p-3 bg-gray-100 rounded-2xl
                 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black/80 focus:ring-opacity-50
             "
                id="message"
                name="message"
                placeholder="Your message here"
              ></textarea>
            </div>
          </div>

          {error && <p className="text-red-500 mt-5">{error}</p>}

          {error === null && (
            <p className="text-green-500 mt-5">Message sent successfully</p>
          )}

          <button className="mt-5 p-3 bg-black text-white rounded-2xl">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
