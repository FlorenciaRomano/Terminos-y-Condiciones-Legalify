import React from "react";
import LogoTC from "../TerminosYcondiciones/logo_legalify_azul_transparente.png";
import img1 from "../TerminosYcondiciones/imagenS2.png";
import Info from "../TerminosYcondiciones/info.png";
import Candado from "../TerminosYcondiciones/candado.png";
import PoliticaDePrivacidad from "../TerminosYcondiciones/PoliticaDePrivacidad.png";

const TermsCS7 = () => {
  return (
    <div class="bg-white mt-8">
      <div class="mx-auto grid max-w-7xl md:flex gap-x-8 gap-y-10  lg:px-8 xl:grid-cols-3 justify-center">
        <div class="max-w-2xl">
          <h2 class=" tracking-tight text-blue-900 sm:text-1xl text-lg">
            CONSERVACIÓN, CONFINDENCIALIDAD Y SEGURIDAD DE LOS DATOS
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
              src="https://legalify-theta.vercel.app/static/media/section10item1.d0e12019e28bbd78d096.png"
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
                La información que nos proporciona será almacenada durante el
                tiempo que sea necesario, mientras dure su relación con nuestra
                plataforma o para el fin específico para el que se recopileon
                los datos. En algunos casos, es posible que necesitemos
                conservar sus datos durante un período más largo para cumplir
                con las obligaciones legales. Incluso si cierra su cuenta,
                podemos conservar información anónima o disociada con fines de
                investigación y desarrollo.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6 mt-5">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/section10item2.dae7bb9db14a370d0500.png"
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
                Tratamos sus datos personales con total confidencialidad. Sólo
                los miembros autorizados del personal de Legalify que necesiten
                acceder a la información para los fines descritos anteriormente
                (artículo 4) la tratarán. Nos comprometemos a mantener la
                privacidad de sus datos de forma indefinida.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6  mt-5">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/section10item3.67b8fdae96ecd1e76e15.png"
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
                Hemos implantado medidas técnicas y organizativas para evitar la
                alteración, pérdida, acceso no autorizado o cualquier acción que
                pueda comprometer la seguridad, confidencialidad y
                disponibilidad de su información. Nuestras medidas incluyen la
                identificación y prevención de incidentes, así como la
                resolución de cualquier problema que surja. Supervisamos
                periódicamente nuestros sistemas para detectar vulnerabilidades
                y posibles ataques.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6  mt-5">
            <img
              class="h-15 w-20 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABJCAYAAACqyKH+AAAAAXNSR0IArs4c6QAABPZJREFUeF7tnD9MFEEUxoeOK7nDRsoTlYSWBAtoTaCSWi0prLDVWBltpbKgVGuoMLGFGFFaEgh4JVoIdyUkJJz5Vt75eMzs7e78WY6dTYgKN3c7v/m+997OPBw6O+t2VbxyE+h2u+r8/FwNRYC52SUDIsBi3HqjIsBBBvj1x2+13+okUzhun6qjzok6ap+q0fqwGh2pqUZ9OPm61xxRjXot+f51u4IrcGPrUO0ddNTGt8PcLCbu1tXCXFPhz+tyBQMIcJtbv9Tuftt67tcJpHeAALb6uZUKDkBuNWoJWNgUNv5zfJL8++j4pPd3SR7jFp9M9sZar0yBN/AKEPDeLG9rb2v2wZi6Pz6iZqfH+t423mfz+z/1Elg+6OXSVGm29gZwdf2nWl1vXYGzMN9UC/N3+kLTvQDw1i7ULEHavG+hm7kY5AWgDp5LuwHeysedK2GhDIjOASJZrHzYubSoviamWyhfn2VSqVOAupjnOz4BIrI7t/S717PBEoszgJjA81cblxZq8elkpiRhE4MwVioRGf3F0lQQiM4Aykkgy6LECHXJzw9lZScApfqgANgo9AUHhLayE4By9X3HPdPCyAQWQoXWANPUh59tbh2qmemxIPEIYEOr0BqgzLw8caBWw6ZBqGQCgFKFvt1gDZDbV8a+x8++JG7zPQlpaa5C38nMGiBBwiT4zXIlfHr/MGg+wfM37fr4TmhOAfKgTfb1rQDdykgb+yysnQLkViUVlAFQxuWBAchvlOJQyARCapQAfcZgpwrksY5iY+j4RxB5bPa5iE4BkgJ5bVgGQFmbRoA5c7gEODAWphstW4EDm0S4VcoqonXbWz7DiHUMNFX9VMaEeKCXDh+oQpoKZpoEJRJ6xMNZCKwd8uIZ2PcCWivQVPXzOOgziMuFGbjNBLmFxBVHKvT9PMoh8pAS4nOtFYiblzbWZeMQj3Qy+/q2L+buBCDs+nZ5u7edzs+AuZVdng3rYmpo9TkDqCsd+OpziLDVzPTtwt0JpmQkXRBCfU4B6rbTJUTeTZAVJOBT45EJnu5YM9ShlhML08SQAdfWW5dOxuRzqG6yo41aAgnNRnShK2v3oJNsjKYlgzIO8/lCOgWoszK+J+1Eh02yo8CkMFMC0rV2hCyZnFuYAOgmBgiP5ppX7AiYuwftpGsVF1mW2nlNnVz8aYM+Vy4U1YRZw0WRYt+5AtMg4mew9MT4/4bKvDctkwWNl6FCFtS+akJvADExXUzkagFIin9pIPv1VUvb6jrEfNWhXgECStYWX7wWKqEWXxqr60gl2LpeaV1SwfuiT8dHc7p3gDRZTAz2SwOS1c6mJvPQ8LwlkTQQpMi05vG0bGzqqy4DXikAORxMGhkY9R4uQKWLYiMsjVjZz358C4vCAbctlU74LFhaVxFkdQB/XTALF7m5rGOk+mTM0zV/uoqLNwIgde+jkUkHxlT6uIB4IwCSUk3Pzbqim8bYQrxRAE2WN/3OiguIlQAo9yt1oIsqsRIAAcwXxMoAJIjyVzGkGvP+ikSlAPqAWDmAriFWEqBLiJUF6ApipQECom7vME9iqTxAW4gR4IXciioxAmR+zQqRnzlHgCLgZYHIz1ciQM2DcT+I/IQvAjRs4aTt4ESAGbe6s/zXLVGBfWBKiLJlOQLMqEbTyyLACNCSgOXwqMAI0JKA5fCowAjQkoDlcCgQX38B9dQuqjfuWUAAAAAASUVORK5CYII="
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
                Si descubrimos una violación de la seguridad que pueda afectar
                gravemente a sus derechos y libertades, le informaremos con
                prontitud en un lenguaje claro y sencillo. Queremos asegurarnos
                de que comprende la naturaleza de la violación y sus posibles
                consecuencias para su información personal.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6  mt-5">
            <img
              class="h-15 w-20 "
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <p class="text-sm text-left font-semibold leading-6 text-black-600">
                En algunos casos no le notificaremos directamente: cuando ya
                hayamos aplicado medidas de protección sólidas, como el cifrado,
                que hacen que los datos sean ilegibles para personas no
                autorizadas. También puede ser cuando notificar a cada usuario
                afectado requiera un esfuerzo excesivo por nuestra parte. En
                tales situaciones, podemos optar por métodos de comunicación
                alternativos o hacer anuncios públicos para abordar la cuestión.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6  mt-5">
            <img
              class="h-15 w-20 "
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <p class="text-sm font-semibold leading-6 text-black-600">
                En las situaciones ya mencionadas, optaremos por métodos de
                comunicación alternativos o hacer anuncios públicos para abordar
                la cuestión.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TermsCS7;
