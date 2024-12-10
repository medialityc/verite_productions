import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import React from "react";
import NextJsImage from "./next-js-image";
import slides from "./slides";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function LightboxComponent({ open, setOpen }: Props) {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      render={{ slide: NextJsImage }}
      plugins={[Zoom]}
    />
  );
}

export default LightboxComponent;
