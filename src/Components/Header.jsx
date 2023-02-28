import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Container = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    font-size: 46px;
    font-family: 'kakaobig';
    width: 100%;
    margin-top: 0px;
    user-select: none;
`;
const TextLine = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const Callendar = styled.img`
    margin-right: 10px;
    width: 70px;
`;

function Header({handleView,view,month,day,daily}) {
    const viewRef = useRef();
    useEffect(()=>{
        let {current} = viewRef;
        if(current){
            let observer = new IntersectionObserver(handleView,{rootMargin:"-60px",threshold:1});
            observer.observe(current);
            return ()=>{observer&&observer.disconnect()};
        }
    },[handleView])
    return (
        <Container ref={viewRef}>
            <TextLine><Callendar src={`https://www.kakaocorp.com/page/calendar/light/ico_date${day}.gif`} alt=''/> 오늘의 카카오</TextLine>
            <TextLine>{month}월 {day}일 {daily} 소식입니다.</TextLine>
        </Container>
    )
}

export default Header