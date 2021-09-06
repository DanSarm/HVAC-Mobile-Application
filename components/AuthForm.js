// Email and Password Input
// Send Email and Password to SigninScreen.js

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
            <Text style={styles.logo}>{headerText}</Text>
            </Spacer>
        <View style={styles.inputLabel}>
            <TextInput 
                style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#003f5c"
                value={email} 
                onChangeText={setEmail} 
                autoCapitalize='none' 
                autoCorrect={false}
            />
        </View>
        <View style={styles.inputLabel}>
            <TextInput 
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                value={password} 
                onChangeText={setPassword} 
                autoCapitalize='none' 
                autoCorrect={false} 
                secureTextEntry
            />
        </View>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.signUpBtn} onPress={() => onSubmit({ email, password })}>
                <Text style={styles.signUpText}>{submitButtonText}</Text>
            </TouchableOpacity>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red'
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#045c85",
        marginBottom:40
    },
    signUpBtn:{
        width:"80%",
        backgroundColor:"#045c85",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    signUpText:{
        color:"white"
    },
    inputLabel: {
        width:"80%",
        backgroundColor:"#d9d9d9",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    errorMessage: {
        fontSize: 16,
        color: 'red'
    },
    link: {
        color: 'blue'
    },
    inputText:{
        height:50,
        color:"black"
    },
});

export default AuthForm;
