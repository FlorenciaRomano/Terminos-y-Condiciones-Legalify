/* eslint-disable */
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { IntroSection } from "../components/IntroSection";
import { ServiceSection } from "../components/ServiceSection";
import { AboutSection } from "../components/AboutSection";
import { ReadyToEvolveSection } from "../components/ReadyToEvolveSection";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { AfiliadosSuperVielleSection } from "../components/AfiliadosSuperVielleSection";
import AfiliadosTributoSimple from "../components/AfiliadosTributoSimple";
import Plans from "../components/Plans";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import Testimonios from "../components/Testimonios";
import PlansAbogados from "../components/PlansAbogados";
import Policies from "../components/Policies";
import Financing from "../components/Financing";
import Asesor360 from "../components/Asesor360";
import AcordeonAsesoramiento from "../components/AcordeonAsesoramiento";
import ColegioAbo from "../components/ColegioAbo";

export async function getStaticProps() {
  return { props: { overflow: "hiddens" } };
}

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [navWidth, setNavWidth] = useState("0%");

  function openNav() {
    setNavWidth("100%");
  }

  function closeNav() {
    setNavWidth("0%");
  }

  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const { showAfiliadosSuperVielleSection, showAfiliadosTributoSimple } = t(
    "componentVisibility",
    { returnObjects: true }
  );

  return (
    
    <div className="mx-[1rem] lg:mx-[8rem] gridGeneral">
      <div id="myNav" className="overlay" style={{ width: navWidth }}>
        <a
          href="javascript:void(0)"
          className="closebtn font-thin"
          onClick={() => closeNav()}
        >
          &times;
        </a>
        <div className="overlay-content flex flex-col items-center text-[13.59px] mt-[116px] font-thin">
          <img
            src="/logo_legalify_azul_transparente_white.png"
            alt="lega_logo"
            height={43}
            width={121}
          />

          <Link href="/#service" passHref={true}>
            <p className="mt-[60px] menuItem" onClick={() => closeNav()}>
              {t("NavBarServices")}
            </p>
          </Link>

          <hr className="w-[119px] border-[0.27px] my-[30px]" />
          <Link href="/#payment" passHref={true}>
            <p className="mt-[60px] menuItem" onClick={() => closeNav()}>
              {t("NavBarPrices")}
            </p>
          </Link>

          <hr className="w-[119px] border-[0.27px] my-[30px]" />
          <Link href="/#aliados" passHref={true}>
            <p className="mt-[60px] menuItem" onClick={() => closeNav()}>
              {t("NavBarAliance")}
            </p>
          </Link>

          <hr className="w-[119px] border-[0.27px] my-[30px]" />
          <Link href="/#testimonials" passHref={true}>
            <p className="mt-[60px] menuItem" onClick={() => closeNav()}>
              {t("NavBarTestimonials")}
            </p>
          </Link>

          <hr className="w-[119px] border-[0.27px] my-[30px]" />
          <Link href={process.env.NEXT_PUBLIC_URL_APP + "/login"} passHref={true}>
            <p className="mt-[60px] menuItem" onClick={() => closeNav()}>
              {t("NavBarLogin")}
            </p>
          </Link>
        </div>
      </div>
      <Navbar openNavbar={openNav} />
      <IntroSection checked={checked} setChecked={setChecked} />
      <AboutSection />
      <ServiceSection />

      <Plans />
      <ReadyToEvolveSection id="evolve" />
      <PlansAbogados />
      {/* <AfiliadosSuperVielleSection id="aliados" />
      <AfiliadosTributoSimple /> */}
      {/* <div>
        {showAfiliadosSuperVielleSection && (
          <AfiliadosSuperVielleSection id="aliados" />
        )}
      </div> */}
      <h1 className="text-4xl text-legalify-primary font-semibold text-center mt-7 mb-7">
        Servicios para empresas
      </h1>
      <AcordeonAsesoramiento />
      <h1 className="text-4xl text-legalify-primary font-semibold text-center mt-7 mb-7">
        Promoción para matriculados y matriculadas del Colegio Público de
        Abogados de la Capital Federal
      </h1>
      <ColegioAbo />
      <div id="aliados" className="mt-12">
        {showAfiliadosTributoSimple && <AfiliadosTributoSimple />}
      </div>
      <Testimonios />
      <Footer />
      <Policies />
      {/*
      <div className="fixed1 z-101 bottom-51 right-21 cursor-pointer1">
        <a
          href="https://api.whatsapp.com/send?phone=5491155801155&text="
          rel="noreferrer"
          target="_blank"
        >
          <img src="./whatsapp-logo.svg" alt="imagen whap" className="relative1"/>
        </a>
      </div>
      */}
    </div>
  );
}
