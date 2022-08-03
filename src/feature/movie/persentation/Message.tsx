import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../store/message'
import { RootState } from '../store'

const Message = () => {
    const dispatch = useDispatch()
    const { message } = useSelector((state: RootState) => state.message);

    const handlePress = () => {
        dispatch(setMessage("au message dari component"))
    }
    return (
        <View>
            <Text style={styles.text}>{message}</Text>
            <Button title={'Set Message'} onPress={handlePress} />
        </View>
    )
}

export default Message;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    }
});