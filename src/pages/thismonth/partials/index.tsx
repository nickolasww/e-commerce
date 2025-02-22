import * as React from "react";

const ThisMonth = () => {
  return (
      <header>
        <div className="flex gap-5 items-center pb-5">
          <div className="py-7 px-4 bg-red-500 rounded-lg"></div>
          <h1 className="text-red-500 font-semibold">This Month </h1>
        </div>
        <h2 className="text-4xl font-semibold" >Best Selling Products</h2>
      </header>
  )
}

export default ThisMonth
