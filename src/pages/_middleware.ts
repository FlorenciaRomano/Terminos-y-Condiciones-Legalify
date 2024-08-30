import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/aliados/supervielle"))
    return NextResponse.redirect(
      new URL(
        "https://onboardingnegocios.supervielle.com.ar/?utm_source=legalify-mail&utm_medium=off&utm_campaign=empresas_display_performance_conversiones_prospecting_null_linea-express&utm_content=linea-express_&utm_term=null&deal=legalify-mail",
        request.url
      )
    );
  else if (request.nextUrl.pathname.startsWith("/aliados/tributoSimple"))
    return NextResponse.redirect(
      new URL("https://tributosimple.com/legalify", request.url)
    );
}
