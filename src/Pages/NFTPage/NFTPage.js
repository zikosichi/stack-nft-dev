import "./nft-page.css";
import StackLogo from "../../assets/StackLogo.svg";
import DiscordLogo from "../../assets/discord.svg";
import TwitterLogo from "../../assets/twitter.svg";
import CraftLogo from "../../assets/craft.svg";
import Cursors from "../../assets/Cursors.png";
import CursorsMobile from "../../assets/cursors-mobile.png";

import Panorama from "../../assets/panorama/panorama.png";
import PanoramaFloor from "../../assets/panorama/Floor.png";
import PanoramaReflection from "../../assets/panorama/Reflection.png";

import SpaceDecks from "../../assets/SpaceDecks.png";
import DeckGround from "../../assets/footer/deck.png";
import Spaceship from "../../assets/footer/Spaceship.png";
import SpaceshipShadow from "../../assets/footer/Shadow.png";

import InfinityIcon from "../../assets/perks/infinity.svg";
import CalendarIcon from "../../assets/perks/calendar.svg";
import CursorIcon from "../../assets/perks/cursor.svg";
import DiscordIcon from "../../assets/perks/discord.svg";
import GavelIcon from "../../assets/perks/gavel.svg";
import TicketIcon from "../../assets/perks/ticket.svg";
import UserIcon from "../../assets/perks/user.svg";
import UsersIcon from "../../assets/perks/users.svg";

import FiveHundredIcon from "../../assets/investor-logos/500.png";
import BogIcon from "../../assets/investor-logos/Bog.png";
import CircleIcon from "../../assets/investor-logos/Circle Cove.png";
import FlyerIcon from "../../assets/investor-logos/Flyer One Ventures.png";
import LunarIcon from "../../assets/investor-logos/Lunar ventures.png";
import PeakIcon from "../../assets/investor-logos/Peak Capital.png";
import WayraIcon from "../../assets/investor-logos/Wayra.png";
import ZemuIcon from "../../assets/investor-logos/Zemu.png";

import { Button, H1, P, UtilityIcon } from "./Elements";
import { FAQ } from "./FAQ";
import { Team } from "./Team";

function NFTPage() {
  return (
    <div className="overflow-x-hidden NFTPage">
      {/* ABOVE THE FOLD */}
      <div className="container px-4 pt-20 mx-auto text-center md:pt-32">
        <img src={StackLogo} alt="Stack Logo" className="mx-auto" />

        <div className="max-w-5xl px-4 mx-auto">
          <H1 className="max-w-5xl mt-20 md:mt-44">
            {/* <span className="font-normal text-7xl">We organize chaotic internet</span> */}
            We organize chaotic internet
          </H1>
          <P className="mt-10">
            Stack is a Spatial Browser for Mindful online living
          </P>

          <div className="inline-flex flex-col gap-3 mx-auto mt-20 md:flex-row">
            <Button href="https://discord.stackbrowser.com/" icon={DiscordLogo}>
              Join our Discord
            </Button>
            <Button
              href="https://twitter.com/stack_hq"
              color="lightBlue"
              icon={TwitterLogo}
            >
              See sneak peeks
            </Button>
          </div>
        </div>
      </div>

      {/* PANORAMA */}
      <div className="container mx-auto text-center mb-12 max-w-[1800px]">
        <div className="relative w-[200vw] translate-x-[-50vw] lg:translate-x-0 lg:w-auto">
          <img src={Panorama} alt="Stack Panorama" />
          <img
            src={PanoramaFloor}
            alt="Stack Floor"
            className="absolute -bottom-[40%] opacity-50 w-full scale-x-105"
          />
          <img
            src={PanoramaReflection}
            alt="Stack Floor"
            className="absolute -bottom-[40%] w-[94%] left-1/2 -translate-x-1/2"
          />
        </div>
      </div>

      {/* ABOUT */}
      <div className="container max-w-5xl px-6 mx-auto my-12 md:text-center">
        <H1>About the project</H1>
        <P className="mt-10">
          This is a Utility NFT Project. We are issuing Non-Fungible tokens as
          an ownership deed for Stack PRO lifetime License.
        </P>
        <P className="mt-10">
          We are also selling Unique Cursors as the Art representing NFTs.
        </P>
        <P className="mt-10">
          Join us and buy Stack NFT only if you share our vision for the future
          of the internet, want to be part of our journey, and support Stack!
        </P>

        <div className="inline-flex gap-3 mx-auto mt-12">
          <Button
            href="https://whitepaper.stackbrowser.com/"
            color="white"
            icon={CraftLogo}
          >
            Read Whitepaper
          </Button>
        </div>
      </div>

      {/* CURSORS */}
      <div className="container px-3 mx-auto text-center my-28 max-w-8xl">
        <img src={Cursors} alt="NFT Cursors" className="hidden md:block" />
        <img
          src={CursorsMobile}
          alt="NFT Cursors"
          className="block md:hidden"
        />
      </div>

      {/* UTILITY */}
      <div className="container max-w-5xl px-6 mx-auto my-12 md:my-32">
        <H1 className="mb-6 md:mb-20">Primary Utility</H1>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12 md:gap-12">
          <div className="flex flex-col md:col-span-6 lg:col-span-4">
            <div className="mb-12 md:mb-20">
              <UtilityIcon
                className="flex-shrink-0 hidden md:flex"
                icon={InfinityIcon}
              />
              <h2 className="text-[#FFEAB6] font-bold md:font-medium text-2xl md:text-3xl text-shadow-xs mb-4">
                Lifetime License Of Stack PRO
              </h2>
              <P className="mb-4 text-xl">
                Limitless Organization & harmonious collaboration
              </P>
              <p className="bg-[#FFEAB6] bg-opacity-20 text-[#FFEAB6] px-3 py-2 inline-block rounded-md text-lg rounded-tr-2xl rounded-bl-2xl">
                Price without NFT - $7,000
              </p>
            </div>

            <div className="mb-12 md:mb-20">
              <UtilityIcon
                className="flex-shrink-0 hidden md:flex"
                icon={UsersIcon}
              />
              <h2 className="text-[#FFEAB6] font-bold md:font-medium text-2xl md:text-3xl text-shadow-xs mb-4">
                Software as a Stake
              </h2>
              <P className="text-xl">
                Sharing return on innovation with the community
              </P>
            </div>

            <div className="mb-12 md:mb-20">
              <UtilityIcon
                className="flex-shrink-0 hidden md:flex"
                icon={CursorIcon}
              />
              <h2 className="text-[#FFEAB6] font-bold md:font-medium text-2xl md:text-3xl text-shadow-xs mb-4">
                Unique Cursor
              </h2>
              <P className="text-xl">
                Own Your Unique Cursor And set it as a default on your desktop
              </P>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-7 md:col-end-13">
            <img src={SpaceDecks} alt="Space Decks" />
          </div>
        </div>
      </div>

      {/* PERKS */}
      <div className="container max-w-5xl px-6 mx-auto my-16 -mt-12 lg:my-32 md:mt-32">
        <H1 className="mb-6 md:mb-20">Plus typical NFT Perks</H1>
        <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 gap-x-28">
          <div className="flex items-center gap-4">
            <UtilityIcon className="flex-shrink-0" icon={TicketIcon} />
            <P className="mb-4 text-xl">
              Permanent listing on Stack NFT Hall of Fame
            </P>
          </div>
          <div className="flex items-center gap-4">
            <UtilityIcon className="flex-shrink-0" icon={UserIcon} />
            <P className="mb-4 text-xl">
              Special Role in Discord (Displayed separately from online members)
            </P>
          </div>
          <div className="flex items-center gap-4">
            <UtilityIcon className="flex-shrink-0" icon={DiscordIcon} />
            <P className="mb-4 text-xl">
              Exclusive Access to Stack team Discord channels
            </P>
          </div>
          <div className="flex items-center gap-4">
            <UtilityIcon className="flex-shrink-0" icon={CalendarIcon} />
            <P className="mb-4 text-xl">
              Exclusive access to Stackers Online & offline events throughout
              the year
            </P>
          </div>
          <div className="flex items-center gap-4">
            <UtilityIcon className="flex-shrink-0" icon={GavelIcon} />
            <P className="mb-4 text-xl">
              Exclusive Access to Stackers' governance and decision making
              Discord Channels
            </P>
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="container px-6 py-20 mx-auto lg:px-0 max-w-7xl">
        <Team />
      </div>

      {/* INVESTORS */}
      <div className="container max-w-5xl px-3 mx-auto my-20 lg:px-0 md:my-32">
        <div className="py-8 md:py-12 bg-blue-50 bg-opacity-20 rounded-3xl border-opacity-30 glass-glow">
          <H1 className="mb-8 text-center md:mb-12">Our Partners</H1>
          <hr className="mx-12 mb-6 md:mb-9 opacity-20" />
          <div className="grid grid-cols-2 pl-10 gap-y-12 gap-x-0 md:gap-x-28">
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
              href="https://peak.capital/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PeakIcon} alt="" />
            </a>
          </div>
          <hr className="mx-12 my-6 md:my-9 opacity-20" />
          <div className="grid grid-cols-2 px-14 gap-y-2 md:gap-y-6 md:grid-cols-3 gap-x-0 md:gap-x-28">
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
              href="https://bankofgeorgia.ge/en/"
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
              href="https://www.wayra.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WayraIcon} alt="" />
            </a>
          </div>
          <hr className="mx-12 my-6 md:my-9 opacity-20" />
          <div className="grid grid-cols-3">
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
                <span className="hidden md:inline">Institutional</span>{" "}
                investors
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
      </div>

      {/* FAQ */}
      <div className="container max-w-5xl px-6 py-12 mx-auto lg:py-32 lg:px-0">
        <H1 className="mb-6 md:mb-12 md:text-acenter">
          Frequently Asked Questions
        </H1>
        <FAQ />
      </div>

      {/* FOOTER */}
      <div className="container max-w-5xl px-6 py-16 mx-auto lg:py-32 lg:px-0">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <H1 className="mb-3 md:mb-6 leading-[1.1]">Grab your spaceship</H1>
            <P className="mb-6 text-3xl md:mb-10 text-opacity-60">
              And join the journy
            </P>
            <Button href="https://discord.stackbrowser.com/" icon={DiscordLogo}>
              Join our Discord
            </Button>
          </div>
          <div className="relative order-first mb-6 lg:col-span-2 md:order-last md:mb-0">
            <img src={DeckGround} alt="" className="w-full" />
            <div className="absolute left-[50%] bottom-[20%] w-[35%] -translate-x-1/2 -translate-y-1/2">
              <img src={SpaceshipShadow} alt="" className="shadow-animation" />
            </div>
            <div className="absolute left-[50%] bottom-[45%] w-[35%] -translate-x-1/2 -translate-y-1/2">
              <img src={Spaceship} alt="" className="floating" />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER NAV */}
      <div className="container max-w-5xl px-6 py-16 mx-auto md:py-32 lg:px-0">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-0">
          <div>
            <P className="mb-4">
              <span className="text-lg md:text-xl">Stack NFT</span>
            </P>
            <a
              href="https://www.craft.do/s/nHv2yCgd6nnONK/b/3323E096-D2C9-4165-977F-82C68A0A58D8/%F0%9F%90%B5Why_NFT"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">Why NFT?</span>
              </P>
            </a>
            <a
              href="https://www.craft.do/s/nHv2yCgd6nnONK/b/9E890184-6154-4BC5-A9CC-F4E3C29671A7/%F0%9F%8D%8E_Utility"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">Utility</span>
              </P>
            </a>
            <a
              href="https://www.craft.do/s/nHv2yCgd6nnONK/b/84AE195A-F0A0-4687-BBAA-C004EF42444E/%F0%9F%A5%87Rarity"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">Rarity</span>
              </P>
            </a>
            <a
              href="https://www.craft.do/s/nHv2yCgd6nnONK/b/9844861F-3DCC-49A7-9966-060F22515EF7/%F0%9F%96%BC_Art"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">The Art</span>
              </P>
            </a>
            <a
              href="https://www.craft.do/s/nHv2yCgd6nnONK/b/74DA3241-9EF8-4C7F-A15B-9DE106AC872A/%F0%9F%A4%9DPartners"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">Partners</span>
              </P>
            </a>
          </div>

          <div>
            <P className="mb-4">
              <span className="text-lg md:text-xl">Join the Tribe</span>
            </P>
            <a
              href="https://discord.stackbrowser.com/"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">Discord</span>
              </P>
            </a>
            <a
              href="https://twitter.com/stack_hq"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">Twitter</span>
              </P>
            </a>
            <a
              href="https://www.instagram.com/stackbrowser/"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">Instagram</span>
              </P>
            </a>
          </div>

          <div>
            <P className="mb-4">
              <span className="text-lg md:text-xl">Stack Browser</span>
            </P>
            <a
              href="https://www.craft.do/s/nHv2yCgd6nnONK/b/473B677E-FF13-4FA8-AD46-611152249FDA/%F0%9F%96%90_What_is_Stack"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">What is Stack</span>
              </P>
            </a>
            <a
              href="https://stackbrowser.com/"
              className="block mb-1 opacity-50 hover:opacity-100"
            >
              <P>
                <span className="text-lg md:text-xl">
                  Download Stack Legacy
                </span>
              </P>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTPage;
