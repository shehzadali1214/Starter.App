import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
export default function HomeScreen() {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                hidden={false}
            />
            <View  className="flex-1 items-center justify-center bg-yellow-500">
                <Text style={styles.title}>Home</Text>
                <Text style={styles.body}>Welcome to the home screen.</Text>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 28, fontWeight: '700' },
    body: { fontSize: 16, color: '#666', marginTop: 8 },
});
