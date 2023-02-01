import { colors, screen } from "@/styles/styleConstants";
import { Route } from "devextreme-react/map";
import Link from "next/link";
import { ChevronsRight } from "tabler-icons-react";
import styled from "styled-components";

export default function Links() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
      title: "Calendar",
      desc: "Commodo enim nostrud enim consequat elit sunt laboris aliquip mollit. Fugiat sint duis incididunt duis. Laborum deserunt enim incididunt nulla do pariatur laborum velit excepteur. Esse sint laboris est ad velit in.",
      route: "/calendar",
    },
    {
      img: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Map",
      desc: "Cillum exercitation do et andidunt exercitation incididunt fugiat anim ex velit non ad nostrud labore Lorem.im. Amet occaecat inci Non non consequat amet ipsum deserunt est esse elit consectetur cupidatat nisi.",
      route: "/map",
    },
    {
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      title: "Notecards",
      desc: "Deserunt sit fugiat elit ullamco cillum ea anim. Nostrud pariatur nostrud culpa nulla consectetur anim minim id exercitation cillum exercitation. Voluptate cupidatat do cupidatat elit nisi non id elit dolor in ad amet aliquip eiusmod.",
      route: "/notecards",
    },
  ];

  return (
    <LinksLayout>
      {data.map((link) => (
        <PageLink
          title={link.title}
          desc={link.desc}
          imgSrc={link.img}
          route={link.route}
          key={link.title}
        />
      ))}
    </LinksLayout>
  );
}

const LinksLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;

  padding: 5rem max(3rem, calc(50vw - 50rem));

  background-color: #ddd;

  @media (max-width: ${screen.desktop}) {
    gap: 3rem;
    padding: 5rem 2rem;
  }

  @media (max-width: ${screen.laptop}) {
    gap: 0.5rem;
    padding: 5rem 1rem;
  }

  @media (max-width: ${screen.tablet}) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 5rem max(2rem, calc(50vw - 13rem));
  }
`;

function PageLink({
  imgSrc,
  title,
  desc,
  route,
}: {
  imgSrc: string;
  title: string;
  desc: string;
  route: string;
}) {
  return (
    <>
      <LinkWrapper>
        <Image src={imgSrc} alt="" />
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <LearnMore href={route}>
            Learn more
            <ChevronsRight size="1rem" />
        </LearnMore>
      </LinkWrapper>
    </>
  );
}

const LearnMore = styled(Link)`
  display: flex;

  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: ${colors.unfBlue};
  font-weight: 700;
  font-size: 1rem;

  padding: 0.5rem;
  margin: 1rem 0;
`;

const LinkWrapper = styled.div`
  color: ${colors.nearBlack};

  padding: 2rem;
  border-radius: 1rem;

  transition: 0.2s ease box-shadow, 0.2s ease background-color;

  @media (max-width: ${screen.desktop}) {
    padding: 1.5rem;
  }

  @media (max-width: ${screen.laptop}) {
    padding: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 15rem;

  @media (max-width: ${screen.desktop}) {
    height: 12rem;
  }
`;

const Title = styled.div`
  text-align: center;
  font-weight: 550;
  font-size: 1.25rem;

  margin: 1rem 0;

  color: ${colors.nearBlack};
`;

const Description = styled.div`
  text-align: center;
  line-height: 1.5rem;

  color: ${colors.nearBlack};
`;
