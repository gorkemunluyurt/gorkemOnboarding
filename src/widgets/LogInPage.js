import { firebase } from "@react-native-firebase/auth";
import React, { Component, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Alert, Image } from "react-native";
import { CreateUserPageStyle } from "./styles";


export default LogInPage = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const logInUser = async () => {
        try {
            if (email.length > 0 && password.length > 0) {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                navigation.navigate("HomePage");
            }
            else {
                Alert.alert("Hata", "E posta veya parola hatası")
            }


        } catch (e) {
            Alert.alert("Hata", e.message);
        }

    }
    return (
        <View style={CreateUserPageStyle.logInPageStyle}>
            <View style={CreateUserPageStyle.createUserBackgroundContainer}>
                <View style={{ flex: 1 }}>
                    <Image source={require("../assets/yildiz_arkaplan.png")}></Image>
                </View>
                <View style={{ flex: 4, width: "100%", alignItems: "center" }}>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ fontSize: 24, color: "white" }}>Karma'ya hoşgeldin!</Text>
                        <Text style={{ fontSize: 16, color: "white" }}>Haydi maceraya başlayalım!</Text>
                    </View>
                    <TextInput placeholder="Email"
                        placeholderTextColor={"black"}
                        onChangeText={(value) => setEmail(value)}
                        value={email}

                        style={CreateUserPageStyle.createUserInputStyle}
                    >

                    </TextInput>
                    <TextInput placeholder="Parola"
                        placeholderTextColor={"black"}
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                        value={password}
                        style={CreateUserPageStyle.createUserInputStyle}
                    >

                    </TextInput>
                    <TouchableOpacity onPress={logInUser} style={CreateUserPageStyle.createUserButtonStyle}>
                        <Text style={CreateUserPageStyle.createUserButtonTextStyle}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}