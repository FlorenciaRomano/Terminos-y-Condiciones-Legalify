import React, { useEffect, useState } from "react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { IPlanCicloPlanAmount, getPCPASafe, getPlanInfos } from "../services/PlanInfoService";

const Plans = () => {

  useEffect(() => {
    if (!localStorage.getItem("hasRedirected")) {
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          const ip = data.ip;
          fetch(`https://ipapi.co/${ip}/json/`)
            .then((response) => response.json())
            .then((data) => {
              let url;
              switch (data.country_name) {
                case "Argentina":
                  url = "https://www.legalify.app/";
                  break;
                case "Spain":
                  url = "https://www.legalify.app/?lang=es";
                  break;
                case "United States":
                  url = "https://www.legalify.app/?lang=en";
                  break;
                case "Italy":
                  url = "https://www.legalify.app/?lang=it";
                  break;
                case "Mexico":
                  url = "https://www.legalify.app/?lang=mx";
                  break;
                default:
                  url = "https://www.legalify.app/";
              }
              window.location.href = url;
              localStorage.setItem("hasRedirected", "true");
            });
        });
    }
  }, []);

  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const [planInfos, setPlanInfos] = useState<IPlanCicloPlanAmount>({});

  useEffect(() => {
    doLoadPlanInfo();
  }, []);

  function doLoadPlanInfo(): void {
    getPlanInfos([2, 3], 0).then(resp => {
      setPlanInfos(resp);
      console.log("[getPlanInfos] Data obtenida: ", resp);
    });
  }

  return (
    <div>
      <h1
        id="payment"
        className="text-[30px] md:text-2xl lg:text-3xl text-legalify-primary font-semibold text-center"
      >
        {t("plansClientTitle")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full plansCard">
        <div className="flex flex-col text-center gap-4 bg-gray-100 rounded-lg shadow-lg hover:cursor-pointer hover:-translate-y-5 transition-all border border-neutral-900">
          <h1 className="flex justify-center text-xl font-bold text-white bg-custom-blue px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest">
            {t("clientStandardTitle")}
          </h1>
          <div className="flex items-center justify-center">
            <span className="flex px-2 text-4xl uppercase font-extrabold text-gray-900">
              <span className="text-lg"></span>
              {t("clientFreeTitle")}
            </span>
          </div>

          <h1 className="flex justify-center text-xl font-bold text-black px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest">
            {t("layersTitle")}
          </h1>
          <ul className="grid grid-cols-1 gap-4 px-2 py-8">
            <li className="flex items-start justify-start gap-2">
              <div>
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
              </div>
              <div className="text-left">{t("clientMeetDescription")}</div>
            </li>

            <li className="flex items-center justify-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-center">{t("clientMeetDescription2")}</div>
            </li>
            <li className="flex items-center justify-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-center">{t("clientEmergDescription5")}</div>
            </li>
            <li className="flex items-center justify-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-center">{t("clientEmergDescription4")}</div>
            </li>
          </ul>
          <h1 className="text-sm font-bold text-gray-500">
            ***{t("plansDisclaimer2")}
          </h1>
          <div className="mb-6 flex justify-center align-bottom ab4">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className="bg-custom-blue hover:bg-blue-800 transition-colors text-white px-6 py-2 rounded-lg font-bold">
                {t("buttonContract")}
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col text-center gap-4 bg-gray-100 rounded-lg shadow-lg hover:cursor-pointer hover:-translate-y-5 transition-all border border-neutral-900 mt-[-30px]">
          <h1 className="flex justify-center text-xl font-bold text-white bg-custom-red px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest relative">
            {t("clientMeetTitle")}
            <span className="absolute -bottom-20 -left-4 text-sm rotate-90 bg-custom-red p-2 rounded-r-lg recommended">
              {t("clientRecommended")}
            </span>
          </h1>
          <h1 className="flex justify-center text-xl font-bold text-black px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest ab1">
            {t("planMeeting")}
          </h1>
          <ul className="grid grid-cols-1 gap-4 px-2 py-8">
            <li className="flex items-start justify-start gap-2">
              <div>
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
              </div>
              <div className="text-left">{t("clientMeetDescription")}</div>
            </li>

            <li className="flex items-center justify-center gap-2">
              <div>
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
              </div>

              <div className="text-center">{t("clientMeetDescription2")}</div>
            </li>
            <li className="flex items-center justify-center gap-2">
              <div>
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
              </div>

              <div className="text-center">{t("clientEmergDescription5")}</div>
            </li>
            <li className="flex items-center justify-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-center">{t("clientEmergDescription4")}</div>
            </li>
          </ul>

          <div className="mb-6 flex justify-center align-bottom ab3">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className="bg-custom-blue hover:bg-blue-800 transition-colors text-white px-6 py-2 rounded-lg font-bold">
                {t("buttonContract")}
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col text-center gap-4 bg-gray-100 rounded-lg shadow-lg hover:cursor-pointer hover:-translate-y-5 transition-all border border-neutral-900">
          <h1 className="flex justify-center text-xl font-bold text-white bg-custom-blue px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest">
            {t("clientEmergTitle")}
          </h1>
          <h1 className="flex justify-center text-xl font-bold text-black px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest">
            {t("paymentEmer")}
          </h1>
          <ul className="grid grid-cols-1 gap-4 px-2 py-8">
            <li className="flex items-start justify-start gap-2">
              <div>
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
              </div>
              <div className="text-left">{t("clientMeetDescription")}</div>
            </li>

            <li className="flex items-center justify-center gap-2">
              <div>
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
              </div>

              <div className="text-center">{t("clientMeetDescription2")}</div>
            </li>
            <li className="flex items-center justify-center gap-2">
              <div>
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
              </div>

              <div className="text-center">{t("clientEmergDescription5")}</div>
            </li>
            <li className="flex items-center justify-center gap-2">
              <div>
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
              </div>

              <div className="text-center">{t("clientEmergDescription4")}</div>
            </li>
          </ul>
          <div className="mb-6 flex justify-center align-bottom ab3">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className="bg-custom-blue hover:bg-blue-800 transition-colors text-white px-6 py-2 rounded-lg font-bold">
                {t("buttonContract")}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className=" mt-5 text-lg font-bold text-gray-500">
          {" "}
          {t("plansIva")}
        </h1>
        <h1 className="text-lg font-bold text-gray-500">
          {" "}
          {t("plansDisclaimer")}
        </h1>
      </div>
    </div>
  );
};

export default Plans;
