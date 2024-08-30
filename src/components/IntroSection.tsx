import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import Scene01 from "../../public/scenes01.svg";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IntroSection: React.FC<Props> = ({ setChecked }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="grid lg:grid-cols-5 lg:my-[7rem] content-center my-[-73px] sm:my-0 lg:justify-items-end text-center md:text-left h-screen sm:h-auto">
      <div className="my-4 lg:col-span-2 lg:self-end">
        <div className="flex flex-col lg:justify-end">
          <div className="flex sm:hidden m-3 self-center h-[33px] sm:h-auto">
            <img
              src="/logo_legalify_azul_transparente.png"
              alt="lega_logo"
              height={33}
              width={94}
            />
          </div>
          <div className="m-3 lg:m-6">
            <h1 className="text-[30px] md:text-5xl lg:text-7xl text-legalify-primary font-semibold">
              {t("titleIntro")}
            </h1>
          </div>
          <div className="m-3 lg:m-6">
            <h3 className="text-[16px] md:text-lg font-normal">
              {t("descriptionIntro")}
            </h3>
          </div>
          <Link href="/#evolve" passHref={true}>
            <div
              className="m-3 lg:m-6 lg:mt-1"
              onClick={() => setChecked(false)}
            >
              <Button label={t("buttonIntro")} paramQuery="/../registro-cliente" />
            </div>
          </Link>
          <p className="text-[16px] md:text-lg font-normal">
            {t("financialText")}
          </p>
          <Link href="mailto:info@legalify.app?subject=Solicitud de información de financiamiento">
            <div className="m-3 lg:m-6">
              <Button label={t("financialButton")} />
            </div>
          </Link>
        </div>
      </div>
      <div className="my-4 lg:col-span-3 lg:w-[40rem] lg:mr-6">
        <div className="flex justify-end h-[183px] sm:h-auto">
          <Scene01 />
        </div>
      </div>
    </div>
  );
};
