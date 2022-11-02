import React, { useState } from "react";
import { View,Text, TouchableOpacity } from "react-native";
import firebase from "@react-native-firebase/app"
import auth from '@react-native-firebase/auth';
import LogInPage from "./widgets/LogInPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from "./widgets/LandingPage";
import UserName from "./widgets/create_user_pages/UserName";
import UserBirthDate from "./widgets/create_user_pages/UserBirthDate";
import UserEmailandPassword from "./widgets/create_user_pages/UserEmailandPassword";
import HomePage from "./widgets/HomePage";
import UserProfilePhoto from "./widgets/create_user_pages/UserProfilePhoto";

 
  
export default App = () =>{
    
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage" screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
        }}>
          <Stack.Screen  name="LandingPage" options={{headerShown:false}} component={LandingPage} />
          <Stack.Screen name="LogInPage" options={{title:"Giriş Yap",headerTitleAlign:"center",headerShadowVisible: false}} component={LogInPage} />
          <Stack.Screen  name="UserName" options={{title:"Kayıt Ol",headerTitleAlign:"center",headerShadowVisible: false}} component={UserName}></Stack.Screen>
          <Stack.Screen name="UserBirthDate" options={{title:"Kayıt Ol",headerTitleAlign:"center", headerShadowVisible: false}} component={UserBirthDate}></Stack.Screen>
          <Stack.Screen name="UserEmailandPassword" options={{title:"Kayıt Ol", headerShadowVisible: false,headerTitleAlign:"center"}} component={UserEmailandPassword}></Stack.Screen>
          <Stack.Screen name="HomePage" options={{headerShown:false}}  component={HomePage}></Stack.Screen>
          <Stack.Screen name="UserProfilePhoto" options={{title:"Kayıt Ol",headerTitleAlign:"center", headerShadowVisible: false}} component={UserProfilePhoto}></Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    );
}