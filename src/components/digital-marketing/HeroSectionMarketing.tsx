import React from "react";
import { LinkButton } from "../Button";
import { IconType } from "react-icons/lib";

interface Props {
  fWord: string;
  Ficon: IconType;
  Sicon: IconType;
  Thicon: IconType;
  SWord: string;
  Text: string;
  subheading: string;
  Fbuttons: {
    link: string;
    name: string;
  };
  Sbuttons: {
    link: string;
    name: string;
  };
}

const HeroSectionMarketing = ({ content }: { content: Props }) => {
  return (
    <section className="hero-section flex flex-col items-center justify-center h-[calc(100dvh-50px)]">
      <div className="flex justify-center items-center text-center flex-col overflow-hidden w-full sm:px-10">
        {/* Gradient Background Effects */}
        <div className="absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient"></div>
        <div className="fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient"></div>
        <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />

        {/* Headline */}
        <div className="leading-tight md:my-8 my-6 md:text-[80px] w-80 md:w-[65%] text-center md:leading-tight dark:text-slate-300 z-10 tracking-tight text-slate-900 font-medium text-3xl">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center space-x-2">
              <div>{content.fWord}</div>
              <div className="rounded-full bg-gray-500/20">
                <content.Ficon className="size-20 p-4  text-yellow-600" />
              </div>
              <div className="rounded-full bg-gray-500/20">
                <content.Sicon className="size-20 p-4  text-green-600" />
              </div>
              <div className="rounded-full bg-gray-500/20">
                <content.Thicon className="size-20 p-4  text-blue-600" />
              </div>
              <div>{content.SWord}</div>
            </div>
            <div>{content.Text}</div>
          </div>
        </div>

        {/* Subheading */}
        <div className="text-md text-gray-600 dark:text-gray-500 w-72 md:w-3/5 leading-6 tracking-wide">
          {content.subheading}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center space-x-4 py-6">
          <LinkButton
            className={
              "bg-darkmodebtncolor w-full sm:w-auto dark:bg-gradient text-white rounded-lg sm:rounded-full"
            }
            link={content.Fbuttons.link}
            name={content.Fbuttons.name}
          />
          <LinkButton
            className={
              "bg-white dark:bg-transparent ring-1 ring-gray-500/20 w-full sm:w-auto rounded-lg sm:rounded-full backdrop-blur-3xl"
            }
            link={content.Sbuttons.link}
            name={content.Sbuttons.name}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionMarketing;
