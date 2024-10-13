"use client";
import Link from "next/link";
import { Tilt } from "react-tilt";
import Layout from "../../components/layout/Layout";
const toltOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.01, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

interface TiltCardProps {
  role: string;
  name: string;
  imageUrl: string;
  socialLinks: { icon: JSX.Element; duration: number }[];
  aosDuration: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  role,
  name,
  imageUrl,
  socialLinks,
  aosDuration,
}) => {
  const tiltOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.01,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <Tilt
      options={tiltOptions}
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
      data-aos="zoom-in-left"
      data-aos-duration={aosDuration}
    >
      <div className="team-common-item tilt">
        <div className="thumb position-relative overflow-hidden w-100">
          <img
            src={imageUrl}
            alt={name}
            className="overflow-hidden w-100"
            style={{ width: "240px", height: "340px"}}
          />
          <div className="namebox py-xxl-5 py-xl-4 py-sm-3 py-2 px-3 text-center">
            {/* <span className="text-uppercase white-clr d-block mb-2">
              {role}
            </span> */}
            <h5>
              <Link href="/team-details" className="htheme white-clr ">
                {name}
              </Link>
            </h5>
          </div>
          <ul className="common-social d-grid align-items-center gap-2">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                data-aos="zoom-in-right"
                data-aos-duration={link.duration}
              >
                <Link href="/#" className="d-center">
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Tilt>
  );
};

// components/social/FacebookIcon.tsx
export const FacebookIcon = () => (
  <svg
    width={10}
    height={16}
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.8" clipPath="url(#clip0_6308_28)">
      <path
        d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_6308_282244">
        <rect width={10} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// components/social/TwitterIcon.tsx
export const TwitterIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z"
      fill="white"
    />
  </svg>
);

// components/social/LinkedInIcon.tsx
export const LinkedInIcon = () => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.8">
      <path
        d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z"
        fill="white"
      />
    </g>
  </svg>
);

// components/social/YouTubeIcon.tsx
export const YouTubeIcon = () => (
  <svg
    width={18}
    height={12}
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z"
      fill="white"
    />
  </svg>
);
const imgStore = "/assets/img/client/";

const teamArray = [
  {
    role: "Autoridad del Canal de Panamá",
    name: "Autoridad del Canal de Panamá",
    imageUrl: `${imgStore}autoridad_del_canal_de_panama.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Boyd, Barcenas, S.A.",
    name: "Boyd, Barcenas, S.A.",
    imageUrl: `${imgStore}boyd_barcenas_sa.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Cerebro Y&R",
    name: "Cerebro Y&R",
    imageUrl: `${imgStore}cerebro_yr.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "En Estreno Entertainment",
    name: "En Estreno Entertainment",
    imageUrl: `${imgStore}en_estreno_entertainment.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "E-Motion",
    name: "E-Motion",
    imageUrl: `${imgStore}e_motion.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Publicis",
    name: "Publicis",
    imageUrl: `${imgStore}publicis.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Genios",
    name: "Genios",
    imageUrl: `${imgStore}genios.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Genesis",
    name: "Genesis",
    imageUrl: `${imgStore}genesis.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "In House Advertising",
    name: "In House Advertising",
    imageUrl: `${imgStore}in_house_advertising.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Insight Advertising",
    name: "Insight Advertising",
    imageUrl: `${imgStore}insight_advertising.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "JW Thompson",
    name: "JW Thompson",
    imageUrl: `${imgStore}jw_thompson.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  // {
  //   role: "Química Publicidad",
  //   name: "Química Publicidad",
  //   imageUrl: `${imgStore}quimica_publicidad.png`,
  //   socialLinks: [
  //     { icon: <FacebookIcon />, duration: 1400 },
  //     { icon: <TwitterIcon />, duration: 1600 },
  //     { icon: <LinkedInIcon />, duration: 1800 },
  //     { icon: <YouTubeIcon />, duration: 1900 },
  //   ],
  //   aosDuration: 1400,
  // },
  {
    role: "Leo Burnett, Panama",
    name: "Leo Burnett, Panama",
    imageUrl: `${imgStore}leo_burnett_panama.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "McCann Erickson Worldgroup Panama",
    name: "McCann Erickson Worldgroup Panama",
    imageUrl: `${imgStore}mccann_erickson_worldgroup_panama.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "MEDCOM",
    name: "MEDCOM",
    imageUrl: `${imgStore}medcom.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  // {
  //   role: "Mega Publicidad",
  //   name: "Mega Publicidad",
  //   imageUrl: `${imgStore}mega_publicidad.png`,
  //   socialLinks: [
  //     { icon: <FacebookIcon />, duration: 1400 },
  //     { icon: <TwitterIcon />, duration: 1600 },
  //     { icon: <LinkedInIcon />, duration: 1800 },
  //     { icon: <YouTubeIcon />, duration: 1900 },
  //   ],
  //   aosDuration: 1400,
  // },
  {
    role: "PISA",
    name: "PISA",
    imageUrl: `${imgStore}pisa.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Publicuatro",
    name: "Publicuatro",
    imageUrl: `${imgStore}publicuatro.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Punto Aparte Publicidad",
    name: "Punto Aparte Publicidad",
    imageUrl: `${imgStore}punto_aparte_publicidad.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "RCN-TV",
    name: "RCN-TV",
    imageUrl: `${imgStore}rcn_tv.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "RILA Publicidad",
    name: "RILA Publicidad",
    imageUrl: `${imgStore}rila_publicidad.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  // {
  //   role: "Rogelio Díaz Publicidad",
  //   name: "Rogelio Díaz Publicidad",
  //   imageUrl: `${imgStore}rogelio_diaz_publicidad.png`,
  //   socialLinks: [
  //     { icon: <FacebookIcon />, duration: 1400 },
  //     { icon: <TwitterIcon />, duration: 1600 },
  //     { icon: <LinkedInIcon />, duration: 1800 },
  //     { icon: <YouTubeIcon />, duration: 1900 },
  //   ],
  //   aosDuration: 1400,
  // },
  {
    role: "TBWA/PANAMA",
    name: "TBWA/PANAMA",
    imageUrl: `${imgStore}tbwa_panama.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "Tocumen, S.A.",
    name: "Tocumen, S.A.",
    imageUrl: `${imgStore}tocumen_sa.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "TVN Canal 2",
    name: "TVN Canal 2",
    imageUrl: `${imgStore}tvn_canal_2.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
  {
    role: "VFX",
    name: "VFX",
    imageUrl: `${imgStore}vfx.png`,
    socialLinks: [
      { icon: <FacebookIcon />, duration: 1400 },
      { icon: <TwitterIcon />, duration: 1600 },
      { icon: <LinkedInIcon />, duration: 1800 },
      { icon: <YouTubeIcon />, duration: 1900 },
    ],
    aosDuration: 1400,
  },
];

export default function Team() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nuestros Clientes">
      <section className="team-section pt-space pb-space">
        <div className="container">
          <div className="row g-xxl-7 g-xl-5 g-lg-4 g-3">
            <h1>Locales</h1>
            {teamArray.map((member, index) => (
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
            {/* {teamArray.map((member, index) => (
              <TiltCard
                key={index}
                role={member.role}
                name={member.name}
                imageUrl={member.imageUrl}
                socialLinks={member.socialLinks}
                aosDuration={member.aosDuration}
              />
            ))} */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
