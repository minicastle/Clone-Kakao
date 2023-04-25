import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Header from "../Components/Header";
import HeaderSub from "../Components/HeaderSub";
import ItemType1 from "../Components/ItemType1";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { VscArrowRight } from "react-icons/vsc";
import { BsArrowUpCircleFill } from "react-icons/bs";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import ItemType2 from "../Components/ItemType2";

const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  height: fit-content;
  position: relative;
`;
const HeadContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 1270px;
  margin-top: 100px;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1296px;
  margin-top: 30px;
`;
const ContentsRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: fit-content;
  gap: 30px;
  height: 100%;
`;
const Banner = styled.div`
  cursor: pointer;
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  box-sizing: border-box;
  max-width: 1296px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 3px 10px 0px #a1a0a0;
  padding: 60px 60px 0;
  margin: 30px 0 0 0;
  font-family: "kakaobig";
`;
const BannerTitle = styled.div`
  font-size: 40px;
  margin-bottom: 40px;
  font-weight: bold;
  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
  @media screen and (max-width: 540px) {
    font-size: 20px;
  }
`;
const BannerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  color: white;
  background-color: black;
  margin-bottom: 40px;
  & svg {
    font-size: 20px;
    font-weight: bold;
  }
`;
const BannerImage = styled.img`
  width: 70%;
  margin-bottom: 40px;
`;
const Contact = styled.div`
  cursor: pointer;
  display: flex;
  white-space: nowrap;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1296px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 5px 3px 10px 0px #a1a0a0;
  padding: 30px 40px;
  margin-top: 30px;
  font-family: "kakaobig";
  @media screen and (max-width: 681px) {
    justify-content: center;
    gap: 20px;
  }
`;
const ContactTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;
const ContactButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  & svg {
    padding: 15px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #ece9e9;
  }
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin: 40px 0;
`;
const CardContents = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  max-width: 630px;
  height: 360px;
  border-radius: 10px;
  background-color: ${(props) => {
    return props.BackgroundColor;
  }};
  position: relative;
  @media screen and (max-width: 550px) {
    height: 250px;
  }
`;
const CardTitle = styled.div`
  margin: 36px 36px;
  font-family: "kakaobig";
  font-weight: bold;
  font-size: 32px;
  max-width: 430px;
  line-height: 44px;
  max-height: 88px;
  word-break: keep-all;
  @media screen and (max-width: 710px) {
    font-size: 25px;
  }
  @media screen and (max-width: 590px) {
    font-size: 20px;
  }
  @media screen and (max-width: 510px) {
    font-size: 15px;
    line-height: 30px;
  }
`;
const CardButton = styled.div`
  margin: 30px 36px 0;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-family: "kakaosmall";
  color: white;
  background-color: black;
  & svg {
    font-size: 20px;
    font-weight: bold;
  }
  z-index: 100;
  @media screen and (max-width: 510px) {
    font-size: 12px;
    margin: 20px;
  }
`;
const CardIcons = styled.img`
  display: flex;
  height: 160px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  @media screen and (max-width: 1215px) {
    height: 100px;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const More = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  font-size: 18px;
  margin: 80px;
  background-color: #eeeeee;
  border-radius: 40px;
`;
const ToTop = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 50px;
  font-size: 50px;
`;

function TestPage({ position }) {
  const [view, setView] = useState(false);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [daily, setDaily] = useState("");
  const handleView = useCallback((e) => {
    if (!e[0].isIntersecting) {
      setView(true);
    }
    if (e[0].isIntersecting) {
      setView(false);
    }
  }, []);
  useEffect(() => {
    if (day === "" && month === "" && daily === "") {
      let date = new Date();
      let days = [
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
        "일요일",
      ];
      setMonth(date.getMonth() + 1);
      setDay(date.getDate());
      setDaily(days[date.getDay() - 1]);
    }
  }, [daily, day, month]);
  const CellDataTop = [
    {
      scale: 1,
      icon: "bodo",
      header: "보도자료",
      date: "2022.12.30",
      title:
        "카카오메이커스, ‘제가버치’ 프로젝트 X ‘배상면주가’ 콜라보 제품 출시",
      tag: ["카카오메이커스", "제가버치"],
      image:
        "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/60499ef4018500001.png?type=thumb&opt=C630x472.fwebp",
    },
    {
      scale: 1,
      icon: "bodo",
      header: "보도자료",
      date: "2022.12.30",
      title:
        "카카오, '우리동네 단골시장 프로젝트' 수료식 및 우수상인 시상식 진행",
      tag: ["우리동네단골시장", "소신상인"],
      image:
        "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/560ab850018500001.jpeg?type=thumb&opt=C630x472.fwebp",
    },
    {
      scale: 1,
      icon: "promise",
      header: "약속과 책임",
      date: "",
      title: "카카오는 당신과 함께 더 나은 세상을 만듭니다.",
      tag: ["약속과책임", "esg", "소셜임팩트"],
      image: "",
    },
    {
      scale: 1,
      icon: "promise",
      header: "약속과 책임",
      date: "",
      title: "ESG보고서, 카카오의 약속과 책임",
      tag: ["2021년생과", "ESG보고서"],
      image: "",
    },
    {
      scale: 1,
      icon: "bodo",
      header: "보도자료",
      date: "2022.12.29",
      title: "카카오, ‘1015 피해지원 협의체’와 함께 피해지원 방안 발표",
      tag: ["1015협의체", "지원방안발표"],
      image:
        "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/5c7c6024018500001.jpg?type=thumb&opt=C630x472.fwebp",
    },
    {
      scale: 1,
      icon: "bodo",
      header: "보도자료",
      date: "2022.12.30",
      title: "카카오엔터프라이즈, AI 국제 학회에서 올 한 해 총 23편 논문 발표",
      tag: ["카카오엔터프라이즈", "AI논문"],
      image:
        "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/511a81bf018500001.png?type=thumb&opt=C630x472.fwebp",
    },
  ];
  const graphData = [
    {
      scale: 1,
      icon: "jooga",
      header: "주가정보",
      date: "",
      title: "53,100",
      tag: ["2022.12.30 15:19PM"],
      image: "",
    },
  ];
  const CellDatalow = [
    {
      scale: 1,
      icon: "prodo",
      header: "고객센터",
      date: "",
      title: "어떤 서비스를 도와드릴까요?",
      tag: ["카카오", "다음", "멜론"],
      image: "",
    },
    {
      scale: 1,
      icon: "bodo",
      header: "보도자료",
      date: "2022.12.20",
      title:
        "카카오메이커스, ‘새활용’ 프로젝트로 두 번째 기부... 취약계층 어르신 대상 카디건 전달",
      tag: ["새활용프로젝트", "카디건기부"],
      image:
        "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/2cd13b38018500001.jpg?type=thumb&opt=C630x472.fwebp",
    },
    {
      scale: 1,
      icon: "shop",
      header: "카카오 프라이버시",
      date: "",
      title: "데이터의 연결과 보호의 균형을 위한 카카오의 노력",
      tag: ["카카오프라이버시"],
      image: "",
    },
  ];
  return (
    <Container>
      <HeaderSub view={view} day={day} position={position} />
      <HeadContain>
        <Header handleView={handleView} month={month} day={day} daily={daily} />
      </HeadContain>
      <Contents>
        <ContentsRow>
          <ItemType1
            scale={2}
            icon={"bodo"}
            header={"서비스복구방법"}
            tag={["카카오"]}
            title={"1015 피해 지원 방안을 안내드립니다"}
            date={""}
            image={
              "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/5e5d9835018500001.png?type=thumb&opt=C630x472.fwebp"
            }
          />
        </ContentsRow>
        <ContentsRow>
          {CellDataTop.map((value, index) => {
            if (index % 2 === 0) {
              return (
                <ItemType1
                  scale={value.scale}
                  icon={value.icon}
                  header={value.header}
                  date={value.date}
                  title={value.title}
                  tag={value.tag}
                  image={value.image}
                  kay={index}
                />
              );
            }
            return "";
          })}
        </ContentsRow>
        <ContentsRow>
          {graphData.map((value, index) => {
            return (
              <ItemType1
                scale={value.scale}
                icon={value.icon}
                header={value.header}
                date={value.date}
                title={value.title}
                tag={value.tag}
                image={value.image}
                kay={index}
              />
            );
          })}
          {CellDataTop.map((value, index) => {
            if (index % 2 !== 0) {
              return (
                <ItemType1
                  scale={value.scale}
                  icon={value.icon}
                  header={value.header}
                  date={value.date}
                  title={value.title}
                  tag={value.tag}
                  image={value.image}
                  kay={index}
                />
              );
            }
            return "";
          })}
        </ContentsRow>
      </Contents>
      <Banner>
        <BannerTitle>기술과 사람으로 더 나은 세상을 만듭니다.</BannerTitle>
        <BannerButton>
          카카오 문의바로가기 <VscArrowRight />
        </BannerButton>
        <BannerImage
          src="https://www.kakaocorp.com/page/bg_home_culture_210325.png"
          alt=""
        />
      </Banner>
      <Contact>
        <ContactTitle>카카오의 다양한 소식을 구독해보세요</ContactTitle>
        <ContactButtons>
          <RiKakaoTalkFill />
          <AiFillYoutube />
          <AiOutlineInstagram />
          <FaFacebookF />
          <AiFillLinkedin />
        </ContactButtons>
      </Contact>
      <Contents>
        <ContentsRow>
          <ItemType2
            scale={CellDatalow[0].scale}
            icon={CellDatalow[0].icon}
            header={CellDatalow[0].header}
            date={CellDatalow[0].date}
            title={CellDatalow[0].title}
            tag={CellDatalow[0].tag}
            image={CellDatalow[0].image}
          />
          <ItemType1
            scale={CellDatalow[2].scale}
            icon={CellDatalow[2].icon}
            header={CellDatalow[2].header}
            date={CellDatalow[2].date}
            title={CellDatalow[2].title}
            tag={CellDatalow[2].tag}
            image={CellDatalow[2].image}
          />
        </ContentsRow>
        <ContentsRow>
          <ItemType1
            scale={CellDatalow[1].scale}
            icon={CellDatalow[1].icon}
            header={CellDatalow[1].header}
            date={CellDatalow[1].date}
            title={CellDatalow[1].title}
            tag={CellDatalow[1].tag}
            image={CellDatalow[1].image}
          />
        </ContentsRow>
        <ContentsRow style={{ paddingBottom: "60px" }}>
          <ItemType1
            scale={2}
            icon={"bodo"}
            header={"보도자료"}
            tag={["브런치", "브런치북출판프로젝트", "브런치북", "수상작"]}
            title={"카카오,'제10회 브런치북 출판 프로젝트' 수상작 발표"}
            date={"2022.12.21"}
            image={
              "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/31e73f02018500001.png?type=thumb&opt=C630x472.fwebp"
            }
          />
        </ContentsRow>
      </Contents>
      <Cards>
        <CardContents BackgroundColor={"#fae100"}>
          <CardTitle>사람과 기술로 일상을 돕는 카카오 서비스</CardTitle>
          <CardButton>
            서비스 바로가기 <VscArrowRight />
          </CardButton>
          <CardIcons
            src="https://www.kakaocorp.com/page/bg_home_service.png"
            alt=""
          />
        </CardContents>
        <CardContents BackgroundColor={"#3c64ff"}>
          <CardTitle>
            세상만사에 관심이 많다면, 당신은 이미 카카오 크루
          </CardTitle>
          <CardButton>
            인재영입 바로가기 <VscArrowRight />
          </CardButton>
          <CardIcons
            src="https://www.kakaocorp.com/page/bg_home_recruit.png"
            alt=""
          />
        </CardContents>
      </Cards>
      <More>카카오 소식 모아보기</More>
      <ToTop
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <BsArrowUpCircleFill />
      </ToTop>
    </Container>
  );
}

export default TestPage;
