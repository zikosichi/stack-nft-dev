import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect } from "react";

import Cursor1 from "../../assets/team/cursor1.png";

export function Team() {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
  });

  return (
    <div className="bg-red-400">
      <img src={Cursor1} alt="" className="" />
    </div>
  );
}
