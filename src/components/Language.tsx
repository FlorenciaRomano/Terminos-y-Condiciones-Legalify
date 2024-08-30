import React from "react";
import Link from "next/link";
import { LanguageSwitcher } from "next-export-i18n";

const Language = () => {
  return (
    <div className="contLang">
      <LanguageSwitcher href="/" lang="es">
        <img
          src="Flags/ESFlag.png"
          alt="ES"
          width={45}
          height={45}
          title="ES"
        />
      </LanguageSwitcher>
      <LanguageSwitcher href="/" lang="en">
        <img
          src="Flags/ENFlag.png"
          alt="EN"
          width={45}
          height={45}
          title="EN"
        />
      </LanguageSwitcher>
      <LanguageSwitcher href="/" lang="it">
        <img
          src="Flags/ITFlag.png"
          alt="IT"
          width={45}
          height={45}
          title="IT"
        />
      </LanguageSwitcher>
    </div>
  );
};

export default Language;
