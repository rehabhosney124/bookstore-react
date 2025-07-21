import React from "react";
const Footer: React.FC = () => {
  return (
  <footer className="bg-orange-500 text-white py-4 flex  md: items-center ">
  <p className=" md: text-center md:w-full  md:pl-0 pl-1">2023 MYBOOK</p>
  <div className="absolute right-8 flex gap-3">
    <a href="/" className="hover:underline">Explore</a>
    <a href="/shop" className="hover:underline">Shop</a>
    <a href="/blog" className="hover:underline">About</a>
  </div>
</footer>
  );
};
export default Footer;
