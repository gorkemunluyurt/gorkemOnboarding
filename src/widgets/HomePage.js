import { View, Text, Alert, TouchableOpacity, ScrollVie, ImageBackground, ScrollView, FlatList, Modal, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import IconFontIsto from "react-native-vector-icons/Fontisto"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';


export default HomePage = () => {
  const [users, setUsers] = useState([])
  const [likesList, setLikesList] = useState([])
  const [userId, setUserId] = useState(0)
  const [showWarning, setShowWarning] = useState(false)
  const [selectedUser, setSelectedUser] = useState({name:"",id:""})
  const setUserConnect = async (id) => {
    setShowWarning(false)
    try {


      console.log(id);
      //newArray.push(id);
      console.log("Çalıştı")

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
        <TouchableOpacity onPress={() => {
          setShowWarning(true);
          setSelectedUser({name:item.userName,id:item.id})
          /*Alert.alert(
            "",
            item.userName + " adlı kullanıcıya istek göndermek istediğine emin misin?",

            [
              {
                text: "Hayır"
              },
              { text: "Evet", onPress: () => setUserConnect(item.id) }
            ]
          );*/
        }
        
        }>

          <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: item.profilePhoto }} style={{ margin: 20, height: 170, width: 170 }} resizeMode="cover" >
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(0, 0, 0, 0)',
              'rgba(132, 74, 255, 0.5)',
            ]} style={{ flex: 1, justifyContent: 'center',borderRadius:15 }}>
              <View style={{ justifyContent: "flex-end", flex: 1, padding: 5 }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>{item.userName}</Text>
                <Text style={{ color: "white", fontSize: 12 }}>{item.birthDay}</Text>
              </View>
            </LinearGradient>
          </ImageBackground>

        </TouchableOpacity>
      )
    }
    
    const customAlert = ()=>{
      return(
        <Modal transparent={true} visible={showWarning} onRequestClose={()=>setShowWarning(false)}>
          <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#00000099",flex:1}}>
          <View style={{width:300,height:250,borderRadius:20,backgroundColor:"white",alignItems:"center",justifyContent:"center",padding:10}}>
          <Text style={{marginBottom:20,color:"black",fontSize:16,fontWeight:"bold",textAlign:"center"}}>{selectedUser.name}  adlı kullanıcıya istek göndermek istediğine emin misin?</Text>
          <TouchableOpacity onPress={()=>{
            setShowWarning(false)
            setUserConnect(selectedUser.id)
            
          }} style={{marginBottom:5,height:40,width:"100%",backgroundColor:"rgba(132, 74, 255, 1)",alignItems:"center",borderRadius:15,justifyContent:"center"}}>
            <Text style={{color:"white"}}>Gönder</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              setShowWarning(false)
            }} style={{height:40,width:"100%",backgroundColor:"white",alignItems:"center",borderRadius:15,justifyContent:"center"}}>
            <Text style={{color:"black"}}>Vazgeç</Text>
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

      <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: item.profilePhoto }} style={{ margin: 20, height: 170, width: 170 }} resizeMode="cover" >
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(0, 0, 0, 0)',
              'rgba(214, 5, 43, 0.5)',
            ]} style={{ flex: 1, justifyContent: 'center',borderRadius:15}}>
        <View style={{ justifyContent: "flex-end", flex: 1, padding: 5 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>{item.userName}</Text>
          <Text style={{ color: "white", fontSize: 12 }}>{item.birthDay}</Text>
        </View>
        </LinearGradient>
      </ImageBackground>
    )

  }
  const UserPage = () => {
    return (
      <View style={{ flex: 1 }}>
        
        <FlatList
          data={likesList}
          keyExtractor={users.id}     //has to be unique   
          renderItem={renderFlatList2Item} //method to render the data in the way you want using styling u need
          horizontal={false}
          numColumns={2}

        />



      </View>
    );
  }
  /*const getUsersData = async () => {
    try {
      const data = await firestore().collection("Users").get();
      getUserId()
      console.log(data.docs);
      setUsers(
        data.docs.map((doc) => {
          console.log(doc.data.userName);
          return {
            ...doc.data(), id: doc.id
          }
        })

      )
      console.log(users);
    } catch (e) {
      Alert.alert("Hata", e.message);
    }
  }*/

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
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              let sayi = 0;
              console.log("Çalıştı")

              for (i = 0; i < users.length; i++) {
                console.log(users[i].id + "deneme" + currentId);
                if (currentId === users[i].id) {
                  console.log("Bulundu " + i)
                  sayi = i;
                }
              }
              setUserId(sayi);

              let list = [];

              console.log("Sıra " + userId);
              console.log(users[userId]);
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
  getData=async()=>{
    
    await firestore().collection("Users").onSnapshot((querySnapshot) => {
      let sayac = 0;
      setUsers(
        querySnapshot.docs.map((doc) => {
          if (doc.id == currentId) {
            console.log(sayac + "Bulundu adı " + doc.data().userName)
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
