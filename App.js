// Import necessary modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';




import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';
import Blogs from './screens/Blogs';
import MyPets from './screens/MyPets';
import Shopping from './screens/Shopping';
import Setting from './screens/Setting';
import PetServices from './screens/PetServices';
import Appointment from './screens/Appointment';
import News from './screens/News';
import Contact from './screens/Contact';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerBackground}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://im.rediff.com/getahead/2013/oct/01m-s-dhoni-1.jpg?w=670&h=900' }}
        />
        <Text style={styles.profileName}>Ms Dhoni</Text>
        <Text style={styles.profileProfession}>Indian Cricketer </Text>
      </View>
      <DrawerItem 
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Blogs"
        onPress={() => props.navigation.navigate('Blogs')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <FontAwesome name="pencil" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Shopping"
        onPress={() => props.navigation.navigate('Shopping')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <FontAwesome name="shopping-cart" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />

      <DrawerItem
        label="PetServices"
        onPress={() => props.navigation.navigate('PetServices')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="paw" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate('Setting')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <MaterialIcons name="settings" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />

      <DrawerItem
        label="Appointment"
        onPress={() => props.navigation.navigate('Appointment')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <FontAwesome name="calendar" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />

      <DrawerItem
        label="MyPets"
        onPress={() => props.navigation.navigate('MyPets')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="dog" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />

      <DrawerItem
        label="Contact"
        onPress={() => props.navigation.navigate('Contact')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <MaterialIcons name="contacts" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />



      <DrawerItem
        label="News"
        onPress={() => props.navigation.navigate('News')}
        labelStyle={styles.drawerLabel}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="newspaper" size={size} color={color} />
        )}
        style={styles.drawerItem}
      />
<DrawerItem
  label="Sign Out"
  onPress={() => {
    // Your sign out logic here
  }}
  activeTintColor="red"
  inactiveTintColor="#000"
  labelStyle={{ ...styles.drawerLabel, color: 'red' }}
  icon={({ color, size }) => (
    <FontAwesome name="sign-out" size={size * 0.8} color="red" /> 
  )}
  style={{
    ...styles.drawerItem,
    backgroundColor: '#FFE5E5',
    borderRadius: 20,
    paddingVertical: 1, 
    paddingHorizontal: 5, 
    marginVertical: 45,
    marginHorizontal: 45, 
    borderBottomWidth: 0, 
  }}
/>









    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={CustomDrawerContent}>
    <Drawer.Screen name="Home" component={Home} options={{
            title: 'Home',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }} />
    <Drawer.Screen name="Blogs" component={Blogs} options={{
            title: 'Blogs',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }} />
    <Drawer.Screen name="Shopping" component={Shopping} options={{
            title: 'Shopping',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }}/>
    <Drawer.Screen name="PetServices" component={PetServices} options={{
            title: 'PetServices',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }} />
    <Drawer.Screen name="Setting" component={Setting} options={{
            title: 'Setting',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }}/>

    <Drawer.Screen name="MyPets" component={MyPets} options={{
            title: 'MyPets',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }}/>


    <Drawer.Screen name="Appointment" component={Appointment}options={{
            title: 'Appointment',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }} />
    <Drawer.Screen name="News" component={News} options={{
            title: 'News',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }}/>
    <Drawer.Screen name="Contact" component={Contact} options={{
            title: 'Contact',
            headerStyle: {
            backgroundColor: '#FAE086', 
            },
            headerTintColor: '#fff', 
          }} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="App" component={DrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileProfession: {
    fontSize: 16,
    color: '#777',
  },
  drawerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333', 
    textTransform: 'uppercase', 
    letterSpacing: 1, 
    marginLeft: 10, 
  },
  drawerItem: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  drawerBackground: {
    backgroundColor: '#FAE086',
  },
 
});

export default App;
