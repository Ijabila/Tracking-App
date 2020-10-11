import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text>Track List Screen</Text>
            <Button title="Track detail" onPress={() => navigation.navigate('TrackDetail')} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default TrackListScreen;