import { FaFacebookSquare, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 md:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-50 light:text-slate-900 md:text-5xl">Get In Touch</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300 light:text-slate-700">
          Questions, feedback, or collaboration ideas. We would love to hear from you.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-cyan-100 light:text-cyan-700">Email</h3>
            <p className="mt-2 text-slate-300 light:text-slate-700">contact@example.com</p>
            <p className="text-slate-300 light:text-slate-700">support@example.com</p>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-cyan-100 light:text-cyan-700">Phone</h3>
            <p className="mt-2 text-slate-300 light:text-slate-700">(885) 123-4567</p>
            <p className="text-slate-300 light:text-slate-700">Mon-Fri, 9am-6pm</p>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-lg font-semibold text-cyan-100 light:text-cyan-700">Location</h3>
            <p className="mt-2 text-slate-300 light:text-slate-700">123 Business Street</p>
            <p className="text-slate-300 light:text-slate-700">Phnom Penh, PP 10001</p>
          </div>

          <div className="glass-panel flex items-center justify-center gap-7 p-5 text-4xl text-slate-200 light:text-slate-700">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.facebook.com/visethsopheach"
              className="transition hover:scale-110 hover:text-cyan-200"
            >
              <FaFacebookSquare />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/viseth_sopheach/"
              className="transition hover:scale-110 hover:text-cyan-200"
            >
              <FaInstagramSquare />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/Viseth_Sopheach"
              className="transition hover:scale-110 hover:text-cyan-200"
            >
              <FaTelegram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/VisethSopheach"
              className="transition hover:scale-110 hover:text-cyan-200 light:hover:text-cyan-700"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        <div className="glass-panel p-6 md:p-8">
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200 light:text-slate-700">Name</label>
              <input
                type="text"
                className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30 light:border-slate-300 light:bg-white light:text-slate-800 light:placeholder:text-slate-400 light:focus:border-cyan-600/60"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200 light:text-slate-700">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30 light:border-slate-300 light:bg-white light:text-slate-800 light:placeholder:text-slate-400 light:focus:border-cyan-600/60"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200 light:text-slate-700">Subject</label>
              <input
                type="text"
                className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30 light:border-slate-300 light:bg-white light:text-slate-800 light:placeholder:text-slate-400 light:focus:border-cyan-600/60"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200 light:text-slate-700">Message</label>
              <textarea
                rows="4"
                className="w-full resize-none rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30 light:border-slate-300 light:bg-white light:text-slate-800 light:placeholder:text-slate-400 light:focus:border-cyan-600/60"
                placeholder="Tell us more..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
