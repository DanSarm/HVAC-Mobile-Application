import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Database
import * as firebase from 'firebase';
import 'firebase/firestore';  

import { FontAwesome5, Ionicons } from '@expo/vector-icons'; 

//Home
import IndexScreen from './src/screens/IndexScreen';

//Work Orders
import WorkOrdersScreen from './src/screens/WorkOrdersScreen';
import EstimateScreen from './src/screens/EstimateScreen';
import InvoiceScreen from './src/screens/InvoiceScreen';
import CreateWorkOrderScreen from './src/screens/CreateWorkOrderScreen';
import ExistingCustomerScreen from './src/screens/ExistingCustomerScreen';
import NewCustomers from './src/screens/NewCustomers';

// Schedule
import scheduleScreen from './src/screens/scheduleScreen'

// Account Information
import AccountScreen from './src/screens/AccountScreen';
import CustomersListing from './src/screens/CustomersListing'

// SignIn
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const workOrdersFlow = createStackNavigator( {
  workOrders: WorkOrdersScreen,
  invoice: InvoiceScreen,
  estimate: EstimateScreen,
  CreateWorkOrder: CreateWorkOrderScreen,
  existing: ExistingCustomerScreen,
  new: NewCustomers
});

const accountsFlow = createStackNavigator( {
  accountScreen: AccountScreen,
  customers: CustomersListing
});

// Tab Customization
accountsFlow.navigationOptions = {
  tabBarIcon: <Ionicons name="person" size={24} color="white" />,
};

workOrdersFlow.navigationOptions = {
  tabBarIcon: <FontAwesome5 name="wrench" size={24} color="white" />,
};

// FLOWS
const switchNavigator = createSwitchNavigator({
  ResolveAuthScreen: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  userMainFlow: createBottomTabNavigator({
    Home: IndexScreen,
    workOrdersFlow,
    accountsFlow
  }, {
    tabBarOptions: {
      inactiveTintColor: 'white',
      showLabel: false,
      style: {
        backgroundColor: 'white',
        size: 40
      },
      tabStyle: {
        backgroundColor: '#0a1d3d',
        borderTopWidth: 2,
        borderTopColor: 'black',
      }
    }
  }),
  adminMainFlow: createBottomTabNavigator({
    Home: IndexScreen,
    workOrdersFlow,
    Schedule: scheduleScreen,
    accountsFlow
  }, {
    tabBarOptions: {
      inactiveTintColor: 'white',
      showLabel: false,
      style: {
        backgroundColor: 'white',
        size: 40
      },
      tabStyle: {
        backgroundColor: '#0a1d3d',
        borderTopWidth: 2,
        borderTopColor: 'black',
      },
    }
  })
});

const App = createAppContainer(switchNavigator);

const firebaseConfig = {
        apiKey: "AIzaSyC78y9YonlwIKWlYbAoJEw-fCycymzHOwo",
        authDomain: "hvac-software.firebaseapp.com",
        projectId: "hvac-software",
        storageBucket: "hvac-software.appspot.com",
        messagingSenderId: "214361770794",
        appId: "1:214361770794:web:6d6ef23bb8c41ef35bec53",
        measurementId: "G-YPR1N2VQPT"
    };

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  
  return (
    <AuthProvider>
      <App ref={(navigator ) => { setNavigator( navigator) }} />
    </AuthProvider>
  );
};
