import { Platform, StyleSheet } from "react-native"

const headerStyle = StyleSheet.create({
    header: {
        height: Platform.OS === "ios" ? 85 : 65,
        paddingTop: Platform.OS === "ios" ? 20 : 0,
    },
})

export default headerStyle
