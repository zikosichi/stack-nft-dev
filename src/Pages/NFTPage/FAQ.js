import { P } from "./Elements";
import PlusIcon from "../../assets/plus.svg";
import { useState } from "react";

function FAQItem({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between px-5 py-4 -mx-5 transition-colors cursor-pointer md:py-5 rounded-2xl border-opacity-20 hover:bg-white hover:bg-opacity-10"
      >
        <P>{title}</P>
        <img src={PlusIcon} alt="" />
      </div>
      {expanded && (
        <div className="mt-2 mb-6 text-white text-opacity-70">{children}</div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <div>
      <FAQItem title="Why are you building a new browser?">
        <p className="mb-3">
          It’s been more than 20 years since last major innovation in the
          browser space. The conventional design of widely adopted browsers was
          actually created in the late 90s & since then it has hardly ever
          changed. When designing the first browser, the initial goal was to
          create a tool for browsing the web which by that time was only a
          collection of non-interactive company websites.
        </p>
        <p className="mb-3">
          In today's world where 4.3 Billion people interact beyond physical
          boundaries, work, create, communicate, and have fun through 1.5
          Billion websites and applications, these browsers create more problems
          than value.
        </p>
        <p className="mb-3">
          Therefore, we don't like the clumsy internet experience we have today.
          And with Stack we want to change that!
        </p>
      </FAQItem>
      <FAQItem title="How is Stack different?">
        <p className="mb-3">
          Stack’s tabless environment, spatial design, and multiplayer
          experience, makes it different from any other browsers on the market.
        </p>
        <p className="mb-3">
          Therefore, as our users love to say, Stack is the best tool for:
        </p>
        <ul className="pl-6 mb-3 list-disc">
          <li>
            <a
              className="font-medium underline hover:text-white"
              href="https://www.craft.do/s/zAnC5c7urYBDoX/b/C2A1988B-C2BA-4820-933D-A369EE028E91/%F0%9F%A7%AD_Organization___Navigation_"
            >
              Organizing and navigating through your web content;
            </a>
          </li>
          <li>
            <a
              className="font-medium underline hover:text-white"
              href="https://www.craft.do/s/zAnC5c7urYBDoX/b/A925248E-15E9-4068-A80C-09D3FA676D40/%F0%9F%A7%98%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F_Focus___Mindful_Online_Living"
            >
              Focus & mindful online living;
            </a>
          </li>
          <li>
            <a
              className="font-medium underline hover:text-white"
              href="https://www.craft.do/s/zAnC5c7urYBDoX/b/E9772BD7-3D6B-407A-BD6F-C5BDD7F5A1C3/%F0%9F%A7%91%E2%80%8D%F0%9F%92%BB_Multiplayer___Collaboration"
            >
              And collaboration online;
            </a>
          </li>
        </ul>
      </FAQItem>
      <FAQItem title="How do you make money?">
        <p className="mb-3">Our pricing philosophy is simple: </p>
        <p className="mb-3">
          Browsing shall be free of ANY charge (no cash, no data, nothing!) -
          always and for everyone!{" "}
        </p>
        <p className="mb-3">
          We only take our fair share of value that our productivity &
          collabooration features produce by essentially helping you make more
          money.{" "}
        </p>
        <p className="mb-3">
          In addition, we run a shop of personalized design elements and custom
          experiences.{" "}
        </p>
        <p className="mb-3">Here is our pricing table: </p>
        <PricingTable />
      </FAQItem>
      <FAQItem title="Who are in the team? ">
        <p className="mb-3">
          We are a small team of 12 with an office in Amsterdam, but team
          members in four countries - the Netherlands, the US, Poland, and the
          Republic of Georgia. And we have been doing Stack together for more
          than 2 years. The team is made of people who have previously worked at
          companies like Opera, Stripe, and Philips, and organizations such as
          the UN.
        </p>
        <a
          className="font-medium underline hover:text-white"
          href="https://www.craft.do/s/fwzTJuS8NlwTnI"
        >
          Read more
        </a>
      </FAQItem>
      <FAQItem title="Who are the partners?">
        <p className="mb-3">
          We are backed by some of the most reputable and experienced partners
          in the industry, such as{" "}
          <a
            className="font-medium underline hover:text-white"
            href="https://peak.capital/"
          >
            Peak Capital
          </a>
          ,{" "}
          <a
            className="font-medium underline hover:text-white"
            href="https://lunar.vc/"
          >
            Lunar Ventures
          </a>
          ,{" "}
          <a
            className="font-medium underline hover:text-white"
            href="https://500.co/"
          >
            500Startups
          </a>
          , and{" "}
          <a
            className="font-medium underline hover:text-white"
            href="https://x.wayra.com/"
          >
            {" "}
            Wayra X
          </a>
          . In total Stack has 11 investors from 10 different countries.
        </p>
        <a
          className="font-medium underline hover:text-white"
          href="https://www.craft.do/s/MfVtAY4Btm7rOP"
        >
          Read more
        </a>
      </FAQItem>
      <FAQItem title="Why are you selling NFTs?">
        <p className="mb-3">
          In 2020 we sold 1000 lifetime licenses of Stack Pro.
        </p>
        <p className="mb-3">
          This year, we decided to sell limited number of lifetime licenses of
          Stack PRO again. Deliberating on how to make the new lifetime deal
          campaign a success, we had the following things in mind:
        </p>
        <ul className="pl-6 mb-3 list-disc">
          <li>
            {" "}
            Proper recognition of those Stackers who supported us in 2020;{" "}
          </li>
          <li> Making it easy to resell the license in the future; </li>
          <li>
            {" "}
            Making sure those who buy LTL today get more than just lifetime
            access to Stack PRO;{" "}
          </li>
        </ul>
        <p className="mb-3">
          Thinking about how to optimize our LTL campaign on these points, we
          came across NFTs. Non-fungible tokens are the best technology for the
          verification of digital asset ownership, and not only!
        </p>
        <ul className="pl-6 mb-3 list-disc">
          <li>
            Choosing to sell lifetime deals as NFTs solves reselling problems.
            The license is not attached to an e-mail, and there are quite a few
            secondary NFT marketplaces.
          </li>
          <li>
            {" "}
            Previous LTL buyers can now convert their licenses into NFTs, the
            value of which will be at least 5x what they had initially paid.{" "}
          </li>
          <li>
            And NFTs open up tremendous WEB3 possibilities, ranging from holders
            generating a passive income through renting the license out when not
            using, to having a much bigger say in the direction of the company
            and governance rights.
          </li>
        </ul>
        <a
          className="font-medium underline hover:text-white"
          href="https://www.craft.do/s/7OPYZlvz3Oef0A"
        >
          Read more
        </a>
      </FAQItem>
      <FAQItem title="What is the Utility?">
        <p className="mb-3">
          Lifetime access of Stack PRO - that includes unlimited #Rooms and up
          to 55 collaborator seats per NFT space. Price of this service without
          NFT is up to $7,000 USD a year
        </p>
        <p className="mb-3">
          Software as a Stake - revenue-sharing model for the most dedicated and
          active supporters of Stack.
        </p>
        <a
          className="font-medium underline hover:text-white"
          href="https://www.craft.do/s/fPiHVa3K4I5tiE"
        >
          Read more
        </a>
      </FAQItem>
      <FAQItem title="What is the Art?">
        <p className="mb-3">
          Stack NFT grants ownership to one of the unique 6242 multiplayer
          cursors aka Stack spaceships.
        </p>
        <a
          className="font-medium underline hover:text-white"
          href="https://www.craft.do/s/vaFlZLaITiWyrC"
        >
          Read more
        </a>
      </FAQItem>
      <FAQItem title="What determines rarity?">
        <p className="mb-3">Rarity is determined by three factors:</p>
        <ul className="pl-6 mb-3 list-disc">
          <li>Art - Layers & Traits</li>
          <li>The number of collaborators per space</li>
          <li>The amount of linked subscriptions</li>
        </ul>
        <p className="mb-3">
          The rarity is correlated in each of these components i.e. the more
          uncommon the NFT art, the more collaborators and the linked
          subscriptions the NFT space has.{" "}
        </p>
        <a
          className="font-medium underline hover:text-white"
          href="https://www.craft.do/s/Z9xjYlIjYB68zt"
        >
          Read more
        </a>
      </FAQItem>
      <FAQItem title="Which blockchain are you using?">
        <p className="mb-3">Stack NFT is based on Ethereum Blokchain. </p>
        <p className="mb-3">
          Each NFT is represented by ERC721 smart contract standard.
        </p>
      </FAQItem>
      <FAQItem title="When is the Mint Date?">
        <p className="mb-3">
          Minting will be possible on this page on July 28, 2022.{" "}
        </p>
      </FAQItem>
      <FAQItem title="How can I get whitelisted?">
        <p className="mb-3">
          We share and discuss all details related to whitelisting at our{" "}
          <a
            className="font-medium underline hover:text-white"
            href="https://discord.stackbrowser.com/"
          >
            Discord server
          </a>
          .
        </p>
      </FAQItem>
      <FAQItem title="What is the royalty for secondary sales?">
        <p className="mb-3">
          Stack takes a 5% royalty fee from every resale of NFT through
          third-party marketplaces. 100% of the income received through
          loyalties will be directed to{" "}
          <a
            className="font-medium underline hover:text-white"
            href="https://placeholder.website/"
          >
            Mindful Web Foundation
          </a>
          .
        </p>
      </FAQItem>
      <FAQItem title="How can I contribute?">
        <p className="mb-3">
          We strive toward making online living pleasant and mindful. On this
          path, we are fighting against the 20-year old habit of using the
          internet which is upheld by conventional browsers - like Chrome, Edge
          & Safari. It’s like David vs Goliath.
        </p>
        <p className="mb-3">
          We believe that if we succeed, there will be less stress and more joy,
          people can focus better, collaborate harmoniously and achieve more
          with less. But to win this battle we need to spread the word! Stack is
          now loved only by a few thousand Stackers. Help us grow community of
          Stackers and to show more people what we have built!
        </p>
        <a
          className="font-medium underline hover:text-white"
          href="https://twitter.com/Stack_HQ"
        >
          Twitter
        </a>{" "}
        |{" "}
        <a
          className="font-medium underline hover:text-white"
          href="https://www.instagram.com/stackbrowser/"
        >
          Instagram
        </a>
      </FAQItem>
    </div>
  );
}

function PricingTable() {
  const people = [
    { name: "Rooms", title: "3", email: "∞", role: "∞" },
    { name: "Cards", title: "∞", email: "∞", role: "∞" },
    { name: "Stacks", title: "∞", email: "∞", role: "∞" },
    { name: "Collaborators", title: "0", email: "0", role: "✓" },
    { name: "Badge", title: "𝘟", email: "PRO", role: "Custom" },
    { name: "Sync", title: "𝘟", email: "✓", role: "✓" },
    { name: "Shareable", title: "𝘟", email: "✓", role: "✓" },
  ];

  return (
    <div className="sm:px-6 lg:px-8">
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden md:rounded-xl">
              <table className="min-w-full divide-y divide-gray-300 divide-opacity-40">
                <thead className="bg-blue-50 bg-opacity-20">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-white sm:pl-6"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-base font-semibold text-white"
                    >
                      Free
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-base font-semibold text-white"
                    >
                      Pro
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-base font-semibold text-white"
                    >
                      Team
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 divide-opacity-40 bg-blue-50 bg-opacity-10">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="py-4 pl-4 pr-3 text-base font-medium text-white-300 whitespace-nowrap sm:pl-6">
                        {person.name}
                      </td>
                      <td className="px-3 py-4 text-base text-white-300 whitespace-nowrap">
                        {person.title}
                      </td>
                      <td className="px-3 py-4 text-base text-white-300 whitespace-nowrap">
                        {person.email}
                      </td>
                      <td className="px-3 py-4 text-base text-white-300 whitespace-nowrap">
                        {person.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-blue-50 bg-opacity-20">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-white sm:pl-6"
                    >
                      Annual Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-base font-semibold text-white"
                    >
                      Free forever
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-base font-semibold text-white"
                    >
                      $99
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-base font-semibold text-white"
                    >
                      $99 p/seat
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
