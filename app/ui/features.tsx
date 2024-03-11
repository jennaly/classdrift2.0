import React from "react";
import { Feature, features } from "@/app/lib/featuresData";
import clsx from "clsx";
import Image from "next/image";

interface Card extends React.HTMLAttributes<HTMLDivElement> {
  feature: Feature;
}

const Card = ({ feature }: Card) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl font-medium",
        feature.style ? `${feature.style}` : "flex flex-col justify-between"
      )}
    >
      <div className="flex flex-col justify-between">
        <p className="text-2xl py-10 px-10 lg:pr-0 lg:pl-10">
          {feature.heading.main}
          <span className="block text-classdrift-gray-100">
            {feature.heading.details}
          </span>
        </p>

        {feature.subheading && (
          <p className="text-xl p-8">
            {feature.subheading.main}
            <span className="block text-classdrift-gray-100">
              {feature.subheading.details}
            </span>
          </p>
        )}
      </div>
      <div
        className={clsx(
          "flex",
          { "justify-end": feature.image.position === "end" },
          { "justify-start": feature.image.position === "start" }
        )}
      >
        <Image
          src={feature.image.url}
          alt={feature.image.alt}
          width={500}
          height={500}
          sizes="100vw"
          className={clsx("flex rounded-b-xl", feature.image.style)}
        />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10">
      {features.map((feature, index) => (
        <Card feature={feature} key={index} />
      ))}
    </div>
  );
};

export default Features;
