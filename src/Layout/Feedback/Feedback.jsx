import { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";

export default function FeedbackPage() {
  const { user } = use(AuthContext);
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <title>PlayNest | Feedback</title>{" "}
      <h1 className="text-2xl logo-font md:text-3xl font-semibold text-[#ff6f61] text-center my-5">
        We Value Your Feedback
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Help us improve PlayNest by sharing your thoughts. We appreciate every
        message!
      </p>
      <form className="space-y-5 p-6 text-gray-700">
        <div>
          <label className="font-medium">Name (optional)</label>
          <input
            type="text"
            defaultValue={user?.displayName || ""}
            className="w-full mt-1 p-3 border border-gray-400 focus:border focus:border-[#ff6f61] rounded-lg focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="font-medium">Email (optional)</label>
          <input
            type="email"
            defaultValue={user?.email || ""}
            className="w-full mt-1 p-3 border border-gray-400 focus:border focus:border-[#ff6f61] rounded-lg focus:outline-none"
            placeholder="Your email"
          />
        </div>

        <div>
          <label className="font-medium">Rating</label>
          <select className="w-full mt-1 p-3 border border-gray-400 focus:border focus:border-[#ff6f61] rounded-lg focus:outline-none">
            <option value="">Select a rating</option>
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Your Feedback</label>
          <textarea
            rows={5}
            className="w-full mt-1 p-3 border border-gray-400 focus:border focus:border-[#ff6f61] rounded-lg focus:outline-none"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 shine-btn bg-[#ff6f61] text-white rounded-lg font-semibold hover:bg-[#4D96FF] cursor-pointer transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
