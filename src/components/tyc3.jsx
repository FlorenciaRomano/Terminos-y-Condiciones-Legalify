import React from "react";
import LogoTC from "../TerminosYcondiciones/logo_legalify_azul_transparente.png";
import img1 from "../TerminosYcondiciones/imagenS2.png";
import Info from "../TerminosYcondiciones/info.png";
import Candado from "../TerminosYcondiciones/candado.png";
import PoliticaDePrivacidad from "../TerminosYcondiciones/PoliticaDePrivacidad.png";

const TermsCS3 = () => {
  return (
    <div class="bg-white">
      <div class="mx-auto grid max-w-7xl md:flex gap-x-8 gap-y-10  lg:px-8 xl:grid-cols-3 justify-center">
        <div class="max-w-2xl">
          <h2 class=" tracking-tight text-blue-900 sm:text-1xl text-lg">
            ¿CUÁL ES LA BASE JURÍDICA QUE JUSTIFICA EL TRATAMIENTO DE SUS DATOS
            PERSONALES?
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
              class="h-27 w-20 "
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold leading-6 text-black-600">
                - En el consentimiento de los clientes.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/LegalifyLogo.f739850cad0295308b0c.png"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold leading-6 text-black-600">
                -Los intereses legítimos de Legalify, que no prevalecen sobre
                sus derechos de privacidad.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <ul className="text-sm text-left  font-semibold leading-6 text-black-600">
              <li>
                •No se hace responsable de las pérdidas o daños que puedan
                producirse si usted incumple la obligación de proporcionar
                información adecuada.
              </li>
              <li>
                •No tiene control sobre el tipo o la cantidad de información que
                se intercambia en nuestra plataforma.
              </li>
              <li>
                •No se hace responsable del uso que los asesores jurídicos hagan
                de los datos personales facilitados por los clientes una vez que
                se han conectado a través de nuestra plataforma
              </li>
            </ul>
          </div>

          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
                Es su responsabilidad asegurarse de que la información que
                proporciona sea verdadera, completa, precisa y actualizada.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
                Si utiliza o comparte datos personales de otros usuarios o de
                terceros (incluidos menores de edad), debe contar previamente
                con su consentimiento. Este consentimiento debe ser libre,
                previo, expreso e inequívoco.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6">
            <img
              class="h-15 w-20 "
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
                Si considera que determinados contenidos de nuestra web vulneran
                tu privacidad o la de otro tienes la opción de escribirnos a:
                info@legalify.app
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TermsCS3;
