import React from 'react';
import styled from "@emotion/styled";
import {FiArrowUpRight} from 'react-icons/fi';
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io';
import {AiOutlinePlus,AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 1px solid #ebebeb;
    user-select: none;
    @media screen and (max-width: 1440px){
        width: 70%;
    }
`;
const Contents = styled.div`
    width: 90%;
    max-width: 1296px;
    display: flex;
    justify-content: space-between;
`;
const ContentsRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 14px;
    font-family: 'kakaosmall';
`;
const ContentsTitle = styled.div`
    cursor: pointer;
    margin-top: 25px;
    color: black;
    position: relative;
    :hover{
        &::before{
            content: '•';
            color: orange;
            scale: 1.5;
            position: absolute;
            top: -2px;
            left: -10px;
        }
    }
`;
const ContentsList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #888888;
    list-style: none;
    padding: 0;
    gap: 20px;
`;
const ContentsListItem = styled.li`
    cursor: pointer;
    :hover{
        color:#111111;
    }
`;
const Relation = styled.div`
    flex-wrap: wrap;
    margin: 80px 0 20px;
    width: 100%;
    max-width: 1296px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    color: #888888;
    font-size: 12px;
    gap: 20px;
    position: relative;
`;
const RelationList = styled.div`
    white-space: nowrap;
    cursor: pointer;
    :hover{
        color:#111111;
    }
    position: relative;
`;
const RelationItem = styled.div`
    white-space: nowrap;
    cursor: pointer;
    :hover{
        color:#111111;
    }
`;
const RelationListItems = styled.ul`
    ${(props)=>{return props.view?{display:'flex'}:{display:'none'}}}
    list-style: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    position: absolute;
    bottom:10px;
    border-radius: 10px;
    background-color: #eeeeee;
    gap: 10px;
    color: #666666;
`;
const RelationListItem = styled.li`
    white-space: nowrap;
    font-size: 12px;
    font-family: 'kakaosmall';
    :hover{
        color: black;
    }
    &::after{
        content: '↗';
    }
`;
const RelationOtherSites = styled.div`
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 100px 10px 20px;
    background-color: #eeeeee;
    color: black;
    border-radius: 20px;
    position: relative;
    & svg{
        font-size: 15px;
        position: absolute;
        right: 12px;
    }
`;
const OtherLists = styled.ul`
    ${(props)=>{return props.view?{display:'flex'}:{display:'none'}}}
    list-style: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    position: absolute;
    right: 20px;
    bottom:30px;
    border-radius: 10px;
    background-color: #eeeeee;
    gap: 10px;
    color: #666666;
`;
const OtherListItem = styled.li`
    white-space: nowrap;
    font-size: 12px;
    font-family: 'kakaosmall';
    :hover{
        color: black;
    }
    &::after{
        content: '↗';
    }
`;
const KakaoCorp = styled.div`
    display: flex;
    width: 100%;
    max-width: 1296px;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    color: #888888;
    margin: 0 0 40px;
`;

function Footer() {
    const [relationHover,setRelationHover] = useState('');
    const [relationSelect,setRelationSelect] = useState('');
    const [viewOtherSite,setViewOtherSite] = useState(false);
    return (
        <Container>
            <Contents>
                <ContentsRow>
                    <ContentsTitle>카카오</ContentsTitle>
                    <ContentsList>
                        <ContentsListItem>카카오 문화</ContentsListItem>
                        <ContentsListItem>공동체</ContentsListItem>
                        <ContentsListItem>히스토리</ContentsListItem>
                    </ContentsList>
                </ContentsRow>
                <ContentsRow>
                    <ContentsTitle>뉴스</ContentsTitle>
                </ContentsRow>
                <ContentsRow>
                    <ContentsTitle>기술과 서비스</ContentsTitle>
                    <ContentsList>
                        <ContentsListItem>기술</ContentsListItem>
                        <ContentsListItem>서비스</ContentsListItem>
                    </ContentsList>
                </ContentsRow>
                <ContentsRow>
                    <ContentsTitle>약속과 책임</ContentsTitle>
                    <ContentsList>
                        <ContentsListItem>ESG</ContentsListItem>
                        <ContentsListItem>소셜임팩트</ContentsListItem>
                        <ContentsListItem>디지털 관리</ContentsListItem>
                        <ContentsListItem>AI윤리</ContentsListItem>
                    </ContentsList>
                </ContentsRow>
                <ContentsRow>
                    <ContentsTitle>투자정보</ContentsTitle>
                    <ContentsList>
                        <ContentsListItem>기업지배구조</ContentsListItem>
                        <ContentsListItem>추가정보</ContentsListItem>
                        <ContentsListItem>재무정보</ContentsListItem>
                        <ContentsListItem>IR행사</ContentsListItem>
                        <ContentsListItem>공사정보</ContentsListItem>
                        <ContentsListItem>공고</ContentsListItem>
                    </ContentsList>
                </ContentsRow>
                <ContentsRow>
                    <ContentsTitle>고객센터</ContentsTitle>
                    <ContentsList>
                        <ContentsListItem>카카오 고객센터<FiArrowUpRight/></ContentsListItem>
                        <ContentsListItem>Daum 고객센터<FiArrowUpRight/></ContentsListItem>
                    </ContentsList>
                    <ContentsTitle>인재영입<FiArrowUpRight/></ContentsTitle>
                    <ContentsTitle>인재영입<FiArrowUpRight/></ContentsTitle>
                </ContentsRow>
            </Contents>
            <Relation>
                <RelationList 
                onMouseOver={()=>{setRelationHover('이용약관')}} 
                onMouseLeave={()=>{setRelationHover('')}}
                onClick={()=>{
                    if(relationSelect==='이용약관'){
                        setRelationSelect('');
                    }
                    else{
                        setRelationSelect('이용약관')
                    }
                }}
                >
                    이용약관 {relationHover==='이용약관'||relationSelect==='이용약관'?<IoIosArrowUp/>:<IoIosArrowDown/>}
                    <RelationListItems view={relationSelect==='이용약관'}>
                        <RelationListItem>카카오계정 서비스</RelationListItem>
                        <RelationListItem>카카오 서비스</RelationListItem>
                        <RelationListItem>Daum 서비스</RelationListItem>
                    </RelationListItems>
                </RelationList>
                <RelationList 
                onMouseOver={()=>{setRelationHover('위치기반서비스이용약관')}} 
                onMouseLeave={()=>{setRelationHover('')}}
                onClick={()=>{
                    if(relationSelect==='위치기반서비스이용약관'){
                        setRelationSelect('');
                    }
                    else{
                        setRelationSelect('위치기반서비스이용약관')
                    }
                }}
                >
                    위치기반서비스이용약관 {relationHover==='위치기반서비스이용약관'||relationSelect==='위치기반서비스이용약관'?<IoIosArrowUp/>:<IoIosArrowDown/>}
                    <RelationListItems view={relationSelect==='위치기반서비스이용약관'}>
                        <RelationListItem>카카오 서비스</RelationListItem>
                        <RelationListItem>Daum 서비스</RelationListItem>
                    </RelationListItems>
                </RelationList>
                <RelationList 
                onMouseOver={()=>{setRelationHover('개인정보처리방침')}} 
                onMouseLeave={()=>{setRelationHover('')}}
                onClick={()=>{
                    if(relationSelect==='개인정보처리방침'){
                        setRelationSelect('');
                    }
                    else{
                        setRelationSelect('개인정보처리방침')
                    }
                }}
                >
                    개인정보처리방침 {relationHover==='개인정보처리방침'||relationSelect==='개인정보처리방침'?<IoIosArrowUp/>:<IoIosArrowDown/>}
                    <RelationListItems view={relationSelect==='개인정보처리방침'}>
                        <RelationListItem>기업사이트</RelationListItem>
                        <RelationListItem>카카오 서비스</RelationListItem>
                    </RelationListItems>
                </RelationList>
                <RelationItem>운영정책</RelationItem>
                <RelationList 
                onMouseOver={()=>{setRelationHover('청소년보호정책')}} 
                onMouseLeave={()=>{setRelationHover('')}}
                onClick={()=>{
                    if(relationSelect==='청소년보호정책'){
                        setRelationSelect('');
                    }
                    else{
                        setRelationSelect('청소년보호정책')
                    }
                }}
                >
                    청소년보호정책 {relationHover==='청소년보호정책'||relationSelect==='청소년보호정책'?<IoIosArrowUp/>:<IoIosArrowDown/>}
                    <RelationListItems view={relationSelect==='청소년보호정책'}>
                        <RelationListItem>카카오 서비스</RelationListItem>
                        <RelationListItem>Daum 서비스</RelationListItem>
                    </RelationListItems>
                </RelationList>
                <RelationItem>브랜드보호정책</RelationItem>
                <RelationItem>권리침해신고안내</RelationItem>
                <RelationList 
                onMouseOver={()=>{setRelationHover('공지사항')}} 
                onMouseLeave={()=>{setRelationHover('')}}
                onClick={()=>{
                    if(relationSelect==='공지사항'){
                        setRelationSelect('');
                    }
                    else{
                        setRelationSelect('공지사항')
                    }
                }}
                >
                    공지사항 {relationHover==='공지사항'||relationSelect==='공지사항'?<IoIosArrowUp/>:<IoIosArrowDown/>}
                    <RelationListItems view={relationSelect==='공지사항'}>
                        <RelationListItem>투자정보 공지</RelationListItem>
                        <RelationListItem>카카오 서비스</RelationListItem>
                        <RelationListItem>Daum 서비스</RelationListItem>
                    </RelationListItems>
                </RelationList>
                <RelationItem>사이버윤리</RelationItem>
                <RelationItem>Contact Us</RelationItem>
                {
                    viewOtherSite?
                    <RelationOtherSites onClick={()=>{setViewOtherSite(false)}}>관련사이트 <AiOutlineClose animate={viewOtherSite}/>
                        <OtherLists view={viewOtherSite}>
                            <OtherListItem>카카오 AI</OtherListItem>
                            <OtherListItem>카카오 프라이버시</OtherListItem>
                            <OtherListItem>카카오 디벨로퍼스</OtherListItem>
                            <OtherListItem>다음 포털 사이트</OtherListItem>
                            <OtherListItem>동반 성장 사이트</OtherListItem>
                            <OtherListItem>제주 with kakao</OtherListItem>
                        </OtherLists>
                    </RelationOtherSites>:
                    <RelationOtherSites onClick={()=>{setViewOtherSite(true)}}>관련사이트 <AiOutlinePlus/></RelationOtherSites>
                }
            </Relation>
            <KakaoCorp>© Kakao Corp. All rights reserved.</KakaoCorp>
        </Container>
    )
}

export default Footer