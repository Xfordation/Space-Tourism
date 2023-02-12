import { BackgroundStyled } from "../components/styles/Background.styles";
import destinationDesktopBackground from "../assets/destination/background-destination-desktop.jpg";
import destinationTabletBackground from "../assets/destination/background-destination-tablet.jpg";
import destinationMobileBackground from "../assets/destination/background-destination-mobile.jpg";
import { ContainerStyled } from "../components/styles/Container.styles";
import notFound from "../assets/shared/notFound.svg";
import { FlexBox } from "../components/styles/Flex.styles";
function Notfound404() {
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
      background={destinationDesktopBackground}
      backgroundTablet={destinationTabletBackground}
      backgroundMobile={destinationMobileBackground}
    >
      <ContainerStyled>
        <FlexBox properties={flexboxProperties}>
          <img src={notFound} alt="404 Not Found" width="100%" height="100%" />
        </FlexBox>
      </ContainerStyled>
    </BackgroundStyled>
  );
}

export default Notfound404;
