import React from "react";
import EvolveScene from "../../public/evolveScene.svg";
import YouTubeLogo from "../../public/youTubeLogo.svg";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

interface Props {
  id: string;
}

export const ReadyToEvolveSection: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="grid" id={id}>
      <div className="lg:mb-5">
        <div className="grid lg:grid-cols-5">
          <div className="lg:col-span-3 self-center">
            <div className="flex flex-col">
              <div className="mx-6 my-3">
                <h2 className="text-4xl text-legalify-primary font-semibold">
                  {t("ReadyTitle")}
                </h2>
              </div>
              <div className="mx-6 my-3 max-w-lg">
                <p className="text-legalify-primary text-lg font-normal">
                  {t("ReadyDescription")}
                </p>
              </div>
              <div className="mx-6 my-3 max-w-lg">
                <p className="text-legalify-primary font-semibold">
                  {t("ReadyDescription2")}
                </p>
              </div>
              <div className="mx-6 my-3 flex items-center">
                <div>
                  <a
                    href="https://www.youtube.com/playlist?list=PLPcJgVIaFR40H38ttI3QDVHGP7HB-moe-"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <YouTubeLogo />
                  </a>
                </div>
                <a
                  className="text-legalify-primary ml-2"
                  href="https://www.youtube.com/playlist?list=PLPcJgVIaFR40H38ttI3QDVHGP7HB-moe-"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("ReadyDescription3")}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:col-span-2 lg:justify-self-end">
            <div className="lg:w-[27rem]">
              <EvolveScene />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
