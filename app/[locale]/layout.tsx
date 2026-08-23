import { notFound } from "next/navigation";
import { locales, type Locale } from "../components/i18n";

export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!locales.includes(locale as Locale)||locale==="en") notFound();
  return <div lang={locale === "pt-br" ? "pt-BR" : locale}>{children}</div>;
}
