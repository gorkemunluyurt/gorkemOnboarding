import React from "react";
import { StyleSheet, Dimensions } from "react-native";
export const LandingPageStyle = StyleSheet.create(
    {
        imageBackgroundContainer: {
            flex: 4,
            justifyContent: "center",
            alignItems: "center"
        },
        imageBackgroundStyle: {
            alignItems: "center",
            justifyContent: "center",
            height: Dimensions.get('window').height * 0.38,
            width: Dimensions.get('window').width * 0.9

        },
        landingPageContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10
        },
        logInButton: {
            borderRadius: 15,
            width: "100%",
            marginBottom: 30,
            backgroundColor: "#844AFF",
            height: 50,
            justifyContent: "center",
            alignItems: "center"
        },
        createAccountButton: {
            borderRadius: 15,
            width: "100%",
            marginBottom: 15,
            backgroundColor: "#434343",
            height: 50,
            justifyContent: "center",
            alignItems: "center"
        },
        landingPageTitle: {
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "black"
        },
        landingPageText: {
            textAlign: "center",
            marginTop: 22,
            color: "black"
        },
        landingPageButtonStyle: {
            color: "white",
            fontSize: 20,
            fontWeight: "500"
        },
        privatePolictText: {
            textAlign: "center",
            marginBottom: 20,
            color: "black",
            fontSize: 12
        }
    }
)
export const HomePageStyle = StyleSheet.create({
    imageButtonStyle: {
        flex: 1,
    },
    imageBackgroundContainer: {
        padding: 10,
        flex: 1,
        height: Dimensions.get('window').height * 0.28,
        maxWidth: "50%"
    },
    textContainer: {
        justifyContent: "flex-end",
        flex: 1,
        padding: 5
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    dateText: {
        color: "white",
        fontSize: 12
    },
    linearGradientStyle: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 15
    },
    customAlertGonderButtonStyle: {
        marginBottom: 5,
        height: 40,
        width: "100%",
        backgroundColor: "rgba(132, 74, 255, 1)",
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center"
    },
    customAlerVazgecButtonStyle: {
        height: 40,
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center"
    },
    customAlertAligment: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000099",
        flex: 1
    },
    customAlertBox: {
        width: 300,
        height: 250,
        borderRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    customAlertText: {
        marginBottom: 20,
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    }

})
export const CreateUserPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    UserNameSteps: {
        flex: 0.08,
        flexDirection: "row",
        backgroundColor: "#F0F0F0",
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    noneSteps: {
        flex: 4,
        backgroundColor: "#F0F0F0",
        borderRadius: 15
    },
    createUserContainer: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    },
    createUserBackgroundContainer: {
        padding: 20,
        backgroundColor: "#1A1624",
        width: "100%",
        height: 400,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    createUserInputStyle: {
        color: "black",
        backgroundColor: "white",
        width: "100%",
        borderRadius: 15,
        marginBottom: 15
    },
    createUserButtonStyle: {
        width: "100%",
        height: 45,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    createUserButtonTextStyle: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },
    selectImage: {
        width: 150,
        height: 150,
        marginBottom: 15,
        borderRadius: 15
    }, ImageStyle: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        borderRadius: 15
    },
    logInPageStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: "white"
    }
})
