import moment from "moment";
import React, { useEffect, useRef } from "react";
import { ActivityIndicator, Animated, Dimensions, Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { MovieListComponent } from "../../movie/persentation/component";
import movieListStyles from "../../movie/persentation/movieLisrStyles";
import { convertMinsToTime } from "../infrastructure/exportFunc";
import { fetchMoviesDetails } from "../infrastructure/http/movieDetail.http";
import { HEADER_SCROLL_DISTANCE, HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT } from "./index.style";
import styles from "./styles";
import { RootState } from "../../movie/store";
import { fetchSimilar } from "../infrastructure/http/similar.http";
import { selectAllUsers } from "../../movie/store/similarListSlice";

const MovieDetailScreen = ({ route }) => {
    const { movieId } = route.params
    const dispatch = useDispatch()
    const movies = useSelector(selectAllUsers);
    const { loading, data } = useSelector((state: RootState) => state.movieDetails)

    const scrollY = useRef(new Animated.Value(0)).current;

    const headerTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });
    const imageTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 100],
        extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0.9],
        extrapolate: 'clamp',
    });
    const titleTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, -8],
        extrapolate: 'clamp',
    });
    const renderListItem = (item) => (
        <View key={item.id} style={styles.card}>
            <Image style={styles.avatar} source={{ uri: item.avatar }} />
            <Text style={styles.fullNameText}>{item.fullName}</Text>
        </View>
    );

    useEffect(() => {
        dispatch(fetchSimilar(movieId))
        dispatch(fetchMoviesDetails(movieId))
    }, [])

    if (loading) {
        return (
            <ActivityIndicator size="large" style={movieListStyles.loader} />
        )
    }

    return (
        <SafeAreaView style={styles.saveArea}>
            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: Platform.OS === "ios"?  HEADER_MAX_HEIGHT - 40: HEADER_MAX_HEIGHT - 10}}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}>
                <View style={styles.containerDesc}>
                    <Text style={[styles.title, { fontWeight: 'bold', width: '85%' }]} numberOfLines={2}>{`${data.title}. ${data.tagline}`}</Text>
                    <View style={styles.rowContainer}>
                        <Text style={[styles.lbl, { color: "#75B882", marginRight: 5 }]}>{data.status}</Text>
                        <Text style={[styles.lbl, { marginRight: 5 }]}>{moment(data.release_date).format("YYYY")}</Text>
                        <Icon name="timer-outline" size={15} color="#E7BB42" style={{ marginRight: 5 }} />
                        <Text style={[styles.lbl, { marginRight: 5 }]}>{convertMinsToTime(data.runtime)}</Text>
                    </View>
                </View>

                <View style={[styles.rowContainer, { marginHorizontal: 16, marginTop: 0 }]}>
                    <Text style={[styles.title, {
                        color: "#E7BB42",
                        fontWeight: "300",
                        fontSize: 40,
                    }]}>{parseFloat(data.vote_average).toFixed(1)}</Text>
                    <View style={{ flexDirection: "column", marginHorizontal: 8 }}>
                        <Text style={styles.lbl}>{data.popularity}</Text>
                        <Text style={[styles.lbl, { fontWeight: '500' }]}>POPULARITY</Text>
                    </View>
                </View>
                <View style={styles.containerDesc}>
                    <Text style={[styles.title, {
                        color: "#E7BB42",
                        fontWeight: "800",
                        fontSize: 16,
                        marginBottom: 5
                    }]}>STORYLINE</Text>
                    <Text style={styles.lbl} numberOfLines={20}>{data.overview}</Text>
                </View>
                <MovieListComponent listMovie={movies} topHeadline={"SIMILAR MOVIES"} />
            </Animated.ScrollView>
            <Animated.View
                style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
                <Animated.Image
                    style={[
                        styles.headerBackground,
                        {
                            opacity: imageOpacity,
                            transform: [{ translateY: imageTranslateY }],
                        },
                    ]}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
                />
            </Animated.View>
            <Animated.View
                style={[
                    styles.topBar,
                    {
                        transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
                    },
                ]}>
                <Text style={styles.title}>Movie Detail</Text>
            </Animated.View>
        </SafeAreaView>
    )
}

export default MovieDetailScreen;

