export default function HowPlayNestWorks() {
  return (
    <section className=" py-12">
      <h2 className="text-2xl md:text-3xl logo-font font-semibold text-[#ff6f61] text-center mb-6">
        How PlayNest Works
      </h2>

      <p className="text-center text-gray-600 mb-12">
        A simple way to discover, explore, and enjoy toys your kids will love.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
        <div
          data-aos="fade-up"
          className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div className="w-16 h-16 mx-auto bg-[#ff6f61]/10 rounded-full flex items-center justify-center mb-5">
            <span className="text-3xl text-[#ff6f61]">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Browse Toys
          </h3>
          <p className="text-center text-gray-600">
            Explore a huge collection of toys from local sellers — fun, safe,
            and age-friendly.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div className="w-16 h-16 mx-auto bg-[#ff6f61]/10 rounded-full flex items-center justify-center mb-5">
            <span className="text-3xl text-[#ff6f61]">⭐</span>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Check Details
          </h3>
          <p className="text-center text-gray-600">
            View ratings, pricing, stock, seller info & full details before
            choosing.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-5">
            <span className="text-3xl text-blue-500">🚚</span>
          </div>

          <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Fast Delivery
          </h3>

          <p className="text-center text-gray-600">
            Get your toys delivered quickly and safely right to your doorstep.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div className="w-16 h-16 mx-auto bg-[#ff6f61]/10 rounded-full flex items-center justify-center mb-5">
            <span className="text-3xl text-[#ff6f61]">🎁</span>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Try or Buy
          </h3>
          <p className="text-center text-gray-600">
            Simply log in to try a toy or proceed to buy — simple, safe & fast.
          </p>
        </div>
      </div>
    </section>
  );
}
