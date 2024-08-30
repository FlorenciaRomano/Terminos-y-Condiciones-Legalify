import React from "react";
import LogoTC from "../TerminosYcondiciones/logo_legalify_azul_transparente.png";
import img1 from "../TerminosYcondiciones/imagenS2.png";
import Info from "../TerminosYcondiciones/info.png";
import Candado from "../TerminosYcondiciones/candado.png";
import PoliticaDePrivacidad from "../TerminosYcondiciones/PoliticaDePrivacidad.png";

const TermsCS10 = () => {
  return (
    <div class="bg-white mt-8">
      <div class="mx-auto grid max-w-7xl md:flex gap-x-8 gap-y-10  lg:px-8 xl:grid-cols-3 justify-center">
        <div class="max-w-2xl">
          <h2 class=" tracking-tight text-blue-900 sm:text-1xl text-lg">
          CONSENTIMIENTO
          </h2>
        </div>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2 p-8"
      >
        <li>
          <div class="flex items-center gap-x-6 justify-center">
            <img
              class="h-35 w-35 "
              src="data:image/png;base64,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"
              alt=""
            />
          </div>

          <div class="flex items-center gap-x-6 mt-8">
             <div>
              <h6 className="text-left">
              Derecho a la protección contra las decisiones automatizadas:
              </h6>
              <ul class="text-sm text-left font-semibold leading-6 text-black-600">
                <li>
                  • Libre
                </li>
                <li>
                  • Expreso
                </li>
                <li>
                  • Inequívoco e informado.
                </li>
              </ul>
              <p  class="text-sm text-left font-semibold leading-6 text-black-600">Esto con la finalidad de tratar sus datos personales de acuerdo con las multas expuestas anteriormente (artículo 4).</p>
            </div>
          </div>

        </li>
      </ul>
    </div>
  );
};

export default TermsCS10;
