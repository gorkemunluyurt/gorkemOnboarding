import React, { useState } from "react";
import { View,Text, TextInput, Button, TouchableOpacity, Alert,Image } from "react-native";
export default UserName = ({navigation})=>{
    const [name, setName] = useState("")
    return(
<View style={{flex:1,backgroundColor:"white"}}>
    <View style={{flex:0.08,flexDirection:"row",backgroundColor:"#F0F0F0",borderRadius:15,marginLeft:10,marginRight:10,marginTop:10}}>
        
    </View>
            <View style={{flex:4,justifyContent:"center",alignItems:"center",padding:15}}>
            <View style={{padding:20,backgroundColor:"#1A1624",width:"100%",height:350,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
                <View style={{flex:1}}>
                    <Image source={require("../../assets/yildiz_arkaplan.png")}></Image>
                </View>
                <View style={{flex:4,width:"100%",alignItems:"center"}}>
                <View style={{marginBottom:30}}>
                <Text style={{fontSize:24,color:"white"}}>Karma'ya hoşgeldin!</Text>
                <Text style={{fontSize:16,color:"white",textAlign:"center"}}>Sana nasıl hitap edelim!</Text>
                </View>
                <TextInput placeholder="Kullanıcı Adı"
                placeholderTextColor={"black"}
                onChangeText={(value)=>setName(value)}
                value={name}
                
                style={{
                    color:"black",
                    backgroundColor:"white",
                    width:"100%",
                    borderRadius:15,
                    marginBottom:15
                    
                }}
                >


                </TextInput>
                <TouchableOpacity onPress={()=>{
                    if(name.length<=0){
                        Alert.alert("Hata","Lütfen kullanıcı adı giriniz");
                    }
                    else navigation.navigate('UserBirthDate',{userName:name});
                }} style={{width:"100%",height:45,backgroundColor:"white",borderRadius:15,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>Devam Et</Text>
                </TouchableOpacity>
                </View>
                
            </View>
            </View>

        </View>
    );
}