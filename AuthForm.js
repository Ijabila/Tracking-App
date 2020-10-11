import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Spacer from './Spacer';


const AuthForm = ({headerText, errorMessage, onSubmit, submitText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h2 style={styles.h2}>{headerText}</Text></Spacer>
            <Spacer />
                <View style={styles.row}>
                    <Input 
                        label="Email" 
                        style={styles.input} 
                        value={email} 
                        onChangeText={setEmail} 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                    />
                    <MaterialCommunityIcons 
                        name="email-outline" 
                        size={24} color="black" 
                        style={styles.icon}
                    />
                </View>

                <View style={styles.row}>
                    <Input 
                        label="Password" 
                        style={styles.input} 
                        value={password} 
                        onChangeText={setPassword} 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        secureTextEntry={true}
                    />
                    <Feather 
                        name="lock" 
                        size={24} 
                        color="black" 
                        style={styles.icon}
                    />
                </View>
                {errorMessage ? (<Text style={styles.errorMessage}>{errorMessage}</Text>) : null}
            <Spacer>
                <Button 
                    title={submitText} 
                    onPress={() => onSubmit({email, password})} 
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    link: {
        color: '#0071c7',
        marginLeft: 65
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 70,
        marginTop: -2
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 250
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    icon: {
        marginLeft: -100,
        marginRight: 6
    }
});

export default AuthForm;