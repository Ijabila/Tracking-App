import React, {useContext} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
    const {state: {currentLocation, locations}} = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>;
    }

    return( 
        <View>
            <MapView 
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Circle
                  center={currentLocation.coords}
                  radius={40}
                  strokeColor="rgba(4,109,207,1.0)"
                  fillColor="rgba(116,179,237,1.4)"
                />
                <Polyline coordinates={locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 350
    }
});

export default Map;