import { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";

export default function ContactPage() {
  const { user } = use(AuthContext);

  return (
    <div className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 items-center md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h1 className="text-2xl logo-font md:text-3xl font-semibold text-[#ff6f61] my-5">
            Contact Us
          </h1>

          <p className="text-gray-600 max-w-md">
            We are committed to processing your information carefully and
            contacting you about your project as soon as possible.
          </p>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-[#ff6f61] text-xl">📧</span>
              <p>support@playnest.com</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#ff6f61] text-xl">🏠</span>
              <p>
                4074 Ebert Summit Suite 375 <br />
                Lake Leonardchester
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#ff6f61] text-xl">📞</span>
              <p>+880 1234 567 890</p>
            </div>
          </div>
        </div>

        <form className="space-y-4  p-6 text-gray-700">
          <input
            type="text"
            defaultValue={user?.displayName || ""}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff6f61] focus:outline-none"
          />

          <input
            type="email"
            defaultValue={user?.email || ""}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff6f61] focus:outline-none"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff6f61] focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-[#ff6f61] text-white rounded-lg font-semibold hover:bg-[#4D96FF] cursor-pointer "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
