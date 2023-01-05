import React from 'react';
import styled from '@emotion/styled';
import {BsThreeDotsVertical} from 'react-icons/bs';

const Container = styled.div`
    cursor: pointer;
    display: block;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 3px 10px 0px #a1a0a0;
    ${(props)=>{return props.scale===1?{width:"297px"}:props.scale===2?{width:"630px",position:"sticky",top:100}:""}}
    :hover{
        animation: scaler 0.2s linear;
        scale: 1.01;
        box-shadow: 3px 3px 15px 0px #a1a0a0;
    }
    @keyframes scaler {
        0%{
            scale: 1;
        }
        100%{
            scale: 1.01;
        }
    }
`;
const Contents = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
    font-family: 'kakaobig';
    position: relative;
`;
const InfoItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 20px 0 10px 20px;
`;
const InfoIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const InfoIconImage = styled.div`
    ${(props)=>{
        if(props.icon === 'bodo'){
            return {backgroundImage:"url('https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72.fwebp')"};
        }
        if(props.icon === 'jooga'){
            return {backgroundImage:"url('https://www.kakaocorp.com/page/ico_stock.png')"};
        }
        if(props.icon === 'promise'){
            return {backgroundImage:"url('https://www.kakaocorp.com/page/ico_responsible.png')"};
        }
        if(props.icon === 'prodo'){
            return {backgroundImage:"url('https://www.kakaocorp.com/page/ico_customer.png')"}
        }
        if(props.icon === 'shop'){
            return {backgroundImage:"url('https://www.kakaocorp.com/page/ico_privacy.png')"}
        } 
    }}
    background-size: cover;
    width: 36px;
    height: 36px;
`;
const InfoIconTag = styled.div`
    position: relative;
    margin: 5px;
    padding: 8px 10px;
    width: fit-content;
    height: fit-content;
    background-color: #eeeeee;
    color: black;
    border-radius: 10px;
    z-index: 1;
    &::before{
        z-index: -1;
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0px;
        left: -6px;
        color: #eeeeee;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M0 0c3.003 2.178 4.963 5.706 4.961 9.699V18H18C18 8.059 9.941 0 0 0' fill='%23eee' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
`;
const InfoDate = styled.div`
    font-family: 'kakaosmall';
`;
const Title = styled.div`
    display: -webkit-box;
    font-weight: bold;
    padding: 0 18px;
    overflow: hidden;
    max-height: 64px;
    line-height: 32px;
    font-size: 22px;
    ${(props)=>{
        if(props.font==='jooga'){
            return {fontSize:"40px",fontWeight:'normal',lineHeight:"40px"}
        }
    }}
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;
const Dots = styled.div`
    position: absolute;
    top: 25px;
    right: 4px;
    font-size: 22px;
    color: #bbb;
`;
const TagContain = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0;
    padding: 0 10px;
`;
const Tag = styled.span`
    color: #666666;
    padding: 5px;
    font-size: 13px;
    font-family: 'kakaosmall';
`;
const ImageView = styled.img`
    width: 100%;
    border-radius: 0 0 10px 10px;
`;

function ItemType1({
    scale=1,
    icon='No Data icon',
    header='No Data header',
    tag=['No Data'],
    title='No Data title',
    date='No Data date',
    image='No Data image'
}) {
    return (
        <Container scale={scale}>
            <Contents>
                <InfoItem>
                    <InfoIcons>
                        <InfoIconImage icon={icon}/>
                        <InfoIconTag>
                            {header}
                        </InfoIconTag>
                    </InfoIcons>
                    <InfoDate>{date}</InfoDate>
                </InfoItem>
                <Title font={icon}>{title}</Title>
                <Dots>
                    <BsThreeDotsVertical/>
                </Dots>
            </Contents>
            <TagContain>
                {tag.map((value,index)=>{return <Tag key={index}>#{value}</Tag>})}
            </TagContain>
            {image==='image none'||image===''?"":<ImageView src={image} alt=""/>}
        </Container>
    )
}

export default ItemType1