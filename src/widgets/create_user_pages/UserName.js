import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Alert, Image } from "react-native";
import { CreateUserPageStyle } from "../styles";
export default UserName = ({ navigation }) => {
    const [email, setEmail] = useState("")
    return (
        <View style={CreateUserPageStyle.container}>
            <View style={CreateUserPageStyle.UserNameSteps}>
            </View>
            <View style={CreateUserPageStyle.createUserContainer}>
                <View style={CreateUserPageStyle.createUserBackgroundContainer}>
                    <View style={{ flex: 1 }}>
                        <Image source={require("../../assets/yildiz_arkaplan.png")}></Image>
                    </View>
                    <View style={{ flex: 4, width: "100%", alignItems: "center" }}>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={{ fontSize: 24, color: "white" }}>Karma'ya hoşgeldin!</Text>
                            <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>Lütfen bir e posta adresi gir!</Text>
                        </View>
                        <TextInput placeholder="Email"
                            placeholderTextColor={"black"}
                            onChangeText={(value) => setEmail(value)}
                            value={email}

                            style={CreateUserPageStyle.createUserInputStyle}
                        >
                        </TextInput>
                        <TouchableOpacity onPress={() => {
                            if (email.length <= 0) {
                                Alert.alert("Hata", "Lütfen email adresi giriniz");
                            }
                            else navigation.navigate('UserBirthDate', { email: email });
                        }} style={CreateUserPageStyle.createUserButtonStyle}>
                            <Text style={CreateUserPageStyle.createUserButtonTextStyle}>Devam Et</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}