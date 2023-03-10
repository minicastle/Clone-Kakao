import React from 'react';
import styled from "@emotion/styled";
import '../Fonts.css';
import NewItem from './NewItem';
import {BsSearch, BsGlobe, BsMoon} from 'react-icons/bs';
import logo from '../kakao.png';
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
    white-space: nowrap;
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
    white-space: nowrap;
    :hover{
        color: #ffffff;
    }
`;
const Ifkakao = styled.div`
    background-color: #000000;
    color: white;
    padding: 10px 20px;
    white-space: nowrap;
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
                        ????????? 
                        <MenuContents shown={menuContain==='kakao'}>
                            <MenuContent>????????? ??????</MenuContent>
                            <MenuContent>?????????</MenuContent>
                            <MenuContent>????????????</MenuContent>
                        </MenuContents>
                    </MenuItem>
                    <MenuItem>??????</MenuItem>
                    <MenuItem onClick={()=>{handleMenu('service')}}>
                        ????????? ?????????
                        <MenuContents shown={menuContain==='service'}>
                            <MenuContent>??????</MenuContent>
                            <MenuContent>?????????</MenuContent>
                        </MenuContents>
                    </MenuItem>
                    <MenuItem onClick={()=>{handleMenu('promise')}}>
                        ????????? ??????
                        <MenuContents shown={menuContain==='promise'}>
                            <MenuContent>ESG</MenuContent>
                            <MenuContent>???????????????</MenuContent>
                            <MenuContent>????????? ??????</MenuContent>
                            <MenuContent>AI ??????</MenuContent>
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