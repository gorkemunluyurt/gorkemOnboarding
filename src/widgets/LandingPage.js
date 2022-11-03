import React from "react";
import { TouchableOpacity, View, Text, ImageBackground } from "react-native";
import { LandingPageStyle } from "./styles";
export default LandingPage = ({ navigation }) => {
    return (
        <View style={LandingPageStyle.landingPageContainer}>
            <View style={LandingPageStyle.imageBackgroundContainer}>
                <ImageBackground source={require("../assets/landing_picture.png")} style={LandingPageStyle.imageBackgroundStyle} resizeMode="cover" >
                    <Text style={LandingPageStyle.landingPageTitle}>Ruh Eşini Keşfetmeye</Text>
                    <Text style={LandingPageStyle.landingPageTitle}>Hazır mısın?</Text>
                    <Text style={LandingPageStyle.landingPageText}>Doğum haritanda gizlenen sırları keşfet, kadim bilgiye kulak ver!</Text>
                </ImageBackground>

            </View>
            <View style={{ flex: 1.2, width: "100%" }}>
                <TouchableOpacity style={LandingPageStyle.logInButton} onPress={() => {
                    navigation.navigate('LogInPage');
                }}><Text style={LandingPageStyle.landingPageButtonStyle}>Giriş Yap</Text></TouchableOpacity>
                <TouchableOpacity style={LandingPageStyle.createAccountButton} onPress={() => {
                    navigation.navigate('UserName')
                }}><Text style={LandingPageStyle.landingPageButtonStyle}>Hesap Oluştur</Text></TouchableOpacity>
                <Text style={LandingPageStyle.privatePolictText}>Devam ederek Kullanım Koşullarımızı ve Gizlilik Politikamızı
                    kabul etmiş sayılırsınız.</Text>
            </View>
        </View>
    );
}
