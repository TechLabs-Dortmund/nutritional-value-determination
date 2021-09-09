import { StatusBar } from 'expo-status-bar';
import React from 'react';

//formik
import { Formik } from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'; 


//colors
import {colors} from './../components/styles';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';
import { View } from 'react-native';
import { useState } from 'react';

//colors
const {brand, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyBoardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
            <KeyBoardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/Food1.jpg')}/>
                <PageTitle>Nutritional Value Determination</PageTitle>
                <SubTitle>Account Login</SubTitle>
        
                <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => {
                    console.log(values);
                    navigation.navigate("Welcome");
                }}
                > 
                {({handleChange, handleBlur, handleSubmit, values}) =>
                    (<StyledFormArea>
                    <MyTextInput
                        label="E-mail address"
                        icon="mail"
                        placeholder="velo@gmail.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        KeyboardType="e-mail address"
                    />

                    <MyTextInput
                        label="Password"
                        icon="lock"
                        placeholder="* * * * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox>...</MsgBox>

                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Login</ButtonText>
                    </StyledButton>
                    <Line/>
                    <StyledButton google={true} onPress={handleSubmit}>
                        <Fontisto name="google"  color={primary} size={25}/>
                        <ButtonText google={true}>Sign in with Google</ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText>Don't have an account already?. </ExtraText>
                        <TextLink onPress={() => navigation.navigate("Signup")}>
                            <TextLinkContent>Signup</TextLinkContent>
                        </TextLink>
                    </ExtraView>
              
                    </StyledFormArea>
                    )}
                </Formik>
                </InnerContainer>
        </StyledContainer>
        </KeyBoardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
            </RightIcon>
        )}
        </View>
    )
}
export default Login;