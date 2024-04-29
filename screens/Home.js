import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Linking, Dimensions, Modal } from 'react-native';
import PetDetailsForm from './PetDetailsForm';

const Home = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [petDetails, setPetDetails] = useState({
    name: '',
    age: '',
    breed: ''
  });

  const blogAds = [
    { id: 1, title: 'Balanced Nutrition for Pet Cats', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP._7wnfg043pzZQXkS-8IRwwAAAA&pid=Api&P=0&h=180', link: 'https://loveyourpet.blog/balanced-nutrition-for-pet-cats/' },
    { id: 2, title: 'Revolutionizing Animal Healthcare', imageUrl: 'http://www.healthactiv.mu/media/1042/animalcare.jpg?crop=0,0,0,0.043533517146303623&cropmode=percentage&width=448&height=492&rnd=133301989500000000', link: 'https://cureselecthealthcare.com/blog/revolutionizing-animal-healthcare-telemedicines-role-in-remote-veterinary-care' },
    { id: 3, title: 'Choco-Paws: Why Chocolate Is Dangerous For Dogs', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.tmcH5QmeZ-xuDmbO2r-R3QHaIE&pid=Api&P=0&h=180', link: 'https://www.example.com/blog3' },
    { id: 4, title: 'How It Can Enhance the Pet Ownership Experience', imageUrl: 'https://cff2.earth.com/uploads/2019/04/08191722/Dog-owners-are-happier-than-cat-owners-survey-shows.jpg', link: 'https://loveyourpet.blog/choco-paws-why-chocolate-is-dangerous-for-dogs/' },
  ];

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const navigateToPetCreation = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const savePetDetails = (details) => {
    console.log('Pet Details:', details);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.commonHeading}>Our Blog</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.blogAdsContainer}>
          {blogAds.map((ad) => (
            <TouchableOpacity key={ad.id} style={styles.blogAdContainer} onPress={() => handleLinkPress(ad.link)}>
              <Image source={{ uri: ad.imageUrl }} style={styles.blogAdImage} />
              <View style={styles.blogAdTextContainer}>
                <Text numberOfLines={2} style={styles.blogAdTitle}>{ad.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Create Pet Button */}
      <TouchableOpacity style={styles.createPetButton} onPress={navigateToPetCreation}>
        <Text style={styles.createPetButtonText}>Create your Pet profile</Text>
      </TouchableOpacity>

      {/* Modal for Pet Creation */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <PetDetailsForm
            closeModal={closeModal}
            onSave={savePetDetails}
            petDetails={petDetails}
            setPetDetails={setPetDetails}
          />
        </View>
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  commonHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
    color: '#333',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  blogAdsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: '#FFF',
  },
  blogAdContainer: {
    width: 250,
    marginRight: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  blogAdImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  blogAdTextContainer: {
    padding: 10,
  },
  blogAdTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  createPetButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  createPetButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Home;
