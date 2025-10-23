import React from "react";

const Privacy = () => {
  return (
    <div className="w-10/12 mx-auto my-16 text-gray-700">
      <title>PlayNest | Privacy & Policy</title>
      <h1 className="text-3xl font-bold mb-6 text-[#ff6f61]">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>PlayNest</strong>, your privacy is very important to us. This
        policy explains how we collect, use, and protect your information when
        you visit our website or create an account.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We collect personal data such as your name, email address, and photo URL
        when you register or log in. Non-personal data such as browser type and
        device info may also be collected to improve user experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        The collected data helps us personalize your experience, provide secure
        authentication, and improve our services. We do not sell or rent your
        information to third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
      <p className="mb-4">
        PlayNest uses cookies to remember your preferences and login sessions.
        You can disable cookies in your browser settings if you wish.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use modern security methods to protect your personal data. However,
        no online service can be 100% secure, and we cannot guarantee absolute
        safety.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy, please contact us at:
        <br />
        <a
          href="mailto:support@playnest.com"
          className="text-blue-500 underline"
        >
          support@playnest.com
        </a>
      </p>
    </div>
  );
};

export default Privacy;
