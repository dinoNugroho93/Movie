import React from 'react'
import { FlatList, Text, View } from 'react-native'
import MovieItem from './MovieItem'
import stylesList from './stylesList'
const MovieListComponent = ({
    listMovie,
    topHeadline
}) => {
    const renderEmpty = () => {
        return (
            <></>
        )
    }
    const renderItem = ({ item }) => {
        return <MovieItem item={item} />
    }
    return (
        <View style={{marginHorizontal:16, marginVertical:20}}>
            <Text style={stylesList.titleList}>{topHeadline}</Text>
            <FlatList
                horizontal
                data={listMovie}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default MovieListComponent;