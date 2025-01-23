import React from "react";
import CodeText from "../CodeText";
import { useState } from "react";

function SectionCard({
  title,
  subtitle,
  technologies,
  children,
  image,
  linkgithub,
  ShowProject = false,
  SecondImage = false,
  image2,
}) {
  const groupedTechnologies = [];
  for (let i = 0; i < technologies.length; i += 3) {
    groupedTechnologies.push(technologies.slice(i, i + 3));
  }

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="p-4 border rounded-lg border-neutral-500/60 flex flex-col cursor-pointer group hover:bg-neutral-700/70 transition-all duration-300 shadow-2xl shadow-neutral-900"
      >
        <div className="flex justify-between gap-10 ">
          <div className="flex justify-center flex-col">
            <h1 className="text-md font-semibold">{title}</h1>
            {subtitle && <p className="text-xs text-neutral-400">{subtitle}</p>}
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            {groupedTechnologies.map((group, groupIndex) => (
              <div className="flex gap-2 flex-wrap sm:flex-nowrap" key={groupIndex}>
                {group.map((tech, index) => (
                  <CodeText className="text-xs flex items-center" key={index}>
                    {React.cloneElement(tech.icon, { width: "14px" })}
                    {tech.name}
                  </CodeText>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out transform ${
            isVisible
              ? "max-h-[1000px] opacity-100 translate-y-0 scale-100"
              : "max-h-0 opacity-0 -translate-y-4 scale-95"
          }`}
        >
          <div className="flex flex-col gap-6 max-w-[400px] text-wrap items-center pt-4">
            <div className="transition-all duration-500 ease-in-out flex flex-col gap-2">
              <img
                className="rounded-xl shadow-xl"
                src={image}
                width={"auto"}
              />
              {SecondImage && (
                <img
                  className="rounded-xl shadow-xl"
                  src={image2}
                  width={"auto"}
                />
              )}
            </div>
            <div className="flex items-center justify-center transition-all duration-300 shadow-md shadow-transparent hover:shadow-neutral-400 w-fit">
              {ShowProject && (
                <a href={linkgithub}>
                  <CodeText>|Voir le projet|</CodeText>
                </a>
              )}
            </div>
            <div className="font-light text-justify">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
