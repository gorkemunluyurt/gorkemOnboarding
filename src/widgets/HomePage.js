import { View, Text, TouchableOpacity, ImageBackground, FlatList, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { HomePageStyle } from "./styles";
export default HomePage = () => {
  const [users, setUsers] = useState([])
  const [likesList, setLikesList] = useState([])
  const [userId, setUserId] = useState(0)
  const [showWarning, setShowWarning] = useState(false)
  const [selectedUser, setSelectedUser] = useState({ name: "", id: "" })
  const setUserConnect = async (id) => {
    setShowWarning(false)
    try {
      await firestore().collection("Users").doc(id).set({
        "likes": firestore.FieldValue.arrayUnion(...[
          firebase.auth().currentUser.uid
        ])
      }, { merge: true })
    } catch (e) {
      console.log(e.message);
    }
  }
  const AllUserPage = () => {
    const renderFlatListItem = ({ item, index }) => {
      return (
        <View style={HomePageStyle.imageBackgroundContainer}>
          <TouchableOpacity style={HomePageStyle.imageButtonStyle} onPress={() => {
            setShowWarning(true);
            setSelectedUser({ name: item.userName, id: item.id })
          }
          }>
            <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: item.profilePhoto }} style={{ flex: 1 }} resizeMode="cover" >
              <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(0, 0, 0, 0)',
                'rgba(132, 74, 255, 0.5)',
              ]} style={HomePageStyle.linearGradientStyle}>
                <View style={HomePageStyle.textContainer}>
                  <Text style={HomePageStyle.text}>{item.userName}</Text>
                  <Text style={HomePageStyle.dateText}>{item.birthDay}</Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )
    }
    const customAlert = () => {
      return (
        <Modal transparent={true} visible={showWarning} onRequestClose={() => setShowWarning(false)}>
          <View style={HomePageStyle.customAlertAligment}>
            <View style={HomePageStyle.customAlertBox}>
              <Text style={HomePageStyle.customAlertText}>
                {selectedUser.name}  adlı kullanıcıya istek göndermek istediğine emin misin?
              </Text>
              <TouchableOpacity onPress={() => {
                setShowWarning(false)
                setUserConnect(selectedUser.id)
              }} style={HomePageStyle.customAlertGonderButtonStyle}>
                <Text style={{ color: "white" }}>Gönder</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setShowWarning(false)
              }} style={HomePageStyle.customAlerVazgecButtonStyle}>
                <Text style={{ color: "black" }}>Vazgeç</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        {
          showWarning ?
            customAlert()
            :
            ""
        }
        <FlatList

          data={users}
          keyExtractor={users.id}     //has to be unique   
          renderItem={renderFlatListItem} //method to render the data in the way you want using styling u need
          horizontal={false}
          numColumns={2}
        />
      </View>
    );
  }
  const renderFlatList2Item = ({ item, index }) => {
    return (
      <View style={HomePageStyle.imageBackgroundContainer}>
        <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: item.profilePhoto }} style={{ flex: 1 }} resizeMode="cover" >
          <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(0, 0, 0, 0)',
            'rgba(214, 5, 43, 0.5)',
          ]} style={HomePageStyle.linearGradientStyle}>
            <View style={HomePageStyle.textContainer}>
              <Text style={HomePageStyle.text}>{item.userName}</Text>
              <Text style={HomePageStyle.dateText}>{item.birthDay}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    )
  }
  const UserPage = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={likesList}
          keyExtractor={users.id}
          renderItem={renderFlatList2Item}
          horizontal={false}
          numColumns={2}
        />
      </View>
    );
  }
  const Tab = createBottomTabNavigator();
  function MyTabBar({ state, descriptors, navigation, index }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              getData()

              let sayi = 0;
              for (i = 0; i < users.length; i++) {
                if (currentId === users[i].id) {
                  sayi = i;
                }
              }
              setUserId(sayi);
              let list = [];
              users.map(user => {
                users[userId].likes.map(like => {
                  if (like == user.id) {
                    list.push(user);
                  }
                })
              })
              setLikesList(list);
              navigation.navigate({ name: route.name, merge: true });
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center", justifyContent: "center", height: 50, margin: 15, borderRadius: 15, backgroundColor: isFocused ? "#844AFF" : "white", }}
            >
              <Text key={index} style={{ color: isFocused ? 'white' : '#8C8C8C' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  getData = async () => {
    await firestore().collection("Users").onSnapshot((querySnapshot) => {
      let sayac = 0;
      setUsers(
        querySnapshot.docs.map((doc) => {
          if (doc.id == currentId) {
            setUserId(sayac);
          }
          sayac++;
          return {
            ...doc.data(), id: doc.id
          }
        })
      )
    })
  }
  const currentId = firebase.auth().currentUser.uid
  useEffect(() => {
    getData()
  }, [])
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="AllUserPage" options={{ headerShown: false, tabBarLabel: "Kullanıcılar" }} component={AllUserPage} />
      <Tab.Screen name="UserPage" options={{ headerShown: false, tabBarLabel: "Beğenenler" }} component={UserPage} />
    </Tab.Navigator>
  );
}
