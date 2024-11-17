import Layout from "../../components/layout/Layout";
import ContactContainer from "../../components/sections/contact/ContactContainer";
import { useTranslationServer } from "../../locales/server";

export default async function Contact() {
  const { t } = await useTranslationServer();
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={t("contact.title")}
    >
      <ContactContainer />
    </Layout>
  );
}
