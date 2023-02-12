import PageContext from "../context/PageContext";
import React, { useContext, useState } from "react";
import { ContainerStyled } from "../components/styles/Container.styles";
import { FlexBox } from "../components/styles/Flex.styles";
import { BackgroundStyled } from "../components/styles/Background.styles";
import destinationDesktopBackground from "../assets/destination/background-destination-desktop.jpg";
import destinationTabletBackground from "../assets/destination/background-destination-tablet.jpg";
import destinationMobileBackground from "../assets/destination/background-destination-mobile.jpg";
import { Tabs } from "../components/styles/Tabs.styles";
import { TabGroup } from "../components/styles/TabGroup.styles";
import { SubHeader } from "../components/styles/SubHeader.styles";
function Destination() {
  const { data } = useContext(PageContext);
  const { destinations } = data;
  const [active, setActive] = useState(destinations[0].name);
  const destinationNames = destinations.map((destination) => destination.name);

  const flexboxProperties = {
    desktop: {
      gap: "15rem",
      padding: "5rem 0",
      color: "#ffffff",
    },
    tablet: {
      gap: "2rem",
      justifyContent: "space-center",
      imageWidth: "40%",
    },
    mobile: {
      imageWidth: "45%",
    },
  };

  return (
    <BackgroundStyled
      background={destinationDesktopBackground}
      backgroundTablet={destinationTabletBackground}
      backgroundMobile={destinationMobileBackground}
    >
      <ContainerStyled>
        <SubHeader topDesktop="20%" topTablet="10%" tabletWidth="max-content">
          <span>01</span>
          Pick Your Destination
        </SubHeader>
        <FlexBox properties={flexboxProperties}>
          <section>
            {destinations.map((destination) =>
              destination.name === active ? (
                <img
                  className="margin-y planetImg rotatePlanet"
                  src={destination.images.png}
                  key={destination.name}
                  alt={destination.name}
                />
              ) : (
                ""
              )
            )}
          </section>
          <section>
            <TabGroup>
              {destinationNames.map((destinationName, index) => (
                <Tabs
                  key={index}
                  active={active === destinationName}
                  onClick={() => setActive(destinationName)}
                >
                  {destinationName}
                </Tabs>
              ))}
            </TabGroup>
            {destinations.map((destination) =>
              destination.name === active ? (
                <React.Fragment key={destination.name}>
                  <h2 className="upperCase">{destination.name}</h2>
                  <p
                    className="margin-x"
                    style={{
                      color: `${({ theme }) => theme.colors.secondary}`,
                    }}
                  >
                    {destination.description}
                  </p>

                  <div className="hr margin-y"></div>
                  <TabGroup
                    justifyContent="space-around"
                    gap="5rem"
                    flexDirection="column"
                    mobileGap="1rem"
                  >
                    <div>
                      <p className="subHeading2 upperCase">AVG. DISTANCE</p>
                      <p className="subHeading1">{destination.distance}</p>
                    </div>
                    <div>
                      <p className="subHeading2 upperCase">Est. travel time</p>
                      <p className="subHeading1">{destination.travel}</p>
                    </div>
                  </TabGroup>
                </React.Fragment>
              ) : (
                ""
              )
            )}
          </section>
        </FlexBox>
      </ContainerStyled>
    </BackgroundStyled>
  );
}

export default Destination;
