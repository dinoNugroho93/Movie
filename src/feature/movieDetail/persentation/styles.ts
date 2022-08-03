import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")
export const HEADER_MAX_HEIGHT = 240;
export const HEADER_MIN_HEIGHT = 65;
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const styles = StyleSheet.create({
    saveArea: {
        flex: 1,
        backgroundColor: '#161923',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#402583',
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
        borderRadius: 10,
        marginHorizontal: 12,
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#161923',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    topBar: {
        marginTop: 16,
        height: Platform.OS === "android"? 50 : 85,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    avatar: {
        height: 54,
        width: 54,
        resizeMode: 'contain',
        borderRadius: 54 / 2,
    },
    fullNameText: {
        fontSize: 16,
        marginLeft: 24,
    },
    containerDesc: {
        marginVertical: 16,
        marginHorizontal: 16
    },
    rowContainer: {
        flexDirection: "row",
        marginTop: 5,
        alignItems: 'center',
    },
    lbl: {
        color: "#BBBFBF"
    },
    containerGenre: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal:16,
    },
    genre: {
        paddingVertical:5,
        paddingHorizontal:16,
        backgroundColor: "rgba(119, 120, 153, 0.1)",
        marginRight:8,
        marginBottom:8,
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        
    }
});

export default styles;