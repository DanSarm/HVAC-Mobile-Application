// Controls SignIN and ERRORS
import firebase from 'firebase';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        // Display error message
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: ''};

        case 'signin':
            return { errorMessage: '', token: action.payload }; 
        case 'signout':
            return { token: null, errorMessage: ''};
        default: 
            return state;
    }
};

// Save last user / login automatically
const tryLocalSignin = () => () => {
        firebase.auth()
        .onAuthStateChanged(user => {
          if (user) {
            if(user.email == "admin@user.com"){
                navigate('adminMainFlow')
            } else {
            navigate('userMainFlow');
            }
          } else {
              navigate('loginFlow')
          }
        })
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'});
};

// Check email and password
// Check if user is an admin or normal user
const signin = (dispatch) => ({ email, password }) => {
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            if(email == "admin@user.com"){
                navigate('adminMainFlow')
            } else {
            navigate('mainFlow');
            }
        })
        .catch (error => {
            dispatch({ 
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            });
    });
    }

// return to login menu
const signout = () => async () => {
    firebase.auth()
        .signOut()
        .then(() => navigate('loginFlow'));
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);
