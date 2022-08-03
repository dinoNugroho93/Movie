import React from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import headerStyle from './headerStyle';
import Icon from 'react-native-vector-icons/Ionicons';

interface IHeaderProps {
    iconLeft?: any;
    iconRight?: any;
    disableIconLeft?: boolean;
    disableIconRight?: boolean;
    title?: string;
}

const HeaderComponent: React.FC<IHeaderProps> = (props) => {
    const {
        iconLeft,
        iconRight,
        disableIconLeft,
        disableIconRight,
        title
    } = props;
    return (
        <View style={headerStyle.header}>
            {Boolean(disableIconLeft) && (
                <View
                    style={{
                        flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row",
                    }}>
                    {!Boolean(disableIconLeft) && (
                        <TouchableOpacity
                            onPress={() => { }/* onBackIconPress */}
                            style={{
                                flex:0.1,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                            }}>
                            <Icon
                                name={
                                    Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"
                                }
                                style={{ color: "#FFF", fontSize: 24 }}
                            />
                        </TouchableOpacity>
                    )}
                    {Boolean(iconLeft) && iconLeft}

                    <View style={{ flex: 0.8, alignContent: "center", flexDirection: "row", justifyContent:"center" }}>
                        <>
                            <View style={{ marginRight: Boolean(disableIconLeft) ? 15 : 10 }} />
                            <View
                                style={{ flex: 1, justifyContent: "center", paddingBottom: 3, alignItems:"center" }}>
                                <Text style={{ fontSize: 18, fontWeight:'700', textAlign: "center", color: "#E7BB42" }}>{title}</Text>
                            </View>
                        </>
                    </View>
                    {iconRight && (
                        <View
                            style={{
                                flex: iconRight ? 0.1 : 0.1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            {iconRight}
                        </View>
                    )}
                </View>
            )}
        </View>
    )
}
export default HeaderComponent;