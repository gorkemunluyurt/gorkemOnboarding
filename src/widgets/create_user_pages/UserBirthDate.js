import React, { useState } from "react"
import { View,Text, TextInput, Button, TouchableOpacity,Image } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
export default UserBirthDate = ({navigation,route}) =>{
    const [birthTime, setBirthTime] = useState(new Date);
    const [open, setOpen] = useState(false)
    const [selectedState, setSelectedState] = useState(false)
    const onChange = (event,selectedDate) =>{
        const currentDate=selectedDate || date;
        setBirthTime(currentDate);
        setOpen(false);
        setSelectedState(true);
        console.log(currentDate);
    }
    console.log("deger "+route.params.userName);
    return(
        
        <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:15,backgroundColor:"white"}}>
            <View style={{flex:0.08,flexDirection:"row",backgroundColor:"#F0F0F0",borderRadius:15}}>
        <View style={{flex:selectedState==true ? 4 : 1,backgroundColor:"#844AFF",borderRadius:15}}>

        </View>
        <View style={{flex:4,backgroundColor:"#F0F0F0",borderRadius:15}}>

        </View>
    </View>
    <View style={{flex:4,justifyContent:"center",alignItems:"center",padding:15,width:"100%"}}>
    <View style={{padding:20,backgroundColor:"#1A1624",width:"100%",height:350,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
            <View style={{flex:1}}>
                    <Image source={require("../../assets/yildiz_arkaplan.png")}></Image>
                </View>
                <View style={{flex:4,width:"100%",alignItems:"center"}}>
                <View style={{marginBottom:30}}>
                
                <Text style={{fontSize:20,color:"white"}}>Doğum tarihin nedir?</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    setOpen(true);
                }} style={{marginBottom:30,width:"100%",height:45,backgroundColor: "white",borderRadius:15,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>{selectedState==false ? "Open" : birthTime.getFullYear()+"/"+(birthTime.getMonth()+1)+"/"+birthTime.getDate()}</Text>
                </TouchableOpacity>
        
                {
                    open==true ? (<DateTimePicker
                    value={birthTime}
                    
                    onChange={onChange}
                    >

                    </DateTimePicker>) : ""
                }
     
                <TouchableOpacity onPress={()=>{
                    if(selectedState){
                       navigation.navigate("UserProfilePhoto",{
                        userName:route.params.userName,
                        userBirthDate:(birthTime.getFullYear()+"/"+(birthTime.getMonth()+1)+"/"+birthTime.getDate())
                    }) 
                    }
                    
                }} style={{width:"100%",height:45,backgroundColor:selectedState ?  "white" : "grey",borderRadius:15,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>Devam Et</Text>
                </TouchableOpacity>
                </View>
                
            </View>
    </View>
            

        </View>
    );
}