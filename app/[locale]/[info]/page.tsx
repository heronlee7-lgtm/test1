import { notFound } from "next/navigation";
import { InfoPage, infoKinds, type InfoKind } from "../../components/InfoPage";
import { locales, type Locale } from "../../components/i18n";

export default async function Page({params}:{params:Promise<{locale:string;info:string}>}){
  const {locale,info}=await params;
  if(!locales.includes(locale as Locale)||locale==="en"||!infoKinds.includes(info as InfoKind)) notFound();
  return <InfoPage locale={locale as Locale} kind={info as InfoKind}/>;
}
