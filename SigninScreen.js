import React, {useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign In To Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitText="Sign In"
            />
            <NavLink 
                text="Don't have an accounnt? Sign Up instead."
                routeName="Signup"
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
});

export default SigninScreen;