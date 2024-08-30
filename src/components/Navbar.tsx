import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import Language from "./Language";
import MenuButton from "../../public/ic-menu.svg";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useModal } from "./ModalContext";

interface Props {
  openNavbar: Function;
}

export const Navbar: React.FC<Props> = ({ openNavbar }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const { isModalOpen } = useModal();

  if (isModalOpen) {
    return null;
  }

  return (
    <nav
      className={`flex justify-between md:justify-between lg:justify-between md:px-6 lg:px-6 py-4 sticky top-0 z-10 ${
        isModalOpen ? "bg-blur" : "bg-white"
      }`}
    >
      <div className="md:hidden flex items-center" onClick={() => openNavbar()}>
        <MenuButton />
      </div>
      <div className="hidden sm:flex">
        <img
          src="/logo_legalify_azul_transparente.png"
          width={139}
          height={49}
          alt="logo"
        />
      </div>
      <div className="flex items-center md:justify-between lg:justify-between">
        <div className="hidden sm:flex mr-3">
          <Link href="/#service" passHref={true}>
            <p className="text-lg text-legalify-primary font-medium cursor-pointer ml-4">
              {t("NavBarServices")}
            </p>
          </Link>
        </div>
        <div className="hidden sm:flex mr-3">
          <Link href="/#payment" passHref={true}>
            <p className="text-lg text-legalify-primary font-medium cursor-pointer">
              {t("NavBarPrices")}
            </p>
          </Link>
        </div>
        <div className="hidden sm:flex mr-3">
          <Link href="/#aliados" passHref={true}>
            <p className="text-lg text-legalify-primary font-medium cursor-pointer">
              {t("NavBarAliance")}
            </p>
          </Link>
        </div>
        <div className="hidden sm:flex mr-3">
          <Link href="/#testimonials" passHref={true}>
            <p className="text-lg text-legalify-primary font-medium cursor-pointer">
              {t("NavBarTestimonials")}
            </p>
          </Link>
        </div>
        <div className="hidden sm:flex mr-3">
          <Link href="/#colegioAbo" passHref={true}>
            <p className="text-lg text-legalify-primary font-medium cursor-pointer">
              Promociones
            </p>
          </Link>
        </div>
        <div
          className="hidden sm:flex mr-3"
          onClick={() => (window.location.href = "https://blog.legalify.app/")}
        >
          <Link href="#" passHref={true}>
            <p className="text-lg text-legalify-primary font-medium cursor-pointer">
              Blog
            </p>
          </Link>
        </div>
        <div
          className="hidden sm:flex mr-3"
          onClick={() =>
            (window.location.href = `${process.env.NEXT_PUBLIC_URL_APP}/login`)
          }
        >
          <Link href="#" passHref={false}>
            <p className="text-lg text-legalify-primary font-medium cursor-pointer">
              {t("NavBarLogin")}
            </p>
          </Link>
        </div>
        <div>
          <Button label={t("NavBarButton")} />
        </div>
        <Language />
      </div>
    </nav>
  );
};
