import { colors } from "@/styles/styleConstants";
import Link from "next/link";
import styled from "styled-components";

export default function Pack({
  title,
  desc,
  img,
  link,
  creator,
}: {
  title: string;
  desc: string;
  img: string;
  link: string;
  creator: { img: string; name: string };
}) {
  return (
    <>
      <PackHolder>
        <PackWrapper href={link}>
          <Image src={img} alt="" />
          <TextHolder>
            <Title>{title}</Title>
            <Description>{desc}</Description>
            <Creator>
              <CreatorImg src={creator.img} alt="" />
              <CreatorName>{creator.name}</CreatorName>
            </Creator>
          </TextHolder>
        </PackWrapper>
      </PackHolder>
    </>
  );
}
const PackHolder = styled.div`
  width: 300px;
  height: 400px;
  
  margin: 0rem auto 3rem auto;

  display: flex;
`;

const Image = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 1rem;
  object-fit: cover;

  filter: brightness(0.65);

  background-color: #aaa;

  position: absolute;
  top: 0;

  transition: 0.1s ease filter;
`;

const PackWrapper = styled(Link)`
  width: 300px;
  height: 400px;

  text-decoration: none;
  color: ${colors.nearBlack};

  position: relative;

  &:hover {
    ${Image} {
      filter: brightness(1);
    }
  }
`;

const TextHolder = styled.div`
  position: absolute;
  bottom: 0;

  color: white;

  text-shadow: 0 0 1rem black;

  padding: 1rem;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0.25rem 0;
`;

const Description = styled.div`
  line-height: 0.8rem;
  font-size: 0.8rem;
`;

const Creator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  margin-top: 1rem;
`;

const CreatorImg = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  object-fit: cover;
`;

const CreatorName = styled.span`
  font-size: 0.9rem;
`;
