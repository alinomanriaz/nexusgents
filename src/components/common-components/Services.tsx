import React from "react";
import Featurepromises from "@/components/Featurepromises";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

interface Services {
  titles: {
    title: string;
    subtitle: string;
  };
  services: {
    icon: LucideIcon | IconType;
    title: string;
    description: string;
    features?: string[];
  }[];
}

const Services = ({ content }: { content: Services }) => {
  return (
    <section
      id="services"
      className=" flex flex-col justify-center items-center w-full "
    >
      <div className="w-11/12 h-full flex flex-col justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <div className="text-5xl font-semibold w-[40%]">
            {content.titles.title}
          </div>
          <div className="text-gray-500 w-96">{content.titles.subtitle}</div>
        </div>
        <div className="grid grid-cols-3  w-full h-full gap-6 my-10 ">
          {content.services.map((service, index) => (
            <Featurepromises
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
