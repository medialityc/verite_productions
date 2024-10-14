"use client";

import Layout from "../../layout/Layout";
import { internationalClients, localClients } from "../../lib/placeholder";
import TiltCard from "./tiltCard";



export default function ClientsContainer() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nuestros Clientes">
      <section className="team-section pt-space pb-space">
        <div className="container">
          <div className="row g-xxl-7 g-xl-5 g-lg-4 g-3">
            <h1>Locales</h1>
            {localClients.map((member, index) => (
              <TiltCard
                key={index}
                role={member.role}
                name={member.name}
                imageUrl={member.imageUrl}
                socialLinks={member.socialLinks}
                aosDuration={member.aosDuration}
              />
            ))}
            <h1>Internacionales</h1>
            {internationalClients.map((member, index) => (
              <TiltCard
                key={index}
                role={member.role}
                name={member.name}
                imageUrl={member.imageUrl}
                socialLinks={member.socialLinks}
                aosDuration={member.aosDuration}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
