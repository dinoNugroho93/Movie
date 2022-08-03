import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './itemStyles'
import IonIcons from "react-native-vector-icons/Ionicons"
import { IMovieOrderResponse } from '../../domain/entities/movieOrder.entities'
import { useNavigation } from '@react-navigation/native'

const MovieItem = ({ item }: {item: IMovieOrderResponse}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("MovieDetailScreen",{movieId: item.id})}} style={styles.container} key={item.id}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.avatar} resizeMode="cover" />
            <View>
                <View style={styles.dataContainer}>
                    <Text style={styles.titleLbl} numberOfLines={2}>{item.title}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <View style={styles.rowContainer}>
                        <IonIcons name="star" size={20} color="#E7BB42" style={{ marginRight: 5 }} />
                        <Text style={[styles.titleLbl, { fontWeight: '700', color: "#E7BB42", fontSize: 12 }]}>{`${parseFloat(item.vote_average).toFixed(1)}/10`}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <IonIcons name="analytics" size={20} color="#732723" style={{ marginRight: 5 }} />
                        <Text style={[styles.titleLbl, { fontWeight: 'bold', fontSize: 12 }]}>{item.popularity}</Text>
                    </View>
                </View>
                <View style={[styles.dataContainer, { flexDirection: 'row' }]}>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MovieItem