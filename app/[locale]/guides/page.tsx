import { notFound } from "next/navigation";
import { GuidesPage } from "../../components/GuidesPage";
import { locales, type Locale } from "../../components/i18n";
export default async function Page({params}:{params:Promise<{locale:string}>}){ const {locale}=await params; if(!locales.includes(locale as Locale)||locale==="en") notFound(); return <GuidesPage locale={locale as Locale}/>; }
