import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/all.min.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/swiper.min.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/main.css";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import acceptLanguage from "accept-language";
import { cookieI18Name, fallbackLng, languages } from "../locales/lang";
import { cookies } from "next/headers";
import { I18NProvider } from "../locales";

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--manrope",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--jakarta",
  display: "swap",
});
export const metadata = {
  title: "Verite Producciones",
  description:
    "Establecida en 1993, Verite Producciones está dedicada a la producción publicitaria, industrial y de televisión de altos valores. Contamos con personal ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  acceptLanguage.languages(languages);
  const lng =
    acceptLanguage.get(cookies().get(cookieI18Name)?.value) || fallbackLng;
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}
      >
        <I18NProvider {...{ lng }}>{children}</I18NProvider>
      </body>
    </html>
  );
}
