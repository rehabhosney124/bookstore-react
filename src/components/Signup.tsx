import React from "react";
const Signup: React.FC = () => {
  return (
    <div className=" flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-gray-200 w-96 sm:w-3/4 md:w-2/3 lg:w-1/2 p-8 rounded-xl shadow-lg md:m-0 m-5">
        <h1 className="text-3xl font-bold text-center mb-8">Signup</h1>
        <form className="flex flex-wrap gap-4">
  <input
    type="text"
    placeholder="Enter First name"
    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[200px]"
  />
  <input
    type="text"
    placeholder="Enter Last name"
    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[200px]"
  />
  <input
    type="email"
    placeholder="Enter email address"
    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[200px]"
  />
  <input
    type="text"
    placeholder="Enter phone number"
    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[200px]"
  />
  <input
    type="password"
    placeholder="Enter password"
    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[200px]"
  />
  <input
    type="password"
    placeholder="Enter repeat password"
    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[200px]"
  />
</form>
<div className="w-full flex justify-center mt-4">
    <button className="bg-orange-500 text-white w-full py-2 rounded-md hover:bg-orange-600">
      Submit
    </button>
  </div>
      </div>
    </div>
  );
};
export default Signup;
