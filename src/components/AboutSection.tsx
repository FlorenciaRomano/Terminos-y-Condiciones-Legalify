import React from "react";
import { AboutIcon } from "./AboutIcon";
import Scene06 from "../../public/scenes06.svg";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

interface AboutIconData {
  icon: string;
  width: number;
  height: number;
  label: string;
  description: string;
}

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const aboutIconData: AboutIconData[] = [
    {
      icon: "/simple.svg",
      width: 48,
      height: 39,
      label: t("IconAboutLabel1"),
      description: t("IconAboutDescription1"),
    },
    {
      icon: "/economico.svg",
      width: 37,
      height: 38,
      label: t("IconAboutLabel2"),
      description: t("IconAboutDescription2"),
    },
    {
      icon: "/segura.svg",
      width: 36,
      height: 39,
      label: t("IconAboutLabel3"),
      description: t("IconAboutDescription3"),
    },
    {
      icon: "/confiable.svg",
      width: 36,
      height: 39,
      label: t("IconAboutLabel4"),
      description: t("IconAboutDescription4"),
    },
    {
      icon: "/rentable.svg",
      width: 54,
      height: 39,
      label: t("IconAboutLabel5"),
      description: t("IconAboutDescription5"),
    },
  ];

  return (
    <div className="grid my-10 lg:grid-cols-5 lg:m-6 lg:mt-12 lg:mb-[6rem]">
      <div className="lg:col-span-2 self-end">
        <div className="flex items-end my-6 lg:w-[27rem]">
          <Scene06 />
        </div>
      </div>
      <div className="lg:col-span-3 self-end">
        <div className="flex flex-col">
          <div className="mx-6 my-3">
            <h2 className="text-4xl text-legalify-primary font-semibold">
              {t("titleAbout")}
            </h2>
          </div>
          <div className="mx-6 my-3 max-w-2xl">
            <p className="text-legalify-primary text-lg font-normal">
              {t("descriptionAbout")}
            </p>
          </div>
          <div className="mx-6 my-3 max-w-md">
            <p className="text-legalify-primary font-semibold">
              {t("descriptionAbout2")}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 m-6 lg:mt-12 ">
            {aboutIconData.map(
              ({ icon, width, height, label, description }, index) => (
                <div className="p-2 lg:p-0" key={`label-${index}`}>
                  <AboutIcon
                    icon={icon}
                    width={width}
                    height={height}
                    label={label}
                    description={description}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
