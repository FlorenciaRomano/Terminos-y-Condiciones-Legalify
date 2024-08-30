import React from "react";
import LogoTC from "../TerminosYcondiciones/logo_legalify_azul_transparente.png";
import img1 from "../TerminosYcondiciones/imagenS2.png";
import Info from "../TerminosYcondiciones/info.png";
import Candado from "../TerminosYcondiciones/candado.png";
import PoliticaDePrivacidad from "../TerminosYcondiciones/PoliticaDePrivacidad.png";

const TermsCS8 = () => {
  return (
    <div class="bg-white mt-8">
      <div class="mx-auto grid max-w-7xl md:flex gap-x-8 gap-y-10  lg:px-8 xl:grid-cols-3 justify-center">
        <div class="max-w-2xl">
          <h2 class=" tracking-tight text-blue-900 sm:text-1xl text-lg">
            INFORMACIÓN RECOPILADA
          </h2>
        </div>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2 p-10"
      >
        <li>
          <div>
            <h6 className="text-left">
              Al momento del registro en la plataforma:
            </h6>
          </div>
          <div class="flex items-center gap-x-1">
            <img
              class="h-40 w-60 "
              src="https://legalify-theta.vercel.app/static/media/section4.fc2e2dfb179b345408ef.png"
              alt=""
            />
            <div className="flex">
              <ul class="text-sm text-left font-semibold leading-6 text-black-600">
                <li>• Nombres y Apellidos</li>
                <li>• Correo electrónico</li>
                <li>• Contraseña</li>
                <li>• Tipo de identificación</li>
                <li>• Número de teléfono</li>
                <li>• País, provincia y lugar de residencia.</li>
              </ul>
              <ul class="text-sm text-left font-semibold leading-6 text-black-600">
                <li>• Jurisdicción donde se ejerce la abogacía.</li>
                <li>
                  Colegio de Abogados en la cual obtuvo la colegiatura.Correo
                  electrónico
                </li>
                <li>• Tomo</li>
                <li>• Fol</li>
                <li>• Especialidad</li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-left">
              Después del registro en la plataforma:
            </h6>
          </div>
          <div class="flex items-center gap-x-1">
            <img
              class="h-40 w-60 "
              src="https://legalify-theta.vercel.app/static/media/section4.fc2e2dfb179b345408ef.png"
              alt=""
            />
            <div className="flex">
              <ul class="text-sm text-left font-semibold leading-6 text-black-600">
                <li>• Nombre del caso</li>
                <li>• Descripción del caso</li>
                <li>
                  • Archivos y documentación necesaria que vayas a adjuntar para
                  fines de la asesoría legal.
                </li>
                <li>
                  • Tu foto de perfil, en caso decidas agregarla al momento de
                  configurar tu perfil.
                </li>
                <li>
                  • Tu código postal, en caso decidas ingresar voluntariamente
                  esta información al momento de configurar tu perfil.
                </li>
              </ul>
              <ul class="text-sm text-left font-semibold leading-6 text-black-600">
                <li>• Número de identificación fiscal (NIF).</li>
                <li>• Domicilio de facturación de tu medio de pago.</li>
                <li>• Código postal.</li>
                <li>
                  • Tu foto de perfil, en caso decidas agregarla al momento de
                  configurar tu perfil.
                </li>
                <li>
                  • La puntuación o calificación que el cliente te brinde al
                  calificar tus servicios.
                </li>
                <li>
                  • El estado de tus vinculaciones con los clientes y las
                  acciones que desarrollaste con ellos en el marco de la
                  asesoría legal.
                </li>
              </ul>
            </div>
          </div>

        </li>
      </ul>
    </div>
  );
};

export default TermsCS8;
