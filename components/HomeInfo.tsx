import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoBox = ({
  text,
  link,
  btnText,
}: {
  text: string;
  link: string;
  btnText: string;
}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link href={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <Image
        src="/icons/arrow.svg"
        alt="arrow"
        width={16}
        height={16}
        className="object-contain"
      />
    </Link>
  </div>
);

const renderContent: { [key: number]: JSX.Element } = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Maciej</span>👋
      <br />A software engineer based in Poland.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's get in touch"
    />
  ),
};

const HomeInfo = ({ currentStage }: { currentStage: number }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
