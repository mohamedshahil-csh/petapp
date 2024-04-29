import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const News = () => {
  const navigation = useNavigation();
  const radius = 20;
  const deviceWidth = Math.round(Dimensions.get('window').width);

  const news = [
    {
      id: '1',
      title: 'Top 10 Best Health Tech Startups – 2022',
      subhead: 'The top 10 health tech startups to watch for, in this month\'s edition of SiliconIndia startup magazine.',
      image: require('../../petapp/assets/10-best-health-tech-startups-2022-1076x743.png'),
      url: 'https://cureselecthealthcare.com/news/petsync',
    },
    {
      id: '2',
      title: 'A Smart Move to Connect Patients with their own Doctors',
      subhead: ' Our platform helped players and delegates from various countries connect to their doctors back home.',
      image: require('../../petapp/assets/news1.jpeg'),
      url: 'https://example.com/news2',
    },
    {
      id: '3',
      title: 'PetSync',
      subhead: 'The One-stop destination for all your pet needs.  ',
      image: require('../../petapp/assets/petsync.png'),
      url: 'https://cureselecthealthcare.com/news/petsync',
    },
    {
      id: '4',
      title: 'South India Chamber Of Commerce & Industry Award',
      subhead: 'CureSelect Healthcare was invited to participate in the SICCI annual awards ceremony.',
      image: require('../../petapp/assets/south-india-chamber-of-commerce-industry-award3 (1).jpg'),
      url: 'https://example.com/news2',
    },
    {
      id: '6',
      title: ' Hyatt Pet Event',
      subhead: 'Connecting with Pet Lovers: Our Experience at the Hyatt Pet Carnival!',
      image: require('../../petapp/assets/hyatt-pet-event-5.jpg'),
      url: 'https://example.com/news2',
    },


  ];

  const handleItemClick = (item) => {
    navigation.navigate('WebView', { url: item.url });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
  onPress={() => handleItemClick(item)}
  activeOpacity={0.8} // Adjust the opacity value as needed
  style={styles.touchableOpacity}
>
  <View style={styles.cardContainer}>
    <Image style={styles.imageStyle} source={item.image} />
    <View style={styles.infoStyle}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.subHeadText}>{item.subhead}</Text>
    </View>
  </View>
</TouchableOpacity>

  );

  return (
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    borderRadius: 20,
    overflow: 'hidden', // This is important to clip the border radius
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 220,
    top:10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    elevation: 9,
    shadowRadius: 5,
    marginBottom: 20,
  },
  imageStyle: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 0.9,
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 16,
    color:'#001154',
    fontWeight: '800',
  },
  subHeadText: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default News;
