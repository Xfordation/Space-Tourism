import { useNavigate } from "react-router-dom";
import { ContainerStyled } from "../components/styles/Container.styles";
import { FlexBox } from "../components/styles/Flex.styles";
import { Circle } from "../components/styles/Circle.styles";
import { BackgroundStyled } from "../components/styles/Background.styles";
import homeDesktopBackground from "../assets/home/background-home-desktop.jpg";
import homeTabletBackground from "../assets/home/background-home-tablet.jpg";
import homeMobileBackground from "../assets/home/background-home-mobile.jpg";
function Home() {
  const navigate = useNavigate();
  const flexboxProperties = {
    desktop: {
      gap: "2rem",
      padding: "5rem 0",
    },
    tablet: {
      justifyContent: "space-around",
    },
    mobile: {},
  };
  return (
    <BackgroundStyled
      background={homeDesktopBackground}
      backgroundTablet={homeTabletBackground}
      backgroundMobile={homeMobileBackground}
    >
      <ContainerStyled>
        <FlexBox properties={flexboxProperties}>
          <section style={{ color: "hsl(231deg, 77%, 90%)", width: "100%" }}>
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p className="lineHeight32 margin-x">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <section style={{ width: "100%" }}>
            <Circle onClick={() => navigate("/destination")}>
              <h6>EXPLORE</h6>
            </Circle>
          </section>
        </FlexBox>
      </ContainerStyled>
    </BackgroundStyled>
  );
}

export default Home;
