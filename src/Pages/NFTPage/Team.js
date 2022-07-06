import { P } from "./Elements";

import Cursor1 from "../../assets/tinified-cursors/1.png";
import Cursor2 from "../../assets/tinified-cursors/2.png";
import Cursor3 from "../../assets/tinified-cursors/3.png";
import Cursor4 from "../../assets/tinified-cursors/4.png";
import Cursor5 from "../../assets/tinified-cursors/5.png";
import Cursor6 from "../../assets/tinified-cursors/6.png";
import Cursor7 from "../../assets/tinified-cursors/7.png";

function Cursor({ className, name, distance, rotation }) {
  return (
    <div className={className}>
      <div
        className={`inline-block text-center bg-green-400`}
        style={{
          transform: `translateY(${distance}%) rotateZ(${rotation}deg)`,
          transformOrigin: `50% ${-distance}%`
        }}
      >
        <img src={Cursor1} alt="" className="w-[100px]" />
        <p>{name}</p>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <div className="bg-red-400 aspect-[1.8/1]">
      <div className="absolute">
        <img src={Cursor1} alt="" className="w-[25%]" />
        <P>Ziko</P>
      </div>
    </div>
  );
}
