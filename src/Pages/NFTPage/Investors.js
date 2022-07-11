import FiveHundredIcon from "../../assets/investor-logos/500.svg";
import BogIcon from "../../assets/investor-logos/Bog.png";
import CircleIcon from "../../assets/investor-logos/Circle Cove.png";
import FlyerIcon from "../../assets/investor-logos/Flyer One Ventures.png";
import LunarIcon from "../../assets/investor-logos/Lunar ventures.png";
import PeakIcon from "../../assets/investor-logos/Peak Capital.png";
import EssentioIcon from "../../assets/investor-logos/Essentio.png";
import WayraIcon from "../../assets/investor-logos/Wayra.png";
import ZemuIcon from "../../assets/investor-logos/Zemu.png";
import { H1, P } from "./Elements";

export function Investors() {
  return (
    <div className="py-8 md:py-12 rounded-3xl border-opacity-30">
      <H1 className="mb-8 text-center md:mb-12">Our Partners</H1>
      <hr className="mx-0 mb-6 md:mb-9 opacity-20" />
      <div className="grid grid-cols-3 gap-y-2 md:gap-y-6 gap-x-0 md:gap-x-28">
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://peak.capital/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={PeakIcon} alt="" />
        </a>
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://lunar.vc/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LunarIcon} alt="" />
        </a>
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://www.wayra.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={WayraIcon} alt="" />
        </a>
      </div>
      <hr className="mx-0 my-6 md:my-9 opacity-20" />
      <div className="grid grid-cols-3 gap-y-2 md:gap-y-6 gap-x-0 md:gap-x-28">
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://www.flyerone.vc/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={FlyerIcon} alt="" />
        </a>
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://500.co/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={FiveHundredIcon} alt="" />
        </a>
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://circlecove.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={CircleIcon} alt="" />
        </a>
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://bankofgeorgiagroup.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={BogIcon} alt="" />
        </a>
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://www.zemuvc.co/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ZemuIcon} alt="" />
        </a>
        <a
          className="transition-transform duration-1000 hover:scale-95"
          href="https://www.essentio.at/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={EssentioIcon} alt="" />
        </a>
      </div>
      <hr className="mx-0 my-6 md:my-9 opacity-20" />
      <div className="grid grid-cols-3 gap-y-2 md:gap-y-6 gap-x-0 md:gap-x-28">
        <div className="text-center">
          <h2 className="text-4xl font-black md:text-5xl text-violet-50 text-shadow-xs">
            10
          </h2>
          <P>Countries</P>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-black md:text-5xl text-violet-50 text-shadow-xs">
            9
          </h2>
          <P>
            <span className="hidden md:inline">Institutional</span> investors
          </P>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-black md:text-5xl text-violet-50 text-shadow-xs">
            2
          </h2>
          <P>Angels</P>
        </div>
      </div>
    </div>
  );
}
