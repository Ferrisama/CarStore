import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t">
    <div className="flex justify-between items-center flex-wrap mt-2 border-t border-white sm:px-16 px-6 py-10">
      <p>@2023 Cars. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
