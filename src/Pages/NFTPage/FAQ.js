import { P } from "./Elements";
import PlusIcon from "../../assets/plus.svg";
import { useState } from "react";

function FAQItem({title, children}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div onClick={() => setExpanded(!expanded)} className="flex justify-between px-5 py-5 transition-colors cursor-pointer rounded-2xl border-opacity-20 hover:bg-white hover:bg-opacity-10">
        <P>{title}</P>
        <img src={PlusIcon} alt="" />
      </div>
      {expanded && (
        <div className="px-5 mt-2 mb-6 text-white text-opacity-70">
          {children}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <div>
      <FAQItem title="What is Stack?">
        Decentralization is at our core, so we want our project to be
        community run. In this phase we would Implement DAO and governance
        tools.
      </FAQItem>
      <FAQItem title="What is Stack?">
        Decentralization is at our core, so we want our project to be
        community run. In this phase we would Implement DAO and governance
        tools.
      </FAQItem>
      <FAQItem title="What is Stack?">
        Decentralization is at our core, so we want our project to be
        community run. In this phase we would Implement DAO and governance
        tools.
      </FAQItem>
      <FAQItem title="What is Stack?">
        Decentralization is at our core, so we want our project to be
        community run. In this phase we would Implement DAO and governance
        tools.
      </FAQItem>
      <FAQItem title="What is Stack?">
        Decentralization is at our core, so we want our project to be
        community run. In this phase we would Implement DAO and governance
        tools.
      </FAQItem>
      <FAQItem title="What is Stack?">
        Decentralization is at our core, so we want our project to be
        community run. In this phase we would Implement DAO and governance
        tools.
      </FAQItem>
    </div>
  );
}
