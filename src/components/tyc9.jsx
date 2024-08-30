import React from "react";
import LogoTC from "../TerminosYcondiciones/logo_legalify_azul_transparente.png";
import img1 from "../TerminosYcondiciones/imagenS2.png";
import Info from "../TerminosYcondiciones/info.png";
import Candado from "../TerminosYcondiciones/candado.png";
import PoliticaDePrivacidad from "../TerminosYcondiciones/PoliticaDePrivacidad.png";

const TermsCS9 = () => {
  return (
    <div class="bg-white mt-8">
      <div class="mx-auto grid max-w-7xl md:flex gap-x-8 gap-y-10  lg:px-8 xl:grid-cols-3 justify-center">
        <div class="max-w-2xl">
          <h2 class=" tracking-tight text-blue-900 sm:text-1xl text-lg">
          ¿QUÉ CONSECUENCIAS TIENE NEGARNOS EL ACCESO A SUS DATOS PERSONALES?
          </h2>
        </div>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2 p-10"
      >
        <li>

          <div class="flex items-center gap-x-6 mt-5">
            <img
              class="h-15 w-20 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABTCAYAAADnR+s9AAAAAXNSR0IArs4c6QAACElJREFUeF7tnHlwTVccx7+WrJpVFkEakiYRS0RIrGHQ0k51m2qZaUzpoq2tiqpOSku1QS2dMpQOlaKldGppB1NVFLUvDZHIJhEaskkieeGRdH535kbES94595777mXemXl/vd92Pud371nuOaeJ2VxTA3tRRKCmpgbV1dVoYoeoiJ+kZIeonF2tph3iowzxv2sVyC+oRGGRCcUlVSgsrkKlyQyzuRquLs3h6eEk/Vp6u8DPxwUBfi3g7uYoAAm/CUNkYqXpDlLSipCWWYKMrFKkZ9/grwkAb09nBLfzQFiwJzqEeiE4yEORHV4l3SBeLzTh5NlrOJ1cgJSLxbxxM8k3b94UfWMDEN3FD927+jHpKBGyOcTrhZXYvjsb+w7lKYlXsQ498sOGBGNQv7aKbTSkaDOI5OiX3zKwdWeW8ErwGPT3dcWoVzogqrMvj1qjsjaBeOxUPjZtS8e1gkphgas1FNerNUa+GAYPdye1prQdJ5qq7mDd5lQc+OeK6kC1MNDC1QHxw8MR16uNKvOaZeLZ84VYuzEFBUUmVQHaQnlAnzYYM7IjqCNSUjSBuG1XFjZvT1cSj246gW3c8HZ8J0XDIuEQV6xNxqFjV3WDodbxe6MjpWERTxEGsaLSjMXfnkZaRgmPf0PKjngxDM8Nac8cmzCI85eeQPKFImbHRhccO6oz+vdm63CEQEzadAF/7M81Ohfu+GZOiUX4E15W9VRD/PPAZXy/McWqo4dRwNGhKZbNGygteDRWVEHMzi3DzHn/PIx8mGPu3SMA49+I1A7iZ18dRYbCFRfmWhhAcPSICDw54PEGI1GciVt20Dw40wBVtE0ICz+LQys/V4vOFEHMvFSKTxccsU30BvHSI8ofk8dGiYM475sTOJf66AxnWNtp3JhI9Il5cCDOnYl/H7mKlT8ks/ptVI7mrPsPa7s40THcGwWFJiFzeOqlVy0a/ECduCFOStgvffNQWwjge6M7S5Wb+PEBteYs6hPAWVNjJB9zFh4XAtLSbIYL4s69OdiwJVV1hWWAsiEtQMoA6/oQAdLFuTmWJg6As9O9sSMXxOlzDuJqfoUqiPUBagGyPkDRIF8fEYGn6gx5mCFeulyGTxLVD6yXJvaHb0sXiw0hIiMbAig73LIjEzQ8U1MiQr2R8EFMrQlmiNt2ZmHzDvVrhARw1rQYTUBaA0id2Iq159Twq9WlDkaeDjJDnLvkGFLTxSxzaQHSlgCJ5KS3oxDbzV+CygTx9u27eGPyHiEtKBsRCdLWAKkO9E6kdyMzRBpY0wBbdBEBUg+AxCEo0A1ffNyHHaKW30zUgNQLoJxMq5c8CSenZmyP8zffncGx09dEJ2KtPSUg9QZIwcuLtkzvxA9nHwTt0tKy8IA0AkBiQZ9ZB/cPZMvE+HG7teTHlZE0RKGpXENF5DDGWqWHDgyStqQwZaKtIFLQ1jKysYrZEiDFQft5po2LNh5EpSBtDZDi9PF2wddz+xsTIi9IPQBSjLQY8d3iwcaFyApSL4Dya2X98qHGhmitF6aKiFi0sNaBNPa/oSGyAJQrpxdI2pq3cuEgY2YiD0A9Qfr5umLx7DjjQVQCUC+QMVH+eH9slLEgWgNInQgtqmq1Hsn7bhz2VHuMfCmMDWLCl4eRk1fO64NLngWgvKBqbUBuq3ekvHOMacbybVIyDh7VbuMmD0C5ZYwA8vMZvdH+cXe2TNz9V460gV2LogSgUUCuWz4UTVhXtmnTEm1eEl3UANQbZHiIF2ZOjZXCYHqcSVD0IoQIgHqCfH5oMF59IZQP4uIVp3AquUBIMooEqBfIjyb2QJeIlnwQ/9iXi6SfL6iGqAVAPUDSdE8uzI8znQqdMkv9npmNq+45r98iIhYTrPXaInz0jG6FiW915YdIGnMWHcXFTGVnketmC+2C0AKgtYxMSSvGnEXHVT9N48dEonedLXbMmUiej5zIx7I1Z1UHQdlSF6SI7KgfVP2MFAUwwL8Fvvq0333uuCCS5qz5R5CVUyoMpBYA62ck7U8UkYFk993Xu6Bfz9bqIIr8kE/ZovUBSpE+IsK8kTD5wY9k3JlITbBq3TnDHr9V/Yg0YuCTKbHoYOFwkCKIN8puYcKMfVrGazjb8udRS4EpgkiG/jqUh9UbzhuusloERFcezJ/Zt8Hz0IohUrDUU1OP/agX+rbc2J0RqiDerDAjIfEwiorVb4Q3akPUnSM3FKMqiGT035RCLFh20qgMVMUV2dEH0yd0t2pDNUTysPPPS9jwS5pVZw+TAF2ZRfsPvTyt31YiBCLBedTOPDc0nBHaO1sytubH89h70LY3L4nObgeHppjwZld0j2S/FktYJsqV2b47Cz9vU3/KQDQcFns+3s6Y/E43tAt0ZxGvlREOkSyfPHsdS1ae5gpEb2E6HP5WfCc4OTbjDkUTiBRFUUkVkjamCFsN564Zh0L88A54elAQh8b9oppBlN3s2puD9QLOAyquYSOKdDLqteHh3I9vfZOaQySH+dcrsGlrOo6f0W7zPC/k114OxzOD2/GqWZS3CUTZM51A+OnXNOn8sV5lYN+2eOnZEOnWT1HFphDloPfsz8Xvey5pvpZYF1JMN3/Q3pmQduKvSNUFoly51IwSnEkukKaOuVfE7/WJjvRD144+iI70hZfAzNPlncjy2BTfqJLuGcvILkV2bily88pRdesui6okQyvYQYHuCAnyQGiIp8XFU2ZjnIK6ZqK1WMvKb6O0/BbKy824WWmGyXQH5jvVcHFuBlcXB7g95iBdC+3p7gRHBeM7a/5Z/zc0RNZK6C1nhyigBewQ7RAFEBBgwp6JdogCCAgwYc9EQRAJ5P8seYvipIgGNQAAAABJRU5ErkJggg=="
              alt=""
            />
            <div>
              <p class="text-sm  font-semibold leading-6 text-black-600">
              No podremos ofrecerle los servicios prestados en nuestro sitio web.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6  mt-5">
            <img
              class="h-15 w-20 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABTCAYAAADnR+s9AAAAAXNSR0IArs4c6QAACElJREFUeF7tnHlwTVccx7+WrJpVFkEakiYRS0RIrGHQ0k51m2qZaUzpoq2tiqpOSku1QS2dMpQOlaKldGppB1NVFLUvDZHIJhEaskkieeGRdH535kbES94595777mXemXl/vd92Pud371nuOaeJ2VxTA3tRRKCmpgbV1dVoYoeoiJ+kZIeonF2tph3iowzxv2sVyC+oRGGRCcUlVSgsrkKlyQyzuRquLs3h6eEk/Vp6u8DPxwUBfi3g7uYoAAm/CUNkYqXpDlLSipCWWYKMrFKkZ9/grwkAb09nBLfzQFiwJzqEeiE4yEORHV4l3SBeLzTh5NlrOJ1cgJSLxbxxM8k3b94UfWMDEN3FD927+jHpKBGyOcTrhZXYvjsb+w7lKYlXsQ498sOGBGNQv7aKbTSkaDOI5OiX3zKwdWeW8ErwGPT3dcWoVzogqrMvj1qjsjaBeOxUPjZtS8e1gkphgas1FNerNUa+GAYPdye1prQdJ5qq7mDd5lQc+OeK6kC1MNDC1QHxw8MR16uNKvOaZeLZ84VYuzEFBUUmVQHaQnlAnzYYM7IjqCNSUjSBuG1XFjZvT1cSj246gW3c8HZ8J0XDIuEQV6xNxqFjV3WDodbxe6MjpWERTxEGsaLSjMXfnkZaRgmPf0PKjngxDM8Nac8cmzCI85eeQPKFImbHRhccO6oz+vdm63CEQEzadAF/7M81Ohfu+GZOiUX4E15W9VRD/PPAZXy/McWqo4dRwNGhKZbNGygteDRWVEHMzi3DzHn/PIx8mGPu3SMA49+I1A7iZ18dRYbCFRfmWhhAcPSICDw54PEGI1GciVt20Dw40wBVtE0ICz+LQys/V4vOFEHMvFSKTxccsU30BvHSI8ofk8dGiYM475sTOJf66AxnWNtp3JhI9Il5cCDOnYl/H7mKlT8ks/ptVI7mrPsPa7s40THcGwWFJiFzeOqlVy0a/ECduCFOStgvffNQWwjge6M7S5Wb+PEBteYs6hPAWVNjJB9zFh4XAtLSbIYL4s69OdiwJVV1hWWAsiEtQMoA6/oQAdLFuTmWJg6As9O9sSMXxOlzDuJqfoUqiPUBagGyPkDRIF8fEYGn6gx5mCFeulyGTxLVD6yXJvaHb0sXiw0hIiMbAig73LIjEzQ8U1MiQr2R8EFMrQlmiNt2ZmHzDvVrhARw1rQYTUBaA0id2Iq159Twq9WlDkaeDjJDnLvkGFLTxSxzaQHSlgCJ5KS3oxDbzV+CygTx9u27eGPyHiEtKBsRCdLWAKkO9E6kdyMzRBpY0wBbdBEBUg+AxCEo0A1ffNyHHaKW30zUgNQLoJxMq5c8CSenZmyP8zffncGx09dEJ2KtPSUg9QZIwcuLtkzvxA9nHwTt0tKy8IA0AkBiQZ9ZB/cPZMvE+HG7teTHlZE0RKGpXENF5DDGWqWHDgyStqQwZaKtIFLQ1jKysYrZEiDFQft5po2LNh5EpSBtDZDi9PF2wddz+xsTIi9IPQBSjLQY8d3iwcaFyApSL4Dya2X98qHGhmitF6aKiFi0sNaBNPa/oSGyAJQrpxdI2pq3cuEgY2YiD0A9Qfr5umLx7DjjQVQCUC+QMVH+eH9slLEgWgNInQgtqmq1Hsn7bhz2VHuMfCmMDWLCl4eRk1fO64NLngWgvKBqbUBuq3ekvHOMacbybVIyDh7VbuMmD0C5ZYwA8vMZvdH+cXe2TNz9V460gV2LogSgUUCuWz4UTVhXtmnTEm1eEl3UANQbZHiIF2ZOjZXCYHqcSVD0IoQIgHqCfH5oMF59IZQP4uIVp3AquUBIMooEqBfIjyb2QJeIlnwQ/9iXi6SfL6iGqAVAPUDSdE8uzI8znQqdMkv9npmNq+45r98iIhYTrPXaInz0jG6FiW915YdIGnMWHcXFTGVnketmC+2C0AKgtYxMSSvGnEXHVT9N48dEonedLXbMmUiej5zIx7I1Z1UHQdlSF6SI7KgfVP2MFAUwwL8Fvvq0333uuCCS5qz5R5CVUyoMpBYA62ck7U8UkYFk993Xu6Bfz9bqIIr8kE/ZovUBSpE+IsK8kTD5wY9k3JlITbBq3TnDHr9V/Yg0YuCTKbHoYOFwkCKIN8puYcKMfVrGazjb8udRS4EpgkiG/jqUh9UbzhuusloERFcezJ/Zt8Hz0IohUrDUU1OP/agX+rbc2J0RqiDerDAjIfEwiorVb4Q3akPUnSM3FKMqiGT035RCLFh20qgMVMUV2dEH0yd0t2pDNUTysPPPS9jwS5pVZw+TAF2ZRfsPvTyt31YiBCLBedTOPDc0nBHaO1sytubH89h70LY3L4nObgeHppjwZld0j2S/FktYJsqV2b47Cz9vU3/KQDQcFns+3s6Y/E43tAt0ZxGvlREOkSyfPHsdS1ae5gpEb2E6HP5WfCc4OTbjDkUTiBRFUUkVkjamCFsN564Zh0L88A54elAQh8b9oppBlN3s2puD9QLOAyquYSOKdDLqteHh3I9vfZOaQySH+dcrsGlrOo6f0W7zPC/k114OxzOD2/GqWZS3CUTZM51A+OnXNOn8sV5lYN+2eOnZEOnWT1HFphDloPfsz8Xvey5pvpZYF1JMN3/Q3pmQduKvSNUFoly51IwSnEkukKaOuVfE7/WJjvRD144+iI70hZfAzNPlncjy2BTfqJLuGcvILkV2bily88pRdesui6okQyvYQYHuCAnyQGiIp8XFU2ZjnIK6ZqK1WMvKb6O0/BbKy824WWmGyXQH5jvVcHFuBlcXB7g95iBdC+3p7gRHBeM7a/5Z/zc0RNZK6C1nhyigBewQ7RAFEBBgwp6JdogCCAgwYc9EQRAJ5P8seYvipIgGNQAAAABJRU5ErkJggg=="
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
              No podrá utilizar nuestro sitio web ni acceder a sus funciones.
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
              No podremos responder a sus preguntas, preocupaciones o quejas.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TermsCS9;
