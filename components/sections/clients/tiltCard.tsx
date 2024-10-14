import Link from "next/link";
import { Tilt } from "react-tilt";

// const toltOptions = {
//   reverse: false, // reverse the tilt direction
//   max: 35, // max tilt rotation (degrees)
//   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1.01, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 1000, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)",
// };


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
            style={{ width: "240px", height: "340px", borderRadius: "20px" }}
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

export default TiltCard;