import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const PasswordInput = ({ value, onChangeText, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#A9A9A9"
            />
            <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
            />
        </View>
    );
};

const Setting = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const updatePassword = () => {
        // Implement password update logic here
        console.log("Old Password:", oldPassword);
        console.log("New Password:", newPassword);
        console.log("Confirm Password:", confirmPassword);
        // Reset fields after updating password
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Change Password</Text>
            <PasswordInput
                placeholder="Old Password"
                value={oldPassword}
                onChangeText={setOldPassword}
            />
            <PasswordInput
                placeholder="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <PasswordInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button title="Update Password" onPress={updatePassword} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        height: 40,
        color: '#333333',
    },
    eyeIcon: {
        padding: 10,
    },
});

export default Setting;
