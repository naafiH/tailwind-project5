import Line from "../assets/png.png";

export default function nav() {
  return (
    <div className="">
      <nav className="flex  max-w-[1400px] mx-auto justify-between items-center py-2   ">
        <h1 className="font-bold font-font1 text-[23px] md:text-[30px]  ">
          PERION
        </h1>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded-full border-2 md:text-[20px]">
            STAKE PERO
          </button>
          <img
            className="w-8 h-8 md:w-10  md:h-10 rounded-full bg-white px-2 py-2"
            src={Line}
            alt=""
          />
        </div>
      </nav>
    </div>
  );
}
