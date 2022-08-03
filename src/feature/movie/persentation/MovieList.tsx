import React, { useEffect } from 'react'
import { ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../../component/HeaderComponent';
import { fetchMovies } from '../infrastucture/http/movie.http';
import { fetchUpcoming } from '../infrastucture/http/upcoming.http';
import { RootState } from '../store';
import { selectAllUsers } from '../store/movieListSlice';
import { selectAllUsers as selectUpcoming } from '../store/upcomingSlice'
import { CarouselComponent, MovieListComponent } from './component';
import movieListStyles from './movieLisrStyles';
import Icon from 'react-native-vector-icons/Ionicons'


const MovieList = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state: RootState) => state.movies)
    const movies = useSelector(selectAllUsers);
    const upcomings = useSelector(selectUpcoming);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(fetchMovies())
        });
        dispatch(fetchUpcoming())
        return unsubscribe;
    }, [])

    if (loading) {
        return (
            <ActivityIndicator size="large" style={movieListStyles.loader} />
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#161923' }}>
            <HeaderComponent
                iconLeft={<Icon name="list-circle-outline" color={"#E7BB42"} size={22} />}
                iconRight={<Icon name="home" color={"#E7BB42"} size={22} />}
                title='Discover' disableIconLeft={true} />
            <CarouselComponent listData={upcomings} />
            <MovieListComponent listMovie={movies} topHeadline={"BEST POPULAR MOVIES"} />
        </View>
    )
}
export default MovieList;
