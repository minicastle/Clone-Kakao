import React from 'react';
import styled from '@emotion/styled';

const Container = styled.h3`
    ${(props)=>{
        return props.view?
        {display:"flex"}:
        {display:"none"}
    }}
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    font-size: 18px;
    font-family: 'kakaobig';
    width: 100%;
    padding: 20px 0;
    user-select: none;
    background-color: white;
    position:sticky;
    top: ${(props)=>{return props.position+'px'}};
    z-index: 100;
`;
const TextLine = styled.span`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const Callendar = styled.img`
    margin-right: 10px;
    width: 40px;
`;

function HeaderSub({view,day,position=0}) {
    return (
        <Container view={view} position={position}>
            <TextLine><Callendar src={`https://www.kakaocorp.com/page/calendar/light/ico_date${day}.gif`} alt=''/> 오늘의 카카오</TextLine>
        </Container>
    )
}

export default HeaderSub