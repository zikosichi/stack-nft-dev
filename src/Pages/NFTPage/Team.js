/* eslint-disable jsx-a11y/anchor-has-content */
import TeamIllustration from "../../assets/team/team.png";
import { P } from "./Elements";
import Sun from "../../assets/team/sun.png"
import Ziko from "../../assets/team/cursors/ziko.png"
import Veronika from "../../assets/team/cursors/veronika.png"
import Gego from "../../assets/team/cursors/gego.png"
import Ika from "../../assets/team/cursors/ika.png"
import Yagiz from "../../assets/team/cursors/yagiz.png"
import Zile from "../../assets/team/cursors/george.png"
import Petro from "../../assets/team/cursors/petro.png"
import Daniel from "../../assets/team/cursors/daniel.png"
import Nini from "../../assets/team/cursors/nini.png"
import Dachi from "../../assets/team/cursors/dachi.png"
import Mariam from "../../assets/team/cursors/mariam.png"
import David from "../../assets/team/cursors/david.png"

function Area({ coords, size=[12, 12], href, alt }) {
  return (
    <a
      href={href}
      alt={alt}
      className={`absolute hover:opacity-20 opacity-0 transition-opacity duration-1000`}
      style={{
        width: size[0] + '%',
        height: size[1] + '%',
        left: coords[0] + '%',
        top: coords[1] + '%',
        background: 'radial-gradient(closest-side, #FFEAB6, rgba(255,255,255,0))',
      }}
    ></a>
  );
}

function Stacker({image, name, title, href}) {
  return <a className="block text-center" href={href}>
    <img className="mx-auto h-[80px] mb-3" src={image} alt="" />
    <P>{name}</P>
    <p className="text-base text-white text-opacity-40">{title}</p>
  </a>
}

export function Team() {
  return (
    <div>
      <div className="relative hidden md:block">
        <img src={TeamIllustration} alt="" usemap="#map" />
        <Area coords={[44, -1]} alt="Ziko" href="https://whitepaper.stackbrowser.com/b/9C993343-69D5-4D6E-84D0-F5048F8B32D7/Ziko_%E2%9C%8A%F0%9F%8F%BC_CTO" />
        <Area coords={[65, 3]} alt="Veronika" href="https://whitepaper.stackbrowser.com/b/8BAABD25-FCE9-45DB-91E3-C591EE630E18/Veronika_%F0%9F%A4%93_Content_Manager" />
        <Area coords={[80, 15]} alt="Gego" href="https://whitepaper.stackbrowser.com/b/4BFF6584-A134-43B0-B99D-B91E7ECEF874/Gego%F0%9F%90%A3Lead_Engineer"  />
        <Area coords={[90, 36]} alt="Ika" href="https://whitepaper.stackbrowser.com/b/5B9ECA4E-3164-48FF-91EB-3CA9EFEF031B/Ika__%F0%9F%91%BE_Tech_Lead"  />
        <Area coords={[84, 68]} alt="Yagiz" href="https://whitepaper.stackbrowser.com/b/3188D37F-9DDF-481D-9FBA-29895D08F4DA/Yagiz_%F0%9F%A4%A8_Architect"  />
        <Area coords={[68, 83]} alt="Zile" href="https://whitepaper.stackbrowser.com/b/29129ED2-EC71-412F-961B-337AE905E1B6/George_%F0%9F%A4%97_CEO"  />
        <Area coords={[47, 88]} alt="Petro" href="https://whitepaper.stackbrowser.com/b/332DEAEE-11D8-4F25-92AC-E5CC9FFDFC82/Petro_%F0%9F%9A%80_Lead_Designer"  />
        <Area coords={[26, 84]} alt="Daniel" href="https://whitepaper.stackbrowser.com/b/2644BD05-6230-46C3-BA96-C0FC5A277BD0/Daniel_%F0%9F%99%8C_Lead_Engineer"  />
        <Area coords={[7, 71]} alt="Nini" href="https://whitepaper.stackbrowser.com/b/CBC9CE7C-D736-452F-86C3-CF17CE4DD018/Nini_%F0%9F%91%B0%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F_Customer_Success"  />
        <Area coords={[0, 43]} alt="Dachi" href="https://whitepaper.stackbrowser.com/b/CF47DF7A-D353-4C62-BC15-C72A305DB18B/Dachi_%F0%9F%9B%B8_COO"  />
        <Area coords={[6.5, 18]} alt="Mariam" href="https://whitepaper.stackbrowser.com/b/3154B79A-B2DF-47A7-B3F7-7B9D92EBB556/Mariam_%E2%9C%A8_Product_Analyst"  />
        <Area coords={[23, 3]} alt="David" href="https://whitepaper.stackbrowser.com/b/7B29D5BE-5C3B-4AB8-B3EA-7B0D2644884A/David_%E2%9C%8A%F0%9F%8F%BC_CFO"  />

        <Area coords={[30, 17]} size={[40, 60]} alt="David" href="https://whitepaper.stackbrowser.com/b/33F28347-C973-4FB0-94EF-0E2B5D43B3D1/%E2%9A%A1%EF%B8%8F_Team"  />
      </div>

      <div className="md:hidden">
        <img src={Sun} alt="" className="mb-12 scale-125" />
        <div className="grid grid-cols-3 gap-10">
          <Stacker image={Zile} title="CEO" name="Geroge" href="https://whitepaper.stackbrowser.com/b/29129ED2-EC71-412F-961B-337AE905E1B6/George_%F0%9F%A4%97_CEO"/>
          <Stacker image={Veronika} title="CS" name="Veronika" href="https://whitepaper.stackbrowser.com/b/8BAABD25-FCE9-45DB-91E3-C591EE630E18/Veronika_%F0%9F%A4%93_Content_Manager"/>
          <Stacker image={Gego} title="Engeneer" name="Gego" href="https://whitepaper.stackbrowser.com/b/4BFF6584-A134-43B0-B99D-B91E7ECEF874/Gego%F0%9F%90%A3Lead_Engineer"/>
          <Stacker image={Ziko} title="CTO" name="Ziko" href="https://whitepaper.stackbrowser.com/b/9C993343-69D5-4D6E-84D0-F5048F8B32D7/Ziko_%E2%9C%8A%F0%9F%8F%BC_CTO"/>
          <Stacker image={David} title="CFO" name="David" href="https://whitepaper.stackbrowser.com/b/7B29D5BE-5C3B-4AB8-B3EA-7B0D2644884A/David_%E2%9C%8A%F0%9F%8F%BC_CFO"/>
          <Stacker image={Ika} title="Tech Lead" name="Ika" href="https://whitepaper.stackbrowser.com/b/5B9ECA4E-3164-48FF-91EB-3CA9EFEF031B/Ika__%F0%9F%91%BE_Tech_Lead"/>
          <Stacker image={Dachi} title="CO2" name="Dachi" href="https://whitepaper.stackbrowser.com/b/CF47DF7A-D353-4C62-BC15-C72A305DB18B/Dachi_%F0%9F%9B%B8_COO"/>
          <Stacker image={Yagiz} title="Architect" name="Yagiz" href="https://whitepaper.stackbrowser.com/b/3188D37F-9DDF-481D-9FBA-29895D08F4DA/Yagiz_%F0%9F%A4%A8_Architect"/>
          <Stacker image={Petro} title="Designer" name="Petro" href="https://whitepaper.stackbrowser.com/b/332DEAEE-11D8-4F25-92AC-E5CC9FFDFC82/Petro_%F0%9F%9A%80_Lead_Designer"/>
          <Stacker image={Daniel} title="C++" name="Daniel" href="https://whitepaper.stackbrowser.com/b/2644BD05-6230-46C3-BA96-C0FC5A277BD0/Daniel_%F0%9F%99%8C_Lead_Engineer"/>
          <Stacker image={Nini} title="Gen Z Kid" name="Nini" href="https://whitepaper.stackbrowser.com/b/CBC9CE7C-D736-452F-86C3-CF17CE4DD018/Nini_%F0%9F%91%B0%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F_Customer_Success"/>
          <Stacker image={Mariam} title="Data Geek" name="Mariam" href="https://whitepaper.stackbrowser.com/b/3154B79A-B2DF-47A7-B3F7-7B9D92EBB556/Mariam_%E2%9C%A8_Product_Analyst"/>
        </div>
      </div>
    </div>
  );
}
