import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import Home from './screens/Home';
import Timer from './screens/Timer';
import Categories from './screens/Categories';
import Customize from './screens/Customize';
import Setting from './screens/Setting';
import Backups from './screens/Backups';
import GetPremium from './screens/GetPremium';
import RateApp from './screens/RateApp';
import Contact from './screens/Contact';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerContent={
        (
          (props) => {
            return (
              <SafeAreaView>
                <View 
                 style={{
                  height: 200,
                  width: '100%',
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#f4f4f4",
                  borderBottomWidth: 1,
                 }}
                 > 
                 <Image
                //  source={User}
                 source={{ uri: 'https://im.rediff.com/getahead/2013/oct/01m-s-dhoni-1.jpg?w=670&h=900' }}
                 style = {
                  {
                    height: 130,
                    width: 130,
                    borderRadius: 65
                  }
                 }
                 />
                 <Text style={{fontSize: 22,marginVertical: 6, fontWeight: "bold",color:"#111"}}>
                  Ms Dhoni
                 </Text>
                 <Text style={{fontSize: 16, color: "#111"}} >Indian Cricketer </Text>
                 </View>
                <DrawerItemList
                {...props}
                />
              </SafeAreaView>
            )
          }
        )
      }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name='Home'
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name='home' size={20} color="#808080"/>
            )
          }}
          component={Home}
        />
         <Drawer.Screen
          name='Blogs'
          options={{
            drawerLabel: "Blogs",
            title: "Blogs",
            drawerIcon: () => (
              <MaterialIcons name='timer' size={20} color="#808080"/>
            )
          }}
          component={Timer}
        />
        <Drawer.Screen
          name='Categories'
          options={{
            drawerLabel: "Categories",
            title: "Categories",
            drawerIcon: () => (
              <MaterialIcons name='category' size={20} color="#808080"/>
            )
          }}
          component={Categories}
        />
         <Drawer.Screen
          name='Customize'
          options={{
            drawerLabel: "Customize",
            title: "Customize",
            drawerIcon: () => (
              <MaterialIcons name='dashboard-customize' size={20} color="#808080"/>
            )
          }}
          component={Customize}
        />
         <Drawer.Screen
          name='Settings'
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <MaterialIcons name='settings' size={20} color="#808080"/>
            )
          }}
          component={Setting}
        />
         <Drawer.Screen
          name='Backups'
          options={{
            drawerLabel: "Backups",
            title: "Backups",
            drawerIcon: () => (
              <MaterialIcons name='backup' size={20} color="#808080"/>
            )
          }}
          component={Backups}
        />
           <Drawer.Screen
          name='GetPremium'
          options={{
            drawerLabel: "Get Premium",
            title: "Get Premium",
            drawerIcon: () => (
              <MaterialCommunityIcons name='certificate' size={20} color="#808080"/>
            )
          }}
          component={GetPremium}
        />
          <Drawer.Screen
          name='Rate this App'
          options={{
            drawerLabel: "Rate this App",
            title: "Rate this App",
            drawerIcon: () => (
              <FontAwesome name='star' size={20} color="#808080"/>
            )
          }}
          component={RateApp}
        />
         <Drawer.Screen
          name='Contact'
          options={{
            drawerLabel: "Contact",
            title: "Contact",
            drawerIcon: () => (
              <MaterialCommunityIcons name='message-alert-outline' size={20} color="#808080"/>
            )
          }}
          component={Contact}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

