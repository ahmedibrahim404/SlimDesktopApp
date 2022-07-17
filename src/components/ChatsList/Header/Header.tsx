import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components"
import { AiOutlineHome, AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai';
import { IoCreateOutline } from 'react-icons/io5';
import { api } from '@rocket.chat/sdk';
import { getUsernameFromID } from "../../../util/user.util";
import ProfileImage from "../../main/ProfileImage/ProfileImage";
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid #FFF;
    padding:8px 0px 8px 15px;
`

const ImageContainer = styled.div`
    flex:9;
`
const IconsContainer = styled.div`
    flex:5;
    display: flex;
    align-items: end;
    justify-content: flex-end;
`
const Icon = styled.div`
    flex:1;
    margin-left: 3px;
    cursor: pointer;
`

function Header() {
    const [username, setUsername] = useState<string | undefined>();

    const getUsername = async () => {
        setUsername(await getUsernameFromID(api.currentLogin?.userId));
    }

    useEffect(() => {
        getUsername();
    }, []);

    return (
    <Container>
        <ImageContainer>
            <ProfileImage username={username} size={"large"} />
        </ImageContainer>
        <IconsContainer>
            <Icon><AiOutlineHome style={{color: '#FFF', fontSize:'18px'}} /></Icon>
            <Icon><AiOutlineSearch style={{color: '#FFF', fontSize:'18px'}} /></Icon>
            <Icon><AiOutlineGlobal style={{color: '#FFF', fontSize:'18px'}} /></Icon>
            <Icon><IoCreateOutline style={{color: '#FFF', fontSize:'18px'}} /></Icon>
        </IconsContainer>
    </Container>
    );
}

export default hot(Header);
