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
    TextLinkContent,
} from './../components/styles';
import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

//colors
const {brand, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyBoardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';


//DateTime picker
import DateTimePicker from '@react-native-community/datetimepicker';
import { onChange } from 'react-native-reanimated';

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

// Actual date of birth to be sent
const [dob, setDob] = useState();

const onChange = (event,selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
}

const showDatePicker = () => {
    setShow(true);
}

    return (
        
        <KeyBoardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Nutritional Value Determination</PageTitle>
                <SubTitle>Account Signup</SubTitle>

                {show && (
                    <DateTimePicker
                    testID='dateTimePicker'
                    value={date} 
                    mode={date}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
        
                <Formik
                initialValues={{fullName: '', dateOfBirth: '', password: '', confirmPassword: '' }}
                onSubmit={(values) => {
                    console.log(values);
                    navigation.navigate('Welcome');
                }}
                > 
                {({handleChange, handleBlur, handleSubmit, values}) =>
                    (<StyledFormArea>
                    <MyTextInput
                        label="Full name"
                        icon="person"
                        placeholder="Steve Clark"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                    />

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
                label="Date of birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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

                    <MyTextInput
                    label="Confirm Password"
                    icon="lock"
                    placeholder="* * * * * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                />

                    <MsgBox>...</MsgBox>

                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Signup</ButtonText>
                    </StyledButton>
                    <Line/>
                    <ExtraView>
                        <ExtraText>Already have an account? </ExtraText>                        
                      
                <TextLink onPress={() => navigation.navigate('Login')}>
                 <TextLinkContent>Login</TextLinkContent>
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

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        {!isDate && <StyledTextInput {... props}/>}
        {isDate && <TouchableOpacity onPress={showDatePicker}>
            <StyledTextInput {...props} />
            </TouchableOpacity>
        }
        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
            </RightIcon>
        )}
        </View>
    )
}
export default Signup; 