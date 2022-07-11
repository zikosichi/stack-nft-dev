import Daniel from "../../assets/team/profiles/daniel.png";
import Felix from "../../assets/team/profiles/felix.png";
import Dachi from "../../assets/team/profiles/dachi.png";
import Ika from "../../assets/team/profiles/ika.png";
import Petro from "../../assets/team/profiles/petro.png";
import Mariam from "../../assets/team/profiles/mariam.png";
import Ziko from "../../assets/team/profiles/ziko.png";
import Yagiz from "../../assets/team/profiles/yagiz.png";
import Nini from "../../assets/team/profiles/nini.png";
import Gego from "../../assets/team/profiles/gego.png";
import David from "../../assets/team/profiles/david.png";
import Veronika from "../../assets/team/profiles/veronika.png";
import Zile from "../../assets/team/profiles/zile.png";

import Opera from "../../assets/team/company-logos/opera.png";
import Stripe from "../../assets/team/company-logos/stripe.png";
import Unicef from "../../assets/team/company-logos/unicef.png";
import Philips from "../../assets/team/company-logos/philips.png";
import Space from "../../assets/team/company-logos/space.png";
import Bird from "../../assets/team/company-logos/bird.png";
import Rabobank from "../../assets/team/company-logos/rabobank.png";
import Connexease from "../../assets/team/company-logos/connexease.png";
import Formula from "../../assets/team/company-logos/formula.png";
import Tbilisicityhal from "../../assets/team/company-logos/tbilisicityhal.png";
import Kraken from "../../assets/team/company-logos/kraken.png";
import Nextmart from "../../assets/team/company-logos/nextmart.png";

const STACKERS = [
  {
    name: "Daniel",
    role: "Lead Engineer",
    exRole: "Ex engineer",
    profile: Daniel,
    flag: "🇺🇸",
    exCompanyLogo: Opera,
    href: "https://whitepaper.stackbrowser.com/b/2644BD05-6230-46C3-BA96-C0FC5A277BD0/Daniel_%F0%9F%99%8C_Lead_Engineer",
  },
  {
    name: "Felix",
    role: "Tech Advisor",
    exRole: "VP of engineering",
    profile: Felix,
    flag: "🇩🇪",
    exCompanyLogo: Stripe,
    href: "https://www.linkedin.com/in/felixrieseberg/",
  },
  {
    name: "Dachi",
    role: "COO",
    exRole: "Ex researcher",
    profile: Dachi,
    flag: "🇳🇱",
    exCompanyLogo: Unicef,
    href: "https://whitepaper.stackbrowser.com/b/CF47DF7A-D353-4C62-BC15-C72A305DB18B/Dachi_%F0%9F%9B%B8_COO",
  },
  {
    name: "Ika",
    role: "Tech Lead",
    exRole: "Ex tech lead",
    profile: Ika,
    flag: "🇳🇱",
    exCompanyLogo: Philips,
    href: "https://whitepaper.stackbrowser.com/b/5B9ECA4E-3164-48FF-91EB-3CA9EFEF031B/Ika__%F0%9F%91%BE_Tech_Lead",
  },
  {
    name: "Petro",
    role: "Lead Designer",
    exRole: "Ex sr. designer",
    profile: Petro,
    flag: "🇳🇱",
    exCompanyLogo: Space,
    href: "https://whitepaper.stackbrowser.com/b/332DEAEE-11D8-4F25-92AC-E5CC9FFDFC82/Petro_%F0%9F%9A%80_Lead_Designer",
  },
  {
    name: "Mariam",
    role: "Data Geek",
    exRole: "Ex sr. data analyst",
    profile: Mariam,
    flag: "🇳🇱",
    exCompanyLogo: Bird,
    href: "https://whitepaper.stackbrowser.com/b/3154B79A-B2DF-47A7-B3F7-7B9D92EBB556/Mariam_%E2%9C%A8_Product_Analyst",
  },
  {
    name: "Ziko",
    role: "CTO",
    exRole: "Ex architect",
    profile: Ziko,
    flag: "🇳🇱",
    exCompanyLogo: Rabobank,
    href: "https://whitepaper.stackbrowser.com/b/9C993343-69D5-4D6E-84D0-F5048F8B32D7/Ziko_%E2%9C%8A%F0%9F%8F%BC_CTO",
  },
  {
    name: "Yagiz",
    role: "Architect",
    exRole: "Ex lead architect",
    profile: Yagiz,
    flag: "🇺🇸",
    exCompanyLogo: Connexease,
    href: "https://whitepaper.stackbrowser.com/b/3188D37F-9DDF-481D-9FBA-29895D08F4DA/Yagiz_%F0%9F%A4%A8_Architect",
  },
  {
    name: "Nini",
    role: "Head of CS",
    exRole: "Ex Journalist",
    profile: Nini,
    flag: "🇬🇪",
    exCompanyLogo: Formula,
    href: "https://whitepaper.stackbrowser.com/b/CBC9CE7C-D736-452F-86C3-CF17CE4DD018/Nini_%F0%9F%91%B0%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F_Customer_Success",
  },
  {
    name: "Gego",
    role: "Engineer",
    exRole: "Ex sr. developer",
    profile: Gego,
    flag: "🇳🇱",
    exCompanyLogo: Tbilisicityhal,
    href: "https://whitepaper.stackbrowser.com/b/4BFF6584-A134-43B0-B99D-B91E7ECEF874/Gego%F0%9F%90%A3Lead_Engineer",
  },
  {
    name: "David",
    role: "CFO",
    exRole: "Ex researchear",
    profile: David,
    flag: "🇳🇱",
    exCompanyLogo: Unicef,
    href: "https://whitepaper.stackbrowser.com/b/7B29D5BE-5C3B-4AB8-B3EA-7B0D2644884A/David_%E2%9C%8A%F0%9F%8F%BC_CFO",
  },
  {
    name: "Veronika",
    role: "Content team",
    exRole: "Ex sr. marketer",
    profile: Veronika,
    flag: "🇺🇸",
    exCompanyLogo: Kraken,
    href: "https://whitepaper.stackbrowser.com/b/8BAABD25-FCE9-45DB-91E3-C591EE630E18/Veronika_%F0%9F%A4%93_Content_Manager",
  },
  {
    name: "Zile",
    role: "CEO",
    exRole: "4th time founder",
    profile: Zile,
    flag: "🇳🇱",
    exCompanyLogo: Nextmart,
    href: "https://whitepaper.stackbrowser.com/b/29129ED2-EC71-412F-961B-337AE905E1B6/George_%F0%9F%A4%97_CEO",
  },
];

function Member({ data }) {
  return (
    <a
      href={data.href}
      rel="noreferrer"
      target="_blank"
      className="relative inline-flex flex-col items-center px-4 py-8 font-medium transition-colors bg-blue-50 hover:bg-opacity-30 bg-opacity-20 rounded-3xl border-opacity-30 glass-glow"
    >
      <span className="absolute block left-4 top-4">{data.flag}</span>
      <img src={data.profile} alt="" className="w-14" />
      <p className="mt-2 text-gray-900"> {data.name} </p>
      <p className="mt-1 text-gray-900 text-opacity-50"> {data.role} </p>
      <div className="sm:w-auto w-full flex items-center gap-1 mt-6 px-2 h-[32px] bg-white rounded-xl bg-opacity-20">
        <img src={data.exCompanyLogo} alt="" className="w-4 h-w-4" />
        <p className="mt-1 text-blue-900 truncate text-opacity-60"> {data.exRole} </p>
      </div>
    </a>
  );
}

export function Team() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 md:grid-cols-4">
      {STACKERS.map((stacker) => {
        return <Member data={stacker}></Member>;
      })}
    </div>
  );
}
