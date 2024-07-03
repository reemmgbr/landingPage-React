import firstcard from "../../media-1-Df6P7uqF.png";
import sectcard from "../../media-2-BfmdK-w9.png";
import thirdtcard from "../../media-3-lg-Dym0Pnrr.png";
import style from "./Cards.module.css";

export default function Cards() {
  return (
    <div className="flex md:gap-[52px] gap-4 md:flex-row flex-col cursor-pointer mt-4">
      <div className={`md:w-[30%] w-full relative ${style.card}`}>
        <img className="w-full" src={firstcard} alt="" />
        <div
          className={`${style.layer} flex items-center justify-center font-semibold text-white text-xl`}
        >
          + 4
        </div>
      </div>
      <div className={`md:w-[30%] w-full relative ${style.card}`}>
        <img className="w-full" src={sectcard} alt="" />
        <div
          className={`${style.layer} flex items-center justify-center font-semibold text-white text-xl `}
        >
          {" "}
          + 4
        </div>
      </div>
      <div className={`md:w-[30%] w-full relative ${style.card}`}>
        <img className="w-full h-full" src={thirdtcard} alt="" />
        <div
          className={`${style.layer} flex items-center justify-center font-semibold text-white text-xl `}
        >
          {" "}
          + 4
        </div>{" "}
      </div>
    </div>
  );
}
