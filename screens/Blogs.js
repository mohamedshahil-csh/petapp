import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Blog = ({ navigation }) => {
  const blogs = [
    { id: 1, title: 'Blog 1', content: 'Content of Blog 1', imageUrl: 'https://cureselecthealthcare.com/assets/images/blog/pexels-photo-4021809.jpeg' },
    { id: 2, title: 'Blog 2', content: 'Content of Blog 2', imageUrl: 'https://cureselecthealthcare.com/assets/images/blog/10-things-ems-providers-need-to-know-about-telehealth-profile.jpg' },
    { id: 3, title: 'Addressing Maternal Mortality', content: 'Addressing Maternal Mortality in India: The Role of Telemedicine and Remote Monitoring', imageUrl: 'https://cureselecthealthcare.com/assets/images/blog/addressing-maternal-mortality-in-india-the-role-of-telemedicine-and-remote-monitoring-profile.jpg' },
    { id: 4, title: 'Blog 1', content: 'Content of Blog 1', imageUrl: 'https://cureselecthealthcare.com/assets/images/blog/pexels-photo-4021809.jpeg' },
    { id: 5, title: 'Blog 2', content: 'Content of Blog 2', imageUrl: 'https://cureselecthealthcare.com/assets/images/blog/10-things-ems-providers-need-to-know-about-telehealth-profile.jpg' },
    { id: 6, title: 'Addressing Maternal Mortality', content: 'Addressing Maternal Mortality in India: The Role of Telemedicine and Remote Monitoring', imageUrl: 'https://cureselecthealthcare.com/assets/images/blog/addressing-maternal-mortality-in-india-the-role-of-telemedicine-and-remote-monitoring-profile.jpg' },
  
  ];

  const renderBlog = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BlogDetails', { id: item.id })}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={blogs}
      renderItem={renderBlog}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"#030173"
  
  },
  content: {
    fontSize: 16,
    top:10
  },
});

export default Blog;
