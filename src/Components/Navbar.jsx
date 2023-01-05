import React from 'react';
import styled from "@emotion/styled";
import '../Fonts.css';
import NewItem from './NewItem';
import {BsSearch, BsGlobe, BsMoon} from 'react-icons/bs';
import logo from '..//kakao.png';
const Container = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 99;
    position:sticky;
    top: 0;
`;
const Contents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    font-family: 'kakaobig-bold';
    font-size: 16px;
    user-select: none;
    background-color: white;
`;
const Logo = styled.img`
    height: 50%;
    padding: 20px;
    cursor:pointer;
`;
const Menus = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    color: #000000;
    cursor:pointer;
    :hover{
        color: #888888;
    }
`;
const MenuItem = styled.li`
    padding: 0 28px;
    position: relative;
    :hover{
        color: #000000;
    }
`;
const MenuContents = styled.ul`
    ${(props)=>{return props.shown?{display:'flex'}:{display:'none'}}}
    justify-content: center;
    align-items: center;
    padding: 0 24.5px;
    gap: 20px;
    background-color: black;
    list-style: none;
    border-radius: 30px;
    position: absolute;
    bottom: -70px;
    left: 0;
`;
const MenuContent = styled.li`
    color: #eeeeee;
    white-space: nowrap;
    padding: 15px 0;
    :hover{
        color: #ffffff;
    }
`;
const Ifkakao = styled.div`
    background-color: #000000;
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    position: relative;
`;
const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size: 20px;
    cursor:pointer;
`;
const Icon = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #eeeeee;
    }
`;

function Navbar({menuContain,handleMenu}) {
    return (
        <Container>
            <Contents>
                <Logo src={logo} />
                <Menus>
                    <MenuItem onClick={()=>{handleMenu('kakao')}}>
                        카카오 
                        <MenuContents shown={menuContain==='kakao'}>
                            <MenuContent>카카오 문화</MenuContent>
                            <MenuContent>공동체</MenuContent>
                            <MenuContent>히스토리</MenuContent>
                        </MenuContents>
                    </MenuItem>
                    <MenuItem>뉴스</MenuItem>
                    <MenuItem onClick={()=>{handleMenu('service')}}>
                        기술과 서비스
                        <MenuContents shown={menuContain==='service'}>
                            <MenuContent>기술</MenuContent>
                            <MenuContent>서비스</MenuContent>
                        </MenuContents>
                    </MenuItem>
                    <MenuItem onClick={()=>{handleMenu('promise')}}>
                        약속과 책임
                        <MenuContents shown={menuContain==='promise'}>
                            <MenuContent>ESG</MenuContent>
                            <MenuContent>소셜임팩트</MenuContent>
                            <MenuContent>디지털 권리</MenuContent>
                            <MenuContent>AI 윤리</MenuContent>
                        </MenuContents>
                    </MenuItem>
                    <Ifkakao>if(kakao) 2022 <NewItem/></Ifkakao>
                </Menus>
                <Icons>
                    <Icon>
                        <BsSearch/>
                    </Icon>
                    <Icon>
                        <BsGlobe/>
                    </Icon>
                    <Icon>
                        <BsMoon/>
                    </Icon>
                </Icons>
            </Contents>
        </Container>
    )
}

export default Navbar