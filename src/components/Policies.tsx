import React from "react";
import { useTranslation } from "next-export-i18n";

const Policies = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-5 text-legalify-primary font-bold">
      <a href={("privacyPolicy")} target="_blank" rel="noreferrer">
        Términos y condiciones
      </a>{" "}
      y{" "}
      <a href={t("cookiePolicy")} target="_blank" rel="noreferrer">
        política de cookies
      </a>
    </div>
  );
};

export default Policies;
