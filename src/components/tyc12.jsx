import React from "react";
import LogoTC from "../TerminosYcondiciones/logo_legalify_azul_transparente.png";
import img1 from "../TerminosYcondiciones/imagenS2.png";
import Info from "../TerminosYcondiciones/info.png";
import Candado from "../TerminosYcondiciones/candado.png";
import PoliticaDePrivacidad from "../TerminosYcondiciones/PoliticaDePrivacidad.png";

const TermsCS12 = () => {
  return (
    <div class="bg-white mt-8">
      <div class="mx-auto grid max-w-7xl md:flex gap-x-8 gap-y-10  lg:px-8 xl:grid-cols-3 justify-center">
        <div class="max-w-2xl">
          <h2 class=" tracking-tight text-blue-900 sm:text-1xl text-lg">
            CONTACTO
          </h2>
        </div>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2 p-10"
      >
        <li>
          <div class="flex items-center gap-x-6 justify-center">
            <img
              class="h-35 w-35 "
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <p class="text-sm font-semibold leading-6 text-black-600">
            Si tiene alguna pregunta sobre esta Política, escríbanos a la
            siguiente dirección de correo electrónico: info@legalify.app
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TermsCS12;
