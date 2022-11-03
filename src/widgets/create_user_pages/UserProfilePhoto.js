import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, ActivityIndicatorBase, Image, Alert, ActivityIndicator } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { CreateUserPageStyle } from "../styles";
export default UserProfilePhoto = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [upLoading, setUpLoading] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [downloadUrl, setDownloadUrl] = useState("https://firebasestorage.googleapis.com/v0/b/gorkemonboarding-9c1eb.appspot.com/o/kamera_fotosu.png?alt=media&token=386e5307-c34b-4fe9-bdc9-dc2bc141a748")
    const [uploadTask, setUploadTask] = useState()
    const [uploadTaskSnapshot, setUploadTaskSnapshot] = useState({})
    const [selectedState, setSelectedState] = useState(false)
    const onSelectImagePress = () => {
        launchImageLibrary({ mediaType: "mixed", maxHeight: 300, maxHeight: 300 }, onMediaSelect)
    }
    const onMediaSelect = async (media) => {
        if (!media.didCancel) {
            setUpLoading(true);
            const ref = storage().ref(media.assets[0].fileName)
            const task = ref.putFile(media.assets[0].uri);
            setUploadTask(task);
            task.on("state_changed", (taskSnapshot) => {
                setUploadTaskSnapshot(taskSnapshot);
            })
            task.then(async () => {
                const downloadURL = await ref.getDownloadURL();
                setSelectedState(true);
                setDownloadUrl(downloadURL);
                setUpLoading(false);
                setUploadTaskSnapshot({});
            })
        }
    }
    return (
        <View style={CreateUserPageStyle.container}>
            <View style={CreateUserPageStyle.UserNameSteps}>
                <View style={{ flex: selectedState == true ? 8 : 4, backgroundColor: "#844AFF", borderRadius: 15 }}>

                </View>
                <View style={CreateUserPageStyle.noneSteps}>

                </View>
            </View>
            <View style={CreateUserPageStyle.createUserContainer}>
                <View style={CreateUserPageStyle.createUserBackgroundContainer}>
                    <View style={{ flex: 1 }}>
                        <Image source={require("../../assets/yildiz_arkaplan.png")}></Image>
                    </View>
                    <View style={{ flex: 4, width: "100%", alignItems: "center" }}>
                        <View style={{ marginBottom: 30 }}>

                            <Text style={{ fontSize: 16, color: "white" }}>Bir fotoğraf seçebilir misin?</Text>
                        </View>
                        <TouchableOpacity style={CreateUserPageStyle.selectImage} onPress={onSelectImagePress}>
                            <Image source={{ uri: downloadUrl }} style={CreateUserPageStyle.ImageStyle}></Image>
                        </TouchableOpacity>
                        {
                            upLoading == true ? <ActivityIndicator size="large" /> : <View></View>
                        }
                        <TouchableOpacity onPress={() => {
                            if (selectedState) {
                                const date = route.params.userBirthDate;
                                navigation.navigate("UserEmailandPassword", {
                                    userName: route.params.userName,
                                    userBirthDate: route.params.userBirthDate,
                                    profilePhoto: downloadUrl
                                })
                            }
                            else {
                                Alert.alert("Hata", "Lütfen profil fotoğrafı seç");
                            }

                        }} style={{ width: "100%", height: 45, backgroundColor: selectedState ? "white" : "grey", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                            <Text style={CreateUserPageStyle.createUserButtonTextStyle}>Devam Et</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>


        </View>
    );
}