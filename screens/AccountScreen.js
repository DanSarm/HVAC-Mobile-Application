import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';

import { 
  useFonts,
  SourceSansPro_200ExtraLight,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro'


const AccountScreen = ({navigation}) => {

    let [fontsLoaded, error] = useFonts({
        SourceSansPro_400Regular,
        SourceSansPro_200ExtraLight,
        SourceSansPro_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={styles.screenTitle}>Account</Text>
            <Spacer />
            <Spacer />
            <TouchableOpacity style={styles.buttons}>
                <FontAwesome5 style={styles.icon} name="clock" size={32} color="black" />
                <Text style={styles.buttonText}>Work Hours</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('customers')}>
                <MaterialIcons style={{marginLeft: 17}} name="person-add" size={32} color="black" />
                <Text style={{fontSize: 20, paddingTop: 5, paddingLeft: 10, fontFamily: 'SourceSansPro_400Regular'}}>Customers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <FontAwesome5 style={{marginLeft: 19}} name="file-invoice" size={32} color="black" />
                <Text style={{fontSize: 20, paddingTop: 5, paddingLeft: 16, fontFamily: 'SourceSansPro_400Regular'}}>Invoices</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Ionicons style={{marginLeft: 17}} name="create" size={32} color="black" />
                <Text style={{fontSize: 20, paddingTop: 5, paddingLeft: 10, fontFamily: 'SourceSansPro_400Regular'}}>Estimates</Text>
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity onPress={signout}>
                <Text style={styles.logOutText}>Log Out</Text>
            </TouchableOpacity>
        </SafeAreaView> 
    );
};

AccountScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 35,
        marginLeft: 20,
        marginTop: 30, 
        fontFamily: 'SourceSansPro_700Bold'
    },
    buttons: {
        flexDirection: 'row',
        paddingBottom: 25
    },
    icon: {
        marginLeft: 15
    },
    buttonText: {
        fontSize: 20,
        paddingTop: 5,
        paddingLeft: 11,
        fontFamily: 'SourceSansPro_400Regular'
    },
    logOutText: {
        color: '#4287f5',
        fontSize: 22,
        marginLeft: 20,
        fontFamily: 'SourceSansPro_700Bold'
    },
});

export default AccountScreen;
