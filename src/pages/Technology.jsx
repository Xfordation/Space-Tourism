import { useContext } from "react";
import PageContext from "../context/PageContext";
import { BackgroundStyled } from "../components/styles/Background.styles";
import { ContainerStyled } from "../components/styles/Container.styles";
import { FlexBox } from "../components/styles/Flex.styles";
import tecnologyDesktopBackground from "../assets/technology/background-technology-desktop.jpg";
import tecnologyTabletBackground from "../assets/technology/background-technology-tablet.jpg";
import tecnologyMobileBackground from "../assets/technology/background-technology-mobile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SubHeader } from "../components/styles/SubHeader.styles";
SwiperCore.use([Pagination]);

function Technology() {
  const { data } = useContext(PageContext);
  const { technology } = data;

  const flexboxProperties = {
    desktop: {
      gap: "20rem",
      gap1280: "5rem",
      padding: "5rem 0 5rem 25rem",
      padding1280: "5rem 0 5rem 14rem",
    },
    tablet: {
      gap: "2rem",
      padding: "5rem 0",
      justifyContent: "space-around",
      columnPosition: "column-reverse",
    },
    mobile: {
      columnPosition: "column-reverse",
    },
  };
  return (
    <BackgroundStyled
      background={tecnologyDesktopBackground}
      backgroundTablet={tecnologyTabletBackground}
      backgroundMobile={tecnologyMobileBackground}
    >
      <ContainerStyled style={{ overflow: "visible" }}>
        <SubHeader topDesktop="20%" className="displayLarge">
          <span>03</span>
          space launch 101
        </SubHeader>
      </ContainerStyled>
      <Swiper
        style={{ height: "100vh" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<h4 class="${className} vertical-bullet">${index + 1}</h4>`;
          },
        }}
        direction={"vertical"}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {technology.map((tech) => (
          <SwiperSlide key={tech.name}>
            <FlexBox properties={flexboxProperties}>
              <section>
                <header>
                  <p
                    style={{ color: "#D0D6F9" }}
                    className="subHeading2 upperCase"
                  >
                    The Terminology...
                  </p>
                  <h3 className="upperCase" style={{ color: "#ffffff" }}>
                    {tech.name}
                  </h3>
                </header>

                <p
                  className="lineHeight32 margin-x"
                  style={{ color: "#ffffff" }}
                >
                  {tech.description}
                </p>
              </section>
              <section>
                <SubHeader position="unset" className="displaySmall margin-y">
                  <ContainerStyled>
                    <span>03</span>
                    space launch 101
                  </ContainerStyled>
                </SubHeader>

                <img src={tech.images.landscape} className="displaySmall" />
                <img src={tech.images.portrait} className="displayLarge" />
              </section>
            </FlexBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </BackgroundStyled>
  );
}

export default Technology;
