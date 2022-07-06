import "./nft-page.css";
import StackLogo from "../../assets/StackLogo.svg";
import DiscordLogo from "../../assets/discord.svg";
import TwitterLogo from "../../assets/twitter.svg";
import CraftLogo from "../../assets/craft.svg";
import Cursors from "../../assets/Cursors.png";
import SpaceDecks from "../../assets/SpaceDecks.png";

import InfinityIcon from "../../assets/perks/infinity.svg";
import CalendarIcon from "../../assets/perks/calendar.svg";
import CursorIcon from "../../assets/perks/cursor.svg";
import DiscordIcon from "../../assets/perks/discord.svg";
import GavelIcon from "../../assets/perks/gavel.svg";
import TicketIcon from "../../assets/perks/ticket.svg";
import UserIcon from "../../assets/perks/user.svg";
import UsersIcon from "../../assets/perks/users.svg";

import { Button, H1, P, UtilityIcon } from "./Elements";

function NFTPage() {
  return (
    <div className="min-h-[1000vh] NFTPage">
      {/* ABOVE THE FOLD */}
      <div className="container px-4 pt-32 pb-16 mx-auto text-center">
        <img src={StackLogo} alt="Stack Logo" className="mx-auto" />

        <div className="max-w-3xl px-4 mx-auto">
          <H1 className="max-w-3xl mt-44">
            6,242 NFTs to make online collaboration harmonious
          </H1>
          <P className="mt-10">
            Stack is a Multiplayer browser for Productive Collaboration
          </P>

          <div className="inline-flex gap-3 mx-auto mt-20">
            <Button icon={DiscordLogo}>Join our Discord</Button>
            <Button color="lightBlue" icon={TwitterLogo}>
              See sneak peeks
            </Button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="container max-w-4xl mx-auto text-center my-44">
        <H1>About the project</H1>
        <P className="mt-10">
          This is a Utility NFT Project. We are issuing 6,242 Non-Fungible
          tokens as an ownership deed for Stack PRO lifetime License.
        </P>
        <P className="mt-10">
          We are also selling 6,242 Unique Cursors as the Art representing NFTs.
        </P>
        <P className="mt-10">
          Join us and buy Stack NFT only if you share our vision for the future
          of the internet, want to be part of our journey, and support Stack!
        </P>

        <div className="inline-flex gap-3 mx-auto mt-12">
          <Button color="white" icon={CraftLogo}>
            See sneak peeks
          </Button>
        </div>
      </div>

      {/* CURSORS */}
      <div className="container mx-auto text-center my-28 max-w-8xl">
        <img src={Cursors} alt="NFT Cursors" />
      </div>

      {/* CURSORS */}
      <div className="container max-w-5xl mx-auto my-44">
        <H1 className="mb-20 text-center">Primary Utility</H1>
        <div className="grid grid-cols-12 gap-12">
          <div className="flex flex-col col-span-4">

            <div className="mb-20">
              <UtilityIcon icon={InfinityIcon} />
              <h2 className="text-[#FFEAB6] font-medium text-3xl text-shadow-xs mb-4">
                Lifetime License Of Stack PRO
              </h2>
              <P className="mb-4 text-xl"> Limitless Organization & harmonious collaboration </P>
              <p className="bg-[#FFEAB6] bg-opacity-20 text-[#FFEAB6] px-3 py-2 inline-block rounded-md text-lg rounded-tr-2xl rounded-bl-2xl">Price without NFT - $7,000</p>
            </div>

            <div className="mb-20">
              <UtilityIcon icon={UsersIcon} />
              <h2 className="text-[#FFEAB6] font-medium text-3xl text-shadow-xs mb-4">
                Software as a Stake
              </h2>
              <P className="text-xl"> Sharing return on innovation with the community </P>
            </div>

            <div className="mb-20">
              <UtilityIcon icon={CursorIcon} />
              <h2 className="text-[#FFEAB6] font-medium text-3xl text-shadow-xs mb-4">
                Unique Cursor
              </h2>
              <P className="text-xl"> Own Your Unique Cursor And set it as a default on your desktop </P>
            </div>

          </div>

          <div className="col-span-7 col-end-13">
            <img src={SpaceDecks} alt="Space Decks" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTPage;
