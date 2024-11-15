"use client";

import { useTranslationClient } from "../../../locales/client";
import Layout from "../../layout/Layout";
import { imageMock } from "../../utils/images";
import Protfolio1 from "../Protfolio1";

export default function ClientsContainer() {
  const { t } = useTranslationClient();
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nuestros Clientes">
      <section className="team-section pt-space pb-space">
        <div className="clients-container">
          <div>
            <h4>{t("clients-text.international")}</h4>
            <br />
            BBC-TV
            <br />
            BBC- Natural History Unit
            <br />
            Big Media TV
            <br />
            Bright Bay Creative
            <br />
            Bunim-Murray Productions (The Challenge)
            <br />
            CTV (Canada)
            <br />
            Crews Control
            <br />
            Critical Content LLC
            <br />
            Darlow-Smithson, Inc.
            <br />
            Discovery Channel
            <br />
            DW Television (Germany)
            <br />
            E! Entertainment Television
            <br />
            Eureka Productions (Australia)
            <br />
            FOX Television
            <br />
            Fremantle Media Argentina (Latin American Idol)
            <br />
            Grenada Bristol TV
            <br />
            Harbor Picture Co. (Delta Airlines)
            <br />
            History Channel
            <br />
            Insight Productions
            <br />
            Kaleidescope Pictures
            <br />
            Kingstar TV
            <br />
            Media Arts
            <br />
            Miss Universe Inc.
            <br />
            Moskito Television Oy (Finland)
            <br />
            Mr Beast, LLC
            <br />
            MTV
            <br />
            Netflix
            <br />
            National Geographic Television
            <br />
            NBC'S Today Show
            <br />
            TBS (Japon)
            <br />
            Towers Productions
            <br />
            Travel Channel
            <br />
            Twitch Films
            <br />
            Wall Street Journal (WSJ)
            <br />
            World Race Productions (Amazing Race)
          </div>
          <div>
            <h4>{t("clients-text.local")}</h4>
            <br />
            AES PANAMA
            <br />
            AUTORIDAD DEL CANAL DE PANAMA
            <br />
            BANESCO
            <br />
            BLADEX
            <br />
            CERVECERIA HEINEKEN
            <br />
            CIUDAD DEL SABER
            <br />
            CORPORACION MEDCOM
            <br />
            DATASERVE, INC
            <br />
            FESTIEVENTOS
            <br />
            FLUGE
            <br />
            GAITANES
            <br />
            NESTLE PANAMA
            <br />
            PROLED INTERNACIONAL
            <br />
            ROOTS LATAM
            <br />
            RQ PRODUCCIONES
            <br />
            SHOW PRO
            <br />
            MAGICDREAMS, INC.
            <br />
            SERTV
            <br />
            STAR 5-VFX
            <br />
            TOCUMEN, S.A.
            <br />
            TOPLINE
            <br />
            TVN MEDIA
          </div>
        </div>
        <div style={{ marginTop: "60px" }}>
          <Protfolio1 images={imageMock} />
        </div>
      </section>
    </Layout>
  );
}
