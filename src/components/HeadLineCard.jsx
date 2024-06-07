import React from "react";

function HeadLineCard() {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="relative rounded-xl ">
        {/* Overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl py-4 px-2">Sun's Out,BoGo's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://cdn.gracza.pl/i_gp/h/17/454002706.jpg"
          alt=""
        />
      </div>

      <div className="relative rounded-xl ">
        {/* Overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl py-4 px-2">Sun's Out,BoGo's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://staticg.sportskeeda.com/editor/2023/10/d375f-16965838333702-1920.jpg?w=640"
          alt=""
        />
      </div>

      <div className="relative rounded-xl ">
        {/* Overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl py-4 px-2">Sun's Out,BoGo's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://pbs.twimg.com/media/GL4wo2DaoAAFQkk.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeadLineCard;
