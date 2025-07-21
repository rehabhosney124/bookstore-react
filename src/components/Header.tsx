import React from "react";
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';  
import reader from'../assets/excited-reader.png';
 interface Headerprops{
    title: string;
    subtitle: string;
     placeholder: string;
    orangeBackground: string;
    image: string;
 }
const Header:React.FC<Headerprops> = ({title,
      subtitle,
      placeholder,
      orangeBackground,
      image})=>{
    return(

<header className=" relative w-full flex flex-col lg:flex-row  items-center  lg:justify-between  justify-center px-0  bg-white">
{/* left content */}
<div className=" lg:w-1/2 lg:flex-row  flex-col w-full">
<div className="  flex font-bold lg: absolute  items-center divide-x divide-gray-300 lg:top-0 lg:left-0 lg:my-8 ml-12  ">
    <p className="mr-4  ">MYBOOK</p>
    <FaShoppingCart className=" pl-1.5 text-xl cursor-pointer hover:text-gray-700"/>
</div>
<h1 className="lg:text-5xl font-extrabold lg:mb-8 mt-12 lg:leading-normal ml-12  text-2xl">
    {title}
</h1>
<p className="text-lg mb-6 ml-12" >
    {subtitle}
</p>
<div className="relative ml-12  lg:mb-0 mb-3">
<input type="text" placeholder={placeholder} className=" w-3/4 h-10 rounded-lg border border-gray-300 bg-gray-200 pl-6 "/>
<FaSearch className="absolute top-1/2 transform -translate-y-1/2 text-black left-1 "/>
</div>
</div>
{/* right content */}

<div className="relative p-0 m-0 lg:w-1/2 right-0 w-3/4  lg:h-1/2  md:h-96">
    <img src={orangeBackground} alt="Orange Background" className="relative w-full h-full "/>
    {/* navbar */}
    <div className=" absolute top-4 lg:left-1/4 left-11  flex lg:gap-8  gap-3 lg:text-lg text-xs justify-around items-center md:text-2xl md:gap-8 md:left-1/4">
        <Link to="/" className="hover:underline text-white hover:text-gray-700">
           Explorer
         </Link>
         <Link to="/shop" className= " hover:underline text-white hover:text-gray-700">
           Shop
         </Link>
         <Link  to="/blog" className="  hover:underline text-white hover:text-gray-700">
           Blog
         </Link>
         <Link
  to="/singup"
  className="bg-gray-50 text-black text-center lg:px-12 md:p-2 p-1 w-1/4 rounded-full hover:bg-gray-800 hover:text-white flex items-center justify-center "
> Login
</Link>

      </div>
    <img
           src={image}
           alt="Excited Reader"
           className={` absolute  ${image===reader ? " bottom-0 right-1/4 left-1/3 h-3/4 w-1/2 " : "bottom-1/4 h-1/2 w-3/4 left-16" }` }

         />
</div>
</header>
    ) 
}
export default Header;