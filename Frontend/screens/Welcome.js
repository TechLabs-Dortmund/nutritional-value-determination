import React from 'react';
import { StatusBar } from 'expo-status-bar';



//colors
import {colors} from './../components/styles';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';


const Welcome = ({navigation}) => {


    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                    <WelcomeImage resizeMode="cover" source={require('./../assets/img/Food2.jpg')}/>
                <WelcomeContainer> 
                <PageTitle Welcome={true}>Welcome!</PageTitle>
                <SubTitle Welcome={true}>Kent Mousafa</SubTitle>
                <SubTitle Welcome={true}>KentMousafa@gmail.com</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/img/Food1.jpg')}/>

                    <Line/>

                    <StyledButton onPress={() => {navigation.navigate('Login')}}>
                        <ButtonText>Logout</ButtonText>
                    </StyledButton>
 
                    </StyledFormArea>
                </WelcomeContainer>
                </InnerContainer>
        </>
    );
};


export default Welcome;