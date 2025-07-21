import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4 bg-gray-100 p-4 mt-10 hidden md:block leading-normal   ">
      <h2 className="lg:text-2xl text-sm font-bold w-full ml-12 ">Book by Genre</h2>
      <ul className="ml-12">
      <li className="pt-6 mt-2 text-orange-500 bg-white h-full w-3/4 relative">
          <div className="absolute left-0 top-0 h-full w-3/4 bg-white -ml-16 border-l-4 border-orange-500">
          </div>
          <span className="relative z-10 ">All Genres</span>
        </li>
        <li className="pt-6">Business</li>
        <li className="pt-6">Science</li>
        <li className="pt-6">Fiction</li>
        <li className="pt-6">Philosophy</li>
        <li className="pt-6 mb-12">Biography</li>
      </ul>
      <hr/>
      <h2 className="lg:text-2xl text-sm font-bold  mt-8 ml-12">Recommendations</h2>
      <ul className="ml-12" >
        <li className="pt-6">Artist of the Month</li>
        <li className="pt-6">Book of the Year</li>
        <li className="pt-6">Top Genre</li>
        <li className="pt-6">Trending</li>
      </ul>
    </aside>
  );
};
export default Sidebar;
