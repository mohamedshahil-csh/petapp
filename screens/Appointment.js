import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Button, Animated, Easing } from "react-native";
import { Calendar } from "react-native-calendars";
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';

const Appointment = () => {
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointments, setSelectedAppointments] = useState([]);
    const scaleValue = useState(new Animated.Value(0))[0];
    const [selectedTab, setSelectedTab] = useState(null);
    const [hasAppointments, setHasAppointments] = useState(false);

    useEffect(() => {
        // Simulating fetching appointments from an API
        const fetchAppointments = () => {
            // Replace this with your actual API call
            setTimeout(() => {
                const mockAppointments = [
                    // { id: 1, date: '2024-05-01', time: '09:00 AM', status: 'past' },
                    // { id: 2, date: '2024-05-02', time: '10:00 AM', status: 'present' },
                    // { id: 3, date: '2024-05-03', time: '11:00 AM', status: 'future' },
                ];
                setAppointments(mockAppointments);
                setHasAppointments(mockAppointments.length > 0);
            }, 1000);
        };
        fetchAppointments();
    }, []);

    const renderAppointmentItem = ({ item }) => {
        return (
            <View style={styles.appointmentItem}>
                <Text>{item.date} - {item.time}</Text>
            </View>
        );
    };

    const showAppointments = (status) => {
        const filteredAppointments = appointments.filter(appointment => appointment.status === status);
        setSelectedAppointments(filteredAppointments);
        animateModal();
        setSelectedTab(status); // Set the selected tab
    };

    const animateModal = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true
        }).start();
        setShowModal(true);
    };

    const bookAppointment = () => {
        // Implement booking logic here
        // For demonstration, let's just close the modal
        setShowModal(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    onPress={() => showAppointments('past')}
                    style={[styles.button, selectedTab === 'past' && styles.selectedButton]}
                >
                    <Text style={[styles.buttonText, selectedTab === 'past' && styles.selectedButtonText]}>Past</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => showAppointments('present')}
                    style={[styles.button, selectedTab === 'present' && styles.selectedButton]}
                >
                    <Text style={[styles.buttonText, selectedTab === 'present' && styles.selectedButtonText]}>Future</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => showAppointments('future')}
                    style={[styles.button, selectedTab === 'future' && styles.selectedButton]}
                >
                    <Text style={[styles.buttonText, selectedTab === 'future' && styles.selectedButtonText]}>Canceled</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent={true} visible={showModal} animationType="slide">
                <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {selectedTab === 'past' && appointments.filter(appointment => appointment.status === 'past').length > 0 ? (
                        <FlatList
                            data={selectedAppointments}
                            renderItem={renderAppointmentItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    ) : selectedTab === 'past' ? (
                        <View style={styles.noDataContainer}>
                            <LottieView
                                source={require('../animation/nodatafoundpet.json')}
                                autoPlay
                                loop
                                style={styles.lottieAnimation}
                            />
                            <Text style={styles.noDataText}>No past appointments found</Text>
                        </View>
                    ) : null}
                    {selectedTab === 'present' && appointments.filter(appointment => appointment.status === 'present').length > 0 ? (
                        <FlatList
                            data={selectedAppointments}
                            renderItem={renderAppointmentItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    ) : selectedTab === 'present' ? (
                        <View style={styles.noDataContainer}>
                            <LottieView
                                source={require('../animation/nodatafoundpet.json')}
                                autoPlay
                                loop
                                style={styles.lottieAnimation}
                            />
                            <Text style={styles.noDataText}>No future appointments found</Text>
                        </View>
                    ) : null}
                    {selectedTab === 'future' && appointments.filter(appointment => appointment.status === 'future').length > 0 ? (
                        <FlatList
                            data={selectedAppointments}
                            renderItem={renderAppointmentItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    ) : selectedTab === 'future' ? (
                        <View style={styles.noDataContainer}>
                            <LottieView
                                source={require('../animation/nodatafoundpet.json')}
                                autoPlay
                                loop
                                style={styles.lottieAnimation}
                            />
                            <Text style={styles.noDataText}>No canceled appointments found</Text>
                        </View>
                    ) : null}
                    <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
                        <Ionicons name="close-circle" size={24} color="black" />
                    </TouchableOpacity>
                </Animated.View>
            </Modal>


            <Button title="Book Appointment" onPress={bookAppointment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-around', // Change to 'space-around'
        marginBottom: 20,
    },

    button: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    selectedButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#e30796',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    selectedButtonText: {
        color: '#e30796',
        fontWeight: 'bold',
    },
    modalContainer: {
        backgroundColor: 'white',
        margin: 50,
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    closeButtonText: {
        color: 'black',
        fontSize: 16,
    },
    appointmentItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    noDataContainer: {
        alignItems: 'center',
    },
    lottieAnimation: {
        width: 100,
        height: 100,
    },
    noDataText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666666',
    },
});

export default Appointment;
