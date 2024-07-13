import React from "react";

function Card({ username, btnText = "visit me" }) {
  return (
    <div>
      <div className="w-[300px] rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8"
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4 text-white">
          <h1 className="text-lg font-semibold">{username}</h1>
          <p className="mt-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?</p>
          <button
            type="button"
            className="mt-4 rounded-sm bg-gray-500 px-9 py-2 text-[10px] text-lg font-semibold text-white shadow-sm hover:bg-gray/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
