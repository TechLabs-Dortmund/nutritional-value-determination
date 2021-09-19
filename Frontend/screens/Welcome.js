import React from 'react';
import { StatusBar } from 'expo-status-bar'
import CameraComponent from './CameraComponent';


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
                <SubTitle Welcome={true}>Velo Razakamaharavo</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/img/Food1.jpg')}/>
                    <Line/>
 
                    </StyledFormArea>
                </WelcomeContainer>

                <CameraComponent/>

                <StyledButton onPress={() => {navigation.navigate('Login')}}>
                <ButtonText>Logout</ButtonText>
            </StyledButton>

                </InnerContainer>
        </>
    );
};


export default Welcome;