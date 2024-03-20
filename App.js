//Authors  Irah, Van, Nate, Robee
// Date 2024-03-19
//This is a Vibration App 

import React from 'react';
import {
    Button, 
    Platform, // Platform module to detect the OS (iOS or Android) the app is running on
    Text, 
    Vibration, // Vibration API to control the device's vibration
    View, 
    SafeAreaView, // SafeAreaView component to render content within the safe area boundaries of a device
} from 'react-native';

// Import custom styles from your style page you name
import { styles } from './styles/styles_page';

// Separator component to add space between buttons or sections. Uses conditional styling for Android
const Separator = () => {
    return <View style={Platform.OS === 'android' ? styles.separator : null} />;
};


const App = () => {
    // Constants that defines the pattern and duration for vibration
    const ONE_SECOND_IN_MS = 1000; // Base unit for vibration duration
    const PATTERN = [ // Array defining the vibration pattern: vibrate, pause, vibrate, etc
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS,
    ];

    // Description of the vibration pattern, differs based on the platform (iOS or Android) see react native for info
    const PATTERN_DESC = Platform.OS === 'android'
        ? 'wait 1s, vibrate 2s, wait 3s' // Android allows specifying durations
        : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s'; // iOS pattern description

        // Use either or of your choice on what device you are using


    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
            <View>
                <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
            </View>
            <Separator />
            {Platform.OS === 'android' && // Conditionally render for Android specific features.
                [<View>
                    <Button
                        title="Vibrate for 10 seconds"
                        onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
                    />
                </View>,
                <Separator />]}
            <Text style={styles.paragraph}>Pattern: {PATTERN_DESC}</Text>
            <Button
                title="Vibrate with pattern"
                onPress={() => Vibration.vibrate(PATTERN)}
            />
            <Separator />
            <Button
                title="Vibrate with pattern until cancelled"
                onPress={() => Vibration.vibrate(PATTERN, true)}
            />
            <Separator />
            <Button
                title="Stop vibration pattern"
                onPress={() => Vibration.cancel()}
                color="#FF0000"
            />
        </SafeAreaView>
    );
};


export default App;
