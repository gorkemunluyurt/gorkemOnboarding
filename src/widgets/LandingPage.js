import React  from "react";
import { TouchableOpacity, View,Text,ImageBackground } from "react-native";
export default LandingPage=({navigation})=>{
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center",padding:50}}>
            <View style={{flex:4,justifyContent:"center",alignItems:"center"}}>
            <ImageBackground source={require("../assets/landing_picture.png")} style={{alignItems:"center",justifyContent:"center",height:300}} resizeMode="cover" >
            <Text style={{textAlign:"center",fontSize:24,fontWeight:"bold",color:"black"}}>Ruh Eşini Keşfetmeye</Text>
                <Text style={{textAlign:"center",fontSize:24,fontWeight:"bold",color:"black"}}>Hazır mısın?</Text>
                <Text style={{textAlign:"center",marginTop:15,color:"black"}}>Doğum haritanda gizlenen sırları keşfet, kadim bilgiye kulak ver!</Text>
    </ImageBackground>
                
            </View>
            <View style={{flex:1,width:"100%"}}>
            <TouchableOpacity style={{borderRadius:15,wid:"100%",marginBottom:30,backgroundColor:"#844AFF",height:45,justifyContent:"center",alignItems:"center"}} onPress={()=>{
                navigation.navigate('LogInPage');
            }}><Text style={{color:"white"}}>Giriş Yap</Text></TouchableOpacity>
            <TouchableOpacity style={{borderRadius:15,wid:"100%",marginBottom:15,backgroundColor:"#434343",height:45,justifyContent:"center",alignItems:"center"}} onPress={()=>{
                navigation.navigate('UserName')
            }}><Text style={{color:"white"}}>Hesap Oluştur</Text></TouchableOpacity>
            <Text style={{textAlign:"center",marginBottom:20,color:"black"}}>Devam ederek Kullanım Koşullarımızı ve Gizlilik Politikamızı
kabul etmiş sayılırsınız.</Text>
            </View>
        </View>
    );
}
