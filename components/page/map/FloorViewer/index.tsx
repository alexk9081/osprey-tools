import { colors, screen } from "@/styles/styleConstants";
import { useState, useEffect } from "react";
import styled from "styled-components";
import LightBox from "./Lightbox";

export default function FloorViewer({
  floors,
}: {
  floors: {
    floor: string;
    image: string;
  }[];
}) {
  const [activeImage, setActiveImage] = useState(floors[0]["image"]);
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setActiveImage(floors[0]["image"]);
  }, [floors]);

  return (
    <>
      <FloorSelectors>
        {floors.map((map, index) => (
          <Button
            onClick={() => {
              setActiveImage(map.image);
              setImageIndex(index);
            }}
            key={map.floor}
            isActive={map.image == activeImage}
          >
            {map.floor}
          </Button>
        ))}
      </FloorSelectors>

      <Image src={activeImage} onClick={() => setOpen(true)} alt="" />
      <LightBox
        floors={floors}
        open={open}
        setOpen={setOpen}
        imageIndex={imageIndex}
      />
    </>
  );
}

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 5rem - 3rem);

  object-fit: contain;

  cursor: pointer;
`;

const FloorSelectors = styled.div`
  display: grid;
  grid-auto-flow: column;

  height: 3rem;

  @media (max-width: ${screen.tablet}) {
    justify-content: left;

    margin: 0 1rem;

    gap: 1rem;
  }

  @media (max-width: ${screen.mobile}) {
    overflow: scroll;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? colors.nearBlack : colors.lightGray};

  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;

  border: none;
  border-bottom: ${(props: { isActive: boolean }) =>
    props.isActive ? "4px solid " + colors.unfBlue : "4px solid transparent"};
  height: 100%;

  transition: 0.3s ease all, 0.1s ease border-bottom;

  &:hover {
    cursor: pointer;
    background-color: ${colors.translucentDarkWhite};
    color: ${colors.lightBlack};
  }
`;
