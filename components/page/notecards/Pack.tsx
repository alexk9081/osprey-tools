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
      <PackWrapper href={link}>
        <Image src={img} alt="" />
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Creator>
          <CreatorImg src={creator.img} alt="" />
          <CreatorName>{creator.name}</CreatorName>
        </Creator>
      </PackWrapper>
    </>
  );
}


const PackWrapper = styled(Link)`
  width: 300px;

  text-decoration: none;
  color: ${colors.nearBlack};
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 1rem;
  object-fit: contain;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.25rem 0;
`;

const Description = styled.div`
  line-height: 1rem;
`;

const Creator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  margin-top: 1rem;
`;

const CreatorImg = styled.img`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  object-fit: cover;
`;

const CreatorName = styled.span`
  font-size: 1.1rem;
`;