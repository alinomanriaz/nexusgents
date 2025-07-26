import React from "react";
import { LinkButton } from "../Button";
import { IconType } from "react-icons/lib";
interface Props {
  fheading: string;
  sheading: string;
  subheading: string;
  list: {
    Icon: IconType;
    text: string;
  }[];
  fbutton: {
    link: string;
    name: string;
  };
  sbutton: {
    link: string;
    name: string;
  };
}

const HeroSectionContentMarketing = ({ content }: { content: Props }) => {
  return (
    <section className="hero-section flex flex-col items-center justify-center h-[calc(100dvh-50px)]">
      <div className="flex justify-center items-center text-center flex-col overflow-hidden w-full sm:px-10">
        {/* Gradient Background Effects */}
        <div className="absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient"></div>
        <div className="fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient"></div>
        <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />

        <div className="flex flex-col justify-center items-center space-y-6">
          {/* Headline */}
          <div className="md:text-[80px] w-80 md:w-[80%] text-center md:leading-tight dark:text-slate-300 z-10 tracking-tight text-slate-900 font-medium text-3xl">
            <div className="flex justify-center items-center flex-col">
              <div className="flex flex-col leading-22 justify-center items-center">
                <div className="font-light">{content.fheading}</div>
                <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {content.sheading}
                </div>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <div className="text-xl text-gray-500 dark:text-gray-500 w-72 md:w-3/5 leading-6 tracking-wide">
            {content.subheading}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {content.list.map((data, idx) => (
              <div
                key={idx}
                className="card-style backdrop-blur-sm px-6 text-start py-4 flex justify-start items-center"
              >
                <data.Icon className="mr-4" /> {data.text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <LinkButton
              className={
                "bg-darkmodebtncolor w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full"
              }
              link={content.fbutton.link}
              name={content.fbutton.name}
            />
            <LinkButton
              className={
                "bg-white dark:bg-transparent ring-1 ring-gray-500/20 w-full sm:w-auto rounded-lg sm:rounded-full backdrop-blur-3xl"
              }
              link={content.sbutton.link}
              name={content.sbutton.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionContentMarketing;
