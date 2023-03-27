import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


export default function LightBox({ floors, setOpen, open, imageIndex }: any) {
  const images = floors.map((floor: any) => ({ src: floor.image }));

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={images}
        plugins={[ Thumbnails, Zoom]}
      />
    </>
  );
}
