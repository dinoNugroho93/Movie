import { StyleSheet } from "react-native";

const stylesItem = StyleSheet.create({
    container: {
        width: 180,
        flexDirection: 'column',
        marginVertical: 10,
        backgroundColor: "rgba(119, 120, 153, 0.1)",
        marginRight:16,
        flexShrink:1,
        borderRadius:10
    },
    containerImage:{
        backgroundColor:'blue'
    },
    dataContainer: {
        marginHorizontal:5,
        marginTop:8,
        flexDirection:"row",
        alignItems:"center",
    },
    rowContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:8
    },
    avatar: {
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width: 180,
        height: 260,
    },
    titleLbl:{
        fontWeight:'700',
        color:"#BBBFBF",
        fontSize:16,
    }
})
export default stylesItem;