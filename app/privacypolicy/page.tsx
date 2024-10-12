import React from "react";
import Layout from "../../components/layout/Layout";
import { useTranslationServer } from "../../locales/server";

async function Page() {
  const { t } = await useTranslationServer();

  return (
    <Layout
      headerStyle={1}
      footerStyle={3}
      breadcrumbTitle={t("nav-bar.privacy")}
    >
      <div
        style={{
          width: "100%",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>{t("privacy-policy.subtitle")}</h4>
        <br />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <div
            style={{ fontSize: "20px" }}
            dangerouslySetInnerHTML={{
              __html: t("privacy-policy.text").replace(/\n/g, "<br>"),
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Page;
