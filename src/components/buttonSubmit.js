import React from 'react';
import styled from 'styled-components';

const ButtonSubmit = styled.input.attrs((props) => ({
    text: "submit"
}))`
    padding: 6px 20px;
    display: block;
    border: none;
    margin: 10px auto;
    background: #f45177;
    color: #fff;
    font-family: 'IranSanse';
    outline: none;
    border-radius: 8px;
    cursor: pointer;
`

export default ButtonSubmit;