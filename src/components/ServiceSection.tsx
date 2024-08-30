import React from "react";
import { Button } from "./Button";
import Scene04 from "../../public/scenes04.svg";
import Scene05 from "../../public/scenes05.svg";
import Scene08 from "../../public/scenes08.svg";
import Component02 from "../../public/component02.svg";
import Component05 from "../../public/component05.svg";
import Scene03 from "../../public/scenes03.svg";
import { Rounded } from "./Rounded";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

export const ServiceSection: React.FC = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div
      className="flex flex-col justify-center mt-10 lg:mt-12 lg:mb-[4rem] lg:m-6"
      id="service"
    >
      <div className="mt-[6rem] lg:my-[6rem]">
        <h2 className="text-4xl text-legalify-primary font-semibold text-center">
          {t("serviceTitle")}
        </h2>
      </div>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-5 lg:mt-12 mb-10 gap-10">
        <div className="flex flex-col items-start min-w-[15.75rem] min-h-[24rem]">
          <div className="h-[11rem] grid self-center  lg:self-start lg:items-end">
            <div className="flex">
              <div className="self-end mr-2">
                <Component02 />
              </div>
              <div className="self-end mb-4">
                <Component05 />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col lg:mt-0 mt-4">
            <div className="mr-4">
              <Rounded label="1" />
            </div>
            <div className="max-w-[13rem] min-h-[3.75rem]">
              <p className="font-semibold text-sm">{t("serviceItem1")}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start min-h-[24rem]">
          <div className="h-[11rem] grid self-center lg:self-start lg:items-end">
            <Scene08 />
          </div>
          <div className="flex lg:flex-col lg:mt-0 mt-4">
            <div className="mr-4">
              <Rounded label="2" />
            </div>
            <p className="font-semibold text-sm max-w-[13rem] min-h-[3.75rem]">
              {t("serviceItem2")}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start min-h-[24rem]">
          <div className="h-[11rem] grid self-center lg:self-start lg:items-end">
            <Scene05 />
          </div>
          <div className="flex lg:flex-col lg:mt-0 mt-4">
            <div className="mr-4">
              <Rounded label="3" />
            </div>
            <p className="font-semibold text-sm max-w-[13rem] min-h-[3.75rem]">
              {t("serviceItem3_1")} <br />
              {t("serviceItem3_2")} <br />
              {t("serviceItem3_3")} <br />
              {t("serviceItem3_4")} <br />
              {t("serviceItem3_5")} <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start min-h-[24rem]">
          <div className="h-[11rem] grid self-center lg:self-start lg:items-end">
            <Scene04 />
          </div>
          <div className="flex lg:flex-col lg:mt-0 mt-4">
            <div className="mr-4">
              <Rounded label="4" />
            </div>
            <p className="font-semibold text-sm max-w-[13rem] min-h-[3.75rem]">
              {t("serviceItem4")}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start min-h-[24rem]">
          <div className="h-[11rem] w-[13rem] grid self-center lg:self-start lg:items-end">
            <Scene03 />
          </div>
          <div className="flex lg:flex-col lg:mt-0 mt-4">
            <div className="mr-4">
              <Rounded label="5" />
            </div>
            <p className="font-semibold text-sm max-w-[13rem] min-h-[3.75rem]">
              {t("serviceItem5")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
