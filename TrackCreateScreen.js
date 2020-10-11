import '../mockLocation';
import React,  {useContext, useCallback} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
    const {addLocation, state: {recording}} = useContext(LocationContext);
    const callback = useCallback (location => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);
    
    return (
        <View>
            <SafeAreaView forceInset={{top: 'always'}}>
                <Text h2>Create a New Track</Text>
                <Map />
                {err ? <Text style={styles.error}>Please allow access to location services</Text> : null}
                <TrackForm />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        fontSize: 16,
        color: 'red',
        marginLeft: 70,
        marginTop: -2,
        marginTop: 5
    }
});

export default withNavigationFocus(TrackCreateScreen);