import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Homepage extends React.Component {
    render () {
        return (        
            <View>
                <Text style={styles.text}> Create an account </Text>
                <TextInput style={styles.emailInput} placeholder="type email"
                onChangeText={(email) => {
                    this.setState({email:email})
                    }}
                    value={this.setState.email}/>

                <TextInput style={styles.passwordInput} placeholder="type password"
                onChangeText={(password) => {
                this.setState({password:password})
            }}
                value={this.setState.password}/>

                <TextInput style={styles.passwordInput} placeholder="Confirm password"
                onChangeText={(password2) => {
                    this.setState({confirmPassword:password2})
                }} 
                value={this.setState.confirmPassword}/>

                
        </View>
        )
    }
}

const styles = StyleSheet.create ({
    text: {
        textAlign: 'center',
        fontSize: 18,
        margin: 14

    },
      emailInput: {
          borderWidth:1,
          padding: 10,
          margin: 5,
          width: 200
      },
      passwordInput: {
          borderWidth:1,
          padding: 10,
          margin: 5,
          width: 200
        }
    })