import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box ;
    }
    html{
        height: 100%;
    }
    body{
        background-color: transparent;
        line-height: 1.5;
        height: 100%;
    }

    h1{
        font-family: "Bellefair";
        font-size: 150px;
        font-weight: normal;
        font-weight: normal;
    }
    h2{
        font-family: "Bellefair";
        font-size: 100px;
        font-weight: normal;
    
    }
    h3{
        font-family: "Bellefair";
        font-size: 56px;
        font-weight: normal;
    }
    h4{
        font-family: "Bellefair";
        font-size: 32px;
        font-weight: normal;
    }
    h5{
        font-family: "Barlow Condensed";
        font-size: 28px;
        font-weight: normal;
        letter-spacing: 4.75;
    }
    p{
        font-family: "Barlow Condensed";
        font-size: 18px;
    }

    .lineHeight{
        &32{
            line-height: 32px;
        }
    }
    .hr {
    height: 1px;
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
  .subHeading1{
    font-family: "Bellefair";
    font-size: 28px;
  }
  .subHeading2{
    font-family: "Barlow Condensed";
    font-size: 14px;
    letter-spacing: 2.35;
  }
  .upperCase{
    text-transform: uppercase;
  }
  .margin{
    &-y{
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }
    &-r2{
        margin-right: 2rem;
    }
    
  }
  .swiper-pagination{
    background-color: transparent;
    margin-bottom: 7rem;
    display: flex;
    align-items: left;
    justify-items: left;
    gap: 0.5rem;
    overflow: visible;
    &-vertical{
        left: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        margin-left: 18rem;
        
    }
    &-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: transparent;
  
    color: ${({ theme }) => theme.colors.white};
      border: 1px solid #979797;
      opacity: 1;
      &-active {
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.white};
      }
  }
}

.vertical-bullet{
    height: 70px;
    width: 70px;
    line-height: 70px;
    margin: auto;
    text-align: center;
}

.swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical>.swiper-pagination-bullets {
    left:0;
}

.imgPos{
    height: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items:flex-end;
    justify-content: flex-end;
}


.display{
    &Large{
       display: block;
    }
    &Small{
        display: none;
    }      
    &Tablet{
        display: none;
    }      
    &Mobile{
        display: none;
    }
}    

 /* Media Query 1280px */
 @media (max-width: 1280px) {
    .swiper-pagination{
        &-vertical{
        margin-left: 8rem;
        }
    }
 }


  /* Media Query Tablet */
@media (max-width: 992px) {
    .swiper-pagination{
        margin: auto;
        align-items: center;
        justify-content: center;
        top: 0%;
        height: fit-content;
        &-vertical{
            flex-direction: row;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            margin: 5.5rem 0;
        }
    }
    .margin{
        &-y{
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
        }
        &-x{
            margin-left: 5rem;
            margin-right: 5rem;
        }
    }
    .display{
        &Large{
            display: none;
        }
        &Small{
            display: block;
        }
        &Tablet{
            display: block;
        }
    }
}

  /* Media Query Mobile */
@media (max-width: 600px) {
    h1{
        font-size: 100px;
     }
    h2{
        font-size: 56px;
     
    }
    h3{
        font-size: 24px;
     
    }
    h4{
        font-size: 16px;
     
    }
    h5{
        font-size: 16px;
        
    }
    p{
        font-size: 15px;
    }
    .margin{
        &-y{
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        &-x{
            margin-left: 1rem;
            margin-right: 1rem;
        }
        &-r2{
            margin-right: 0.5rem;
        }
    }

    .imgPos{
        height: 100%;
        bottom: none;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    
        img{
            border-width: 100%;
            border-bottom: 1px solid #979797;
        }
    }
    .swiper-pagination{
        top: 20%;
        &-bullet {
            height: 10px;
            width: 10px;
            line-height: 10px;
        }
        &-vertical{
           margin: 0;
        }
    }
    .vertical-bullet{
    height: 40px;
    width: 40px;
    line-height: 40px;
    margin: auto;
    text-align: center;
    }
    .display{
        &Tablet{
            display: none;
        }
        &Mobile{
            display: block;
        }
    }
}


`;

export default GlobalStyle;
