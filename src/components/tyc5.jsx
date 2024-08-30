import React from "react";
import LogoTC from "../TerminosYcondiciones/logo_legalify_azul_transparente.png";
import img1 from "../TerminosYcondiciones/imagenS2.png";
import Info from "../TerminosYcondiciones/info.png";
import Candado from "../TerminosYcondiciones/candado.png";
import PoliticaDePrivacidad from "../TerminosYcondiciones/PoliticaDePrivacidad.png";

const TermsCS5 = () => {
  return (
    <div class="bg-white mt-8">
      <div class="mx-auto grid max-w-7xl md:flex gap-x-8 gap-y-10  lg:px-8 xl:grid-cols-3 justify-center">
        <div class="max-w-2xl">
          <h2 class=" tracking-tight text-blue-900 sm:text-1xl text-lg">
          CESIÓN DE DATOS PERSONALES A TERCEROS
          </h2>
        </div>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2 p-10"
      >
        <li>
          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/LegalifyLogo.f739850cad0295308b0c.png"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold leading-6 text-black-600">
              No compartirá su información personal con terceros excepto, en las siguientes circunstancias limitadas:
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/s8i1.7f976cd538d087836b78.png"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold leading-6 text-black-600">
              - Para prestar nuestro servicio
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/s8i2.c4d61f4f83ba643ee800.png"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold leading-6 text-black-600">
              - Para validar la información que proporcionó en el momento de su inscripción.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/s8i3.028b6192e89f447fb2a8.png"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold leading-6 text-black-600">
                - Para alojar nuestro sitio web en la nube, para poder prestar nuestros servicios.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/s8i4.86b63a5c7b449cb87663.png"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold leading-6 text-black-600">
                - Para cumplir la ley o una orden judicial.
              </p>
            </div>
          </div>

        </li>
      </ul>
    </div>
  );
};

export default TermsCS5;
