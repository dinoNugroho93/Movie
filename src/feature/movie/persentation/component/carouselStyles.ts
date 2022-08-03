import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")
const corouselStyles = StyleSheet.create({
    image: {
        width,
        height: 200,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    footer: {
        flexDirection: "column",
        justifyContent: "center",
        height: 70,
        paddingHorizontal: 16,
        alignItems: "flex-start",
        backgroundColor: "rgba(0,0,0,0.4)",
        borderTopStartRadius:20,
        borderTopEndRadius:20

    },
    footerText: {
        color: "#BBBFBF",
        fontSize: 18,
        fontWeight: 'bold',
    },
    dotView:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:10,
    },
    circle:{
        height:6,
        width:6,
        backgroundColor:"#E7BB42",
        borderRadius:6/2,
        marginHorizontal:5
    }
})

export default corouselStyles;