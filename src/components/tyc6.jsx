import React from "react";
import LogoTC from "../TerminosYcondiciones/logo_legalify_azul_transparente.png";
import img1 from "../TerminosYcondiciones/imagenS2.png";
import Info from "../TerminosYcondiciones/info.png";
import Candado from "../TerminosYcondiciones/candado.png";
import PoliticaDePrivacidad from "../TerminosYcondiciones/PoliticaDePrivacidad.png";

const TermsCS6 = () => {
  return (
    <div class="bg-white mt-8">
      <div class="mx-auto grid max-w-7xl md:flex gap-x-8 gap-y-10  lg:px-8 xl:grid-cols-3 justify-center">
        <div class="max-w-2xl">
          <h2 class=" tracking-tight text-blue-900 sm:text-1xl text-lg">
            INFORMACIÓN RECOPILADA POR OTRAS PLATAFORMAS Y REDES SOCIALES
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABkCAYAAACWy14QAAAAAXNSR0IArs4c6QAACBdJREFUeF7tXUloXVUY/qNV+2KaJo+a0VBqUm01tJgStVIUA4Ja0Y2CiyCiIqLoRnDXVXeCG0UQUXHRnW4UR4QKtVg0NJBSazWpWkqGxpKhTftqUhP5XzjNyc0d/u/c4Zz3ei90kfRM//f98x1Ss7CwtET5ZQWBpaUlWlxcpJqcBCv4lzfNSbCH/dWdcxJyEhxAwIEj5JaQk5AeAodPEv09SbT+BqLLC/77XPlv+fe9XUR3daR3lqiVq9YSDhwimr8SJf7y/9+4jqj/AdnYNEZVLQkfH8TgunerPWuoShJ+PUP08zBGQksD0WM92JykRlclCRwP/hjDILLpkqqOhLOzRN8PyeOBTpUta6gKEhj4o6eIpubMwNeJuK6GaN31RMU6os23yOIE79+8EbM8fbTTJEQJF0frpZCxm7p7SzAZXw8STcwQ1ReIntotXXX1OGdJUMGVNbNp42qtZPB/PEF0vmQmtMksBnn7rStk8PkGRogWtd4zn/XRHtwqnCXhkx9WC8jAsZB167MF3+uqeH8u/oJqEBMinCQBKbRMtDrtOSgRzpFgkl6mDarJ+ggRTpHAvv6royYiuzmHiXjuoeizOUVCpbshP7hvbyPasy2cCGdI+OxIdgGXNVS/9AwnWm/lIyrKEtJ0Qyqjqr0puPji/c+dJ5q+SDQxTTR3eW1mJod+ZaTECni0E5bAIHwzmIzgCgJVX5g05VQFzkWY6YX0opwggQVNyhoY/K7WaD8sATcOGUhr3BkSGJS46WlaDTj0XIgVOOOOdK1UvRiJpuqux6RdgOyBEoEohFOWYGIN0gwEATxoLOIyK7ZYY+GRVDVLAhQxiEVIO6vOWYJf4y5IM5Hgl4QlqDWkRSUrieRJDudIkN6gl2pZkuCrtRC3JDmnUyQgpr53F963T5IQxBqi+kfOkIAUbBLtShJwv7WQJzqi3KZ1EkwKoiih0iYALS6j6gZrJJiAr8C17YpMArT3Fq2uKNZIkAZgP61+vi8LXY/eQxoX9JVUQ7GlcaW1Yo0EEwFYmCjTjoYuuREm1b2+u1KmnIQYnMQhQS80rZFgKoCNKjmIJ1MZeD09w7NGApLieX1qVN4dQ7mhqUiLxbuwEyQgVadXAFeyozgk6HfdrFkCA4v0iXQiXKgT+DymyQXPdYYEUyGQXj3kX8DBpkrE2+jWbNUSTAObK8E5qVrHKgmmwZk1ybZLQpqNUQVnxZJgu4kXJyh7C06rJKjnfVhTNtUTDY/LX3Oy6ZLiZHbeGoF/tkqC10xR4WxZA5JQsNbzWz/1tUSNNy8rm/etHqdIYFIQXyu9fQgmPaHD0TgmqWmcIwG1hizdEno2qaU6RwKrIRr0sqobEDeEZHBOkoC4JOU70iYCVQyk5e4kCaaVaBpEmL4hitQxzpFgWkXrFrGrM5knMdAgrM4gjQVqvFMkmArtTWfUY/GmZMR9RVf6XoKTJKB+Nyr19LufGzRHPXgwORv/PQnkOdSKL9aiSPCzEP5kgrrUB6mk30VC9kNcklPuiIVEc3EEmKzHSt2ScySgVXPWwCL7STMkJ0moBiKkBDgXE7xa5peuqnfSRsbjB1BEq5GxUjfkZHbkJ6hOhF6MxXmMEgEUHYsS4LwlKACYiKAPQMUt7lCQw8abVuyJxoTTYyU6M1Gi8ckSTZ4r0eN97bS5rZCknL5rZWEVqgAMqiOQlNQrBEwCA/3LsakyyHz9+dc0XbhQoktza78A9fKLvbSnp5g6CWqDNMjwfmyK9+A7gHpMQpp1fmDAJPS/8p0Y1KxJ0MmI87UYydcAFOGX/jX/7JpxYK4EElg4tPevAImr1WIN1QZWpSXEqTMktyNNgA6bU7UksNAmTTkbL6BkRsJ7B0aoaVOBWpsK1NFSCMyaOPDrF2dbfPEcvkyzLUkqGyfDiWMdmZHw0puH1mRQtXUr6atfdhUmGM/dsKFADQ0F2ra1sUxuVCamWwavrTqq3E0N+x5SHIAlczMjAQnokoMHjTEhB93Pa62m1pl5dpQVCX6AKmLu622jpx9pRzGnw4NTNHRiqlwTnR2f8p3Pezzc12m0fmaW4OeOYDRiTmCgnn2mO9Jt8Tas7V8eHKUjP52CdjUh45oigdF88onuQG1VwA8dG/PtACBs7L6/k17t7xJNuaZIYC394K21f7fFVOvDEL5jezvte607HRIQt6K3LZB5opMLB6l4cNuWRtp5Z/GqK0pS6/Wj8H47d7SJrYDnwpaAgJkmCWFuJYyfNLRe7dfcWqS39/UK1WNlGEzCG/sHAjME7+5pksAa19FRLNcI9+wohhZxaWm9khcJ+H4MZUYCQh6sSkSkCj9VwKk1ZmZKYqUx2RcJwEHrVw0JJgDGmcOu5/UXuo3bKPreMAn73z1Ov/82Kjq/7reReaLFLQ2K63oScUcImDoJ3MBDCx9LOPtua1KESc8PWwICpu4vkXnSw2cxziTlRM+VGQmffjtKn39xHD2ftfFZgK+Eg0lAwNQtQaWJYU0wa4hrG2cJfiYkBJXu6omNk8PT4iCfNkE2wDcmgdu67384IMJEWkGmXUyFHTbNgCsCyaRtwYC985G/b+fnj/hSd8mkJOiHzcptuQC+sSVI2WUw495xSoMQjlNZPRkoxQoOzNKFkx6nP/mHBneb/l6CQ8WQ4CeMHuD9ekSug5+6O5JoQNJj/pmeLy85fPoiTc/O094Hm5PeIpX1KtoSUkHEwqI5CRZA926Zk5CT4AACDhwht4ScBAcQcOAIuSXkJDiAgANHYEvgf/8D10KBnan0DysAAAAASUVORK5CYII="
              alt=""
            />
            <img
              class="h-35 w-35"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABYCAYAAACeV1sKAAAAAXNSR0IArs4c6QAACutJREFUeF7tnQlQVecVx/+sgiiyqyhIQFEQ4ooJakS0qNE4RpPGxGyNTtNqk5io08SlOLUqadTGNa7R6BjTpCbRWGsSRxsMRRSjEhaRxR0QkcUlyhbsnMtcfTzuu/f77r1vAd+ZYZjhfd855/vdw/n2+xzq6u7dg13MQuDevXtoaGiAgx2yWfgKSu2Qzcf2vmY7ZDtkCxCwgAl7JNshNxK4easWt27X4m51PerqGkDDIGcnB7i1cUY7Dxd4dWgDR0cHC+BSZ8KmIrm+vgG5BZUovHADF6/cQnHJbZRevyOAVRJ/X3d07uiB4C7tEdqtA8LDvAT4tiBWh1xRWY3006U4nVWGrNxy6DlaDwnyRJ/efnh8QCcEdWlvNd5Wg3z85FUcSSsW4FpCugV5YsKYUAzq19ES5prYsDjkg8mX8P0Pl1BS+ovFG0sGXVwc8frLUYgd2Nli9i0G+cjRIuz99hxKy+5YrHFyhhwcHPDumwMQ1cvX7P6YHfK5izfw+d58ZOeWm70xagyEdvPEondj1VRlrmNWyBS5//omn9kZaxacODYMzzzV3SwumAVy1Y0abPk022Kdml5k/HzcMOuP/RHcVd+RiO6Qc/MrsWH7z7heUa1X2y2u55XnIjBqeLBudnWFfOzkVazZkqGbc9ZUNH70I5g8IVwXF3SDfCStCJt2ZOnilK0oSRgejFefi9Dsji6QU44VY8P2TM3O2KICShuUPrSIZsinMsuwYv1JLT7YfN2nnwzDs+PVjzw0Qb52/Q7mLUlFdc2vNg9Kq4NTX4jEiCeCVKnRBHlB0lFcuHxTleGWWGnBrEHo1d2b23XVkHfvy8eeA+e4DbbkCoGdPLBk3mC4ODtyNUM15JdmfMdlqLUUHjE0CFOnRHI1RxXkdxKPoOz6XS5DranwrOn90D86gLlJ3JBb04SDmZJRQdoASJo/mLk6N+SHNU0YE33xmZ54cmQIE2guyPsPnsdnX+cxKW7thTzbu2L10jg4Oyl3glyQ7VHcNHRemBiOcQmPKMYTM+Sv/1OIL/9doKjwYSrg5+uOlX8bpthkZsj2KJZm+ca0PsJuuJwwQf5vyhV8vCtb8Ym1tAJ0VsPfz11wO+dshSr3+0X7Y/b0/tohL1pxDHmFVaqcsLVKBDZucBdEhnsjsqfPfffKyu8iObUYu/fxp8R17w9HB0/TB2kUI5mMv/OXI7bGitkfU1BFBdQ+KiPK+k+ykJxaxKyfCk6b0hvxQ7uarKMI+dCPl7Htsxwuo9YsLKaAyHAfPDs+rJkrYsTm5FU0SRG0lEnl6fM35/IF1cC+HfH2633VQ177cQbSfrpqTW5MtgmScQqgigSNlgBy8iplUwE9nOm/ixJSyKIV6Vw5uq27MzatGKke8lvzklFRZduboomzYyTzq3G0Kj0tgkz5eve+Qu7cvHhuLOjsnZTIpovyymrMnJ+s5JtVPxfBkBNq4Bg6T1FMD4xGGhTNPDLtxd6IHyKdl2UhZ2SXYdk6295aWpM0TOi4eP/FpQCSHtKnJi+Pju+Gl3/biz+Svz18ETt35/I8UE1lKZKooRRJ1FAW+eem0UIx6qzk6nh7tYGvtxsKzt+QVSumHt6H9mikH/78xgB+yASYQJtLKP+RxMUGNsmp9DcCTcMpJdgiZCkodJgwOtIXE8Y8WF9YvTkDqemmO3JxlEHDOLLPKnQAfdnCofyQzTGyMJwIGI5PRbD0m2Zh9BkBXrQ8XRa0GHkEJP9cFaIjfIWfgX2bL6pn5VZg2dqTqKk1vfFL/lGe583L7u7O2GxihCGbk99fcwJZZ7SdxpSDSkApYmh4ZZgiCHDinBgBtFxn5tbGCc9PDMeYEcGorf0Vrq5OzSLpwKGLyDxTLvywXIsQIfNGMhnevnYUnCTurshC/uvyY0J08ArlVkoBYjowrC8FVUq/qYii+yCUAihao3o9mBaTjjt36+8Dzcwp5z4Lbfhw1cz8aKxMY2ZjkYWc+Pc00PliHhGHQVJgeaer4shhxxdnERLUXoDrbXTZhjoyL09X0LIjb2clpCaJtQw1owvStf6DeLRv58oHeeEHacJNJFYRh0A8HZeU7t49fQSgo+OD4e7WNDLoIo/470+/b9ysFU730JSYZZxsOO2OGxzYZN1Cq98bl4+AR1sXPshLVqbjTB77EqDa+X/ngLb3U0CMxMWZyqoaHDh8EZQCzl9qfphG/O8x1VHKLRKxTrtZAm3rqgS4ujTfjpJNFx9uPIWfMq6x6BfK8Ax/+kX5Y/LEHkIaMJaiq78IQKtu1uD5p3swTQ7EUQZBo4gWRy48i0TMDZUoSAdetq1OkFQhC3nrrmwcTrnCbJu1Z3Z2dsTOj5o6lH6qtDEN5JSj5NqDyztiXlaabBh2WsYOiytv9Hc168UsAHx93LBqcRw/ZDqGRcexWMWw01OC8tSoEHTp5IGUYyXIltmV4JmBGaYFIQ2UVwtDRKUJDWv75MrRDdjE2Y/xQz56ogTrtv7M5YOeawlkWG99XI3hKPzE44H4wyvR/JAvF93C3CWpHKYgzJbULhcaGxJ1qR1ScTmusbDc8QDFnZHXZh5kmimJPqqdlhrWFxffxc5LzcRAIzPu6u+9NdDkxUtFyEtXpoMWv3mEtbMinXLTbopgAqx2J5nHZ61lt/xjJNyMxvSiTkXIX+0vxFf7+XZwxc7K1ORABKtl2q0Vip71e4R6YeEc6U6P7ChCprULWsPgEcNRBkUhLQD5+7oJy5nGK2+kV1zP4J128/hkzrKTxoVh0jjTd0oUIZNzMxcko5zz8iNNTKSmrYZQeRbnzQlJq+7F78UiJFh6f48pkqnQp1+exYFDF7h9ocilrXmKYhqz8m5schu0QoWgwHZIWjBE1jJTJNNKHK3I2aU5AbraQFcc5IQJMilY/OFx0L1puzQlsPOjxj1GXSAfTS/Bum18sz8l4y398ymTemLsb5RP2zNHMgGh2R/NAu3SSIAlipk7PhFqyvFibPikdd6h5g2c37/UuHzAIlyRbM/ND5CyRjF3JFMF6vyoE3yYZf7bMYgIb7qJq0vHZ6hE7bi5NTyYvlH+mDND/mS9cTu504WoYN7SVFy68vB1gjxpQmSlGrKaNY2WHskzXnsUg2P4X9qnGjIBa2mn8LU8ZLmdDyW9miCT8s/35GHf9+eV7LToz6mTo85OrWiGTIbpHXA//I99V1uts9aoR68Kpl0PuuarVnSBTMY37sjEj2nFav2wyXpdO7cTRhJ0BEyL6AaZnNi6KweHUy5r8cdm6tLBRrrR5OPtptknXSGTN3R4ZM+BQs2OWVMB3TL909Q+oKO5eojukMmpE6dLsWpzhrC31dKE3mFB77LQU8wCWXQwadUJZJ/Vdohcz8bK6aJzxa9OjsCQQYG6mzQrZPK2Jdygolv+tDasR/6VekJmhywa/ea7c/hiL/u5Ot3DSUJh18B2mDQ2DIP6y79KQasvFoMsOkr3tGmmaE0J8HMX3h+UEKff63vl2mNxyKIz9P4Meo+GJSU81AvDh3TFsFi2xXa9fLMaZGoAfQMOzRTpe0bM9T6NTgFtMaBPAB7r30n4khdriFUhGza4sqoadM/ubEElCi5U4UrxbVU86Nap8I053b3QO9xX91enq3HKZiAbO19b14Diq7dx7fpd0GUc+u4nukJWV98A+vInJ2cHuBt89xNdsKRboZ4St4/UgNGzjs1C1rOR1tZlh2yBJ2CHbIdsAQIWMGGPZAtBJtD/B6M4uo1Bi20bAAAAAElFTkSuQmCC"
              alt=""
            />
            <img
              class="h-35 w-35"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>


          <div class="flex items-center gap-x-6">
            <div>
              <p class="text-sm  font-semibold leading-6 text-black-600">
                Nuestros servicios contienen enlaces a otras plataformas.
                Además, puede utilizar su cuenta preexistente de "Facebook",
                "Google" o "LinkedIn" para iniciar sesión fácilmente en nuestro
                sitio web.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6 mt-8">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/LegalifyLogo.f739850cad0295308b0c.png"
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
              No controla estos sitios web y no es responsable de su contenido, políticas de privacidad, medidas de seguridad o cómo utilizan su información personal.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-x-6 mt-5">
            <img
              class="h-15 w-20 "
              src="https://legalify-theta.vercel.app/static/media/NotificationIcon.dda585fd0f08e633f147.png"
              alt=""
            />
            <div>
              <p class="text-sm text-left  font-semibold leading-6 text-black-600">
              Tenga en cuenta que estas plataformas y redes sociales pueden recopilar su información, lo cual está fuera del control de Legalify. Cualquier información que usted les proporcione está sujeta a sus políticas de privacidad, no a las de Legalify. Por lo tanto, le recomendamos que lea cuidadosamente las condiciones de uso y las políticas de privacidad de dichos terceros.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TermsCS6;
