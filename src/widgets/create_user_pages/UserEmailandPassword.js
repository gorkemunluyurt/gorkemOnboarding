
import { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import React, { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import { View,Text, TextInput, Button, TouchableOpacity, Alert,Image } from "react-native";
export default UserEmailandPassword = ({navigation,route}) => {
    createUser=async(email,password)=>{
        try{
            if(email.length>0 && password.length>0){
                const auth= await firebase.auth().createUserWithEmailAndPassword(email,password);
            console.log(route.params.profilePhoto+" "+route.params.userName+" "+route.params.userBirthDate);
            await firestore().collection("Users").doc(auth.user.uid).set({
                "userName":route.params.userName,
                "birthDay":route.params.userBirthDate,
                "profilePhoto":route.params.profilePhoto,
                "likes":[]
                
            });
            navigation.navigate("HomePage");
            }
            else{
                Alert.alert("Hata","Lütfen geçerli bir e posta adresi girin");
            }
            
        }catch(e){
            Alert.alert("Hata",e.message);
            
        }

    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSelected, setIsSelected] = useState(false)
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:15}}>
            <View style={{flex:0.08,flexDirection:"row",backgroundColor:"#F0F0F0",borderRadius:15}}>
        <View style={{flex:1,backgroundColor:"#844AFF",borderRadius:15}}>

        </View>
        
    </View>
    <View style={{flex:4,justifyContent:"center",alignItems:"center",padding:15,width:"100%"}}>
    <View style={{padding:20,backgroundColor:"#1A1624",width:"100%",height:400,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
            <View style={{flex:1}}>
                    <Image source={require("../../assets/yildiz_arkaplan.png")}></Image>
                </View>
                <View style={{flex:4,width:"100%",alignItems:"center"}}>
                <View style={{marginBottom:30}}>
                <Text style={{fontSize:16,color:"white",textAlign:"center"}}>Email ve en az 6 karakterden oluşan</Text>
                <Text style={{fontSize:16,color:"white",textAlign:"center"}}>bir parola girmelisin</Text>
                </View>
                <TextInput placeholder="Email"
                placeholderTextColor={"black"}
                onChangeText={(value)=>setEmail(value)}
                value={email}
                
                style={{
                    backgroundColor:"white",
                    width:"100%",
                    borderRadius:15,
                    marginBottom:15,
                    color:"black"
                    
                }}
                >

                </TextInput>
                <TextInput placeholder="Parola"
                placeholderTextColor={"black"}
                secureTextEntry={true}
                onChangeText={(value)=>setPassword(value)}
                value={password}
                style={{
                    backgroundColor:"white",
                    width:"100%",
                    borderRadius:15,
                    marginBottom:30,
                    color:"black"

                }}
                >

                </TextInput>
                <View style={{flexDirection:"row",marginBottom:5}}>
                <CheckBox
            tintColors={ "white" }
            
          value={isSelected}
          onValueChange={setIsSelected}
          style={{alignSelf:"center",padding:0}}
        />
        <Text style={{color:"white",fontSize:11}}><Text style={{color:"rgba(132, 74, 255, 1)",fontSize:11}}>Kullanım Koşulları, Gizlilik Politikası</Text> ve <Text style={{color:"rgba(132, 74, 255, 1)",fontSize:11}}>KVKK Metnini</Text > okudum onaylıyorum.</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    if(isSelected){
                       if(email!=null && password!=null){
                       createUser(email,password);  
                    } 
                    }
                    
                   
                }} style={{width:"100%",height:45,backgroundColor:isSelected ? "white" : "grey",borderRadius:15,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>Tamamla</Text>
                </TouchableOpacity>
                </View>
                
            </View>

    </View>
            
        </View>
    );
}