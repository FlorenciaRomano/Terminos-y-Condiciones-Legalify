import React, { useEffect, useState } from "react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

import { IPlanCicloPlanAmount, getPlanInfos, getPCPASafe, getPCPASafeMX } from "../services/PlanInfoService"

const PlansAbogados = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const [showPlanAbogados, setShowPlanAbogados] = useState(false);
  
  const [planInfos, setPlanInfos] = useState<IPlanCicloPlanAmount>({});

  const handleClick = () => {
    setShowPlanAbogados(!showPlanAbogados);
  };

  useEffect(() => {
    doLoadPlanInfo();
  }, []);

  function doLoadPlanInfo(): void {
    getPlanInfos([]).then(resp => {
      setPlanInfos(resp);
      console.log("[getPlanInfos] Data obtenida: ", resp);
    });
  }

  return (
    <div>
      <h1
        style={{ marginTop: "30px" }}
        className="text-[30px] md:text-2xl lg:text-3xl text-legalify-primary font-semibold text-center"
      >
        {t("abogadoTitle")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full plansCard">
        <div className="flex flex-col text-center gap-4 bg-gray-100 rounded-lg shadow-lg hover:cursor-pointer hover:-translate-y-5 transition-all border border-neutral-900">
          <h1 className="flex justify-center text-xl font-bold text-white bg-custom-red px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest relative">
            { getPCPASafeMX(5, 1, "planNombre", "Premium", planInfos) }
            <span className="absolute -bottom-20 -left-4 text-sm rotate-90 bg-custom-red p-2 rounded-r-lg recommended">
              {t("clientRecommended")}
            </span>
          </h1>

          <ul className="flex flex-col items-center gap-4 px-2 py-8">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("paymentTitleDescription")}{" "}
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("paymentMens")} <br />
              {t("paymentAnu")} <br />
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("premiumSpeciaty")}
              <br />
              {t("premiumJurisdict")}
              <br />
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("paymentReun")} <br />
              {t("paymentEmer")}
            </li>
          </ul>
          <div className="mb-6 flex justify-center ab1">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/redes?rol=2"}>
              <button className="bg-custom-blue hover:bg-blue-800 transition-colors text-white px-6 py-2 rounded-lg font-bold">
                {t("buttonContract")}
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col text-center gap-4 bg-gray-100 rounded-lg shadow-lg hover:cursor-pointer hover:-translate-y-5 transition-all border border-neutral-900">
          <h1 className="flex justify-center text-xl font-bold text-white bg-custom-blue px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest">
            { getPCPASafeMX(6, 1, "planNombre", t("corporateTitle"), planInfos) }
          </h1>

          <ul className="flex flex-col items-center gap-4 px-2 py-8">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("paymentTitleDescription")}{" "}
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("paymentMens")} <br />
              {t("paymentAnu")} <br />
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("corporateSpeciaty")}
              <br />
              {t("corporateJurisdict")}
              <br />
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("paymentReun")} <br />
              {t("paymentEmer")}
            </li>
          </ul>

          <div className="mb-6 flex justify-center">
          <a href={process.env.NEXT_PUBLIC_URL_APP + "/redes?rol=2"}>
              <button className="bg-custom-blue hover:bg-blue-800 transition-colors text-white px-6 py-2 rounded-lg font-bold">
                {t("buttonContract")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansAbogados;
