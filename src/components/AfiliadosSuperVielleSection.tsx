import Link from "next/link";
import React from "react";
import SuperVielleLogo from "../../public/afiliados/supervielle/logo.png";
import { Button } from "./Button";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

interface Props {
  id: string;
}

export const AfiliadosSuperVielleSection: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div id={id}>
      <div className="grid my-10 lg:grid-cols-5 lg:m-3 lg:mt-12 lg:mb-[6rem]">
        <div className="lg:col-span-2 self-center">
          <div className="flex items-end my-6 md:w-[20rem] xl:w-[27rem] 2xl:w-[32rem]">
            <img
              src={`afiliados/supervielle/logoES.png`}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="lg:col-span-3 self-center">
          <div className="flex flex-col">
            <div className="mx-6 my-3 max-w-2xl">
              <h2 className="text-4xl text-legalify-primary font-semibold">
                {t("SupervielleTitle")}
              </h2>
              <p className="text-legalify-primary text-lg font-normal">
                {t("SupervielleDescription")}
              </p>
              <div className="m-3 lg:m-6">
                <button
                  className="px-6 py-2.5 rounded-lg text-[13.55px] md:text-lg bg-legalify-primary text-white hover:bg-legalify-secondary hover:text-legalify-primary"
                  onClick={() =>
                    (window.location.href = `/aliados/supervielle`)
                  }
                >
                  <p className="font-medium">{t("supervielleDescription2")}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
