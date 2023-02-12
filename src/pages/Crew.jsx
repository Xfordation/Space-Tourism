import { useContext } from "react";
import PageContext from "../context/PageContext";
import { BackgroundStyled } from "../components/styles/Background.styles";
import { ContainerStyled } from "../components/styles/Container.styles";
import { FlexBox } from "../components/styles/Flex.styles";
import crewBackgroundDesktop from "../assets/crew/background-crew-desktop.jpg";
import crewBackgroundTablet from "../assets/crew/background-crew-tablet.jpg";
import crewBackgroundMobile from "../assets/crew/background-crew-mobile.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SubHeader } from "../components/styles/SubHeader.styles";
function Crew() {
  const { data } = useContext(PageContext);
  const { crew } = data;
  const flexboxProperties = {
    desktop: {
      gap: "4rem",
      padding: "5rem 0 0 0",
      color: "#ffffff",
    },
    tablet: {
      gap: "2rem",
      justifyContent: "space-around",
      imageWidth: "50%",
    },
    mobile: {
      columnPosition: "column-reverse",
      imageWidth: "60%",
    },
  };

  return (
    <BackgroundStyled
      background={crewBackgroundDesktop}
      backgroundTablet={crewBackgroundTablet}
      backgroundMobile={crewBackgroundMobile}
    >
      <ContainerStyled>
        <SubHeader topDesktop="25%" className="displayLarge">
          <span>02</span>
          Meet your Crew
        </SubHeader>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {crew.map((member) => (
            <SwiperSlide key={member.name}>
              <FlexBox properties={flexboxProperties}>
                <section>
                  <SubHeader
                    position="unset"
                    className="displayTablet margin-y"
                  >
                    <span>02</span>
                    Meet your Crew
                  </SubHeader>
                  <header>
                    <h4 style={{ color: "#979797" }} className="upperCase">
                      {member.role}
                    </h4>
                    <h3 className="upperCase" style={{ color: "#ffffff" }}>
                      {member.name}
                    </h3>
                  </header>

                  <p
                    className="lineHeight32 margin-y margin-x"
                    style={{ color: "#ffffff" }}
                  >
                    {member.bio}
                  </p>
                </section>
                <section className="imgPos">
                  <SubHeader
                    position="unset"
                    className="displayMobile margin-y"
                  >
                    <span>02</span>
                    Meet your Crew
                  </SubHeader>
                  <img src={member.images.png} alt="" />
                </section>
              </FlexBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerStyled>
    </BackgroundStyled>
  );
}

export default Crew;
