import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableHighlight } from 'react-native';

const PetDetailsForm = ({ closeModal, onSave, petDetails, setPetDetails }) => {
  const savePetDetails = () => {
    onSave(petDetails);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pet Details</Text>
      <View style={styles.formGroup}>
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={[styles.input, styles.textInput]}
              placeholder="Enter pet name"
              value={petDetails.name}
              onChangeText={(text) => setPetDetails({ ...petDetails, name: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={[styles.input, styles.textInput]}
              placeholder="Enter pet age"
              value={petDetails.age}
              onChangeText={(text) => setPetDetails({ ...petDetails, age: text })}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.saveButton}
          underlayColor="#3282b8"
          onPress={savePetDetails}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.cancelButton}
          underlayColor="#d81159"
          onPress={closeModal}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '48%',
  },
  saveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#fafafa',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default PetDetailsForm;
