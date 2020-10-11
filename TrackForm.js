import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {
    const {state: {name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext);

    return <>
    <Spacer>
    <Input placeholder="Enter Track Name" onChangeText={changeName} value={name}/>
    </Spacer>

    {recording 
        ? 
        <Button style={styles.button} title="Tired? Stop now." onPress={stopRecording} /> :
        <Button style={styles.button} title="Start Recording" onPress={startRecording} />    
}
    </>
}

const styles = StyleSheet.create({
    button:{
        width: 200,
        marginLeft: 100
    }
})

export default TrackForm;