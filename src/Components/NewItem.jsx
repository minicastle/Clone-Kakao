import React from 'react';
import styled from '@emotion/styled';

const Icon = styled.div`
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
`;

function NewItem() {
    return (
        <Icon/>
    )
}

export default NewItem