// Imported react components for Vibrations.
import React from 'react';
import {
    Button,
    Platform,
    Text,
    Vibration, // If you are including vibrations just import this 
    View,
    SafeAreaView,
} from 'react-native';

// Import styles from AppStyles.js
import { styles } from './styles/styles_page';

// Separator component used to create space between elements
const Separator = () => {
    return <View style={Platform.OS === 'android' ? styles.separator : null} />;
};


const App = () => {
    // Constants for vibration pattern
    const ONE_SECOND_IN_MS = 1000;
    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS,
    ];

    // Description of the vibration pattern, varies by platform
    const PATTERN_DESC =
        Platform.OS === 'android'
            ? 'wait 1s, vibrate 2s, wait 3s'
            : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';

    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
            <View>
                <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
            </View>
            <Separator />
            {Platform.OS === 'android' &&
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
