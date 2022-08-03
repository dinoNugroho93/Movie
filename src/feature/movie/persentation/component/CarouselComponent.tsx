import moment from 'moment';
import React, { useRef, useState } from 'react'
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { IUpcomingOrderResponse } from '../../domain/entities/upcomingOrder.entities';
import corouselStyles from './carouselStyles';


const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 }
const CarouselComponent = ({
    listData,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    let flatListRef = useRef<FlatList | null>()
    let onViewRef = useRef(({ changed }: { change: any }) => {
        if (changed[0].isViewable) {
            setCurrentIndex(changed[0].index)
        }
    })

    const renderEmpty = () => {
        return (
            <></>
        )
    }
    const renderItem = ({ item, index }: {item: IUpcomingOrderResponse}) => {
        return (
            <View>
                <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={corouselStyles.image} >
                    <View style={corouselStyles.footer}>
                        <Text style={corouselStyles.footerText}>{item.title}</Text>
                        <Text style={corouselStyles.footerText}>{moment(item.release_date).format("DD MMMM YYYY")}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={(ref) => flatListRef.current = ref}
                data={listData}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={renderItem}
                style={{ maxHeight: 300 }}
                viewabilityConfig={viewConfigRef}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={corouselStyles.dotView}>
                {listData.map((data, index) => {
                    if (index >= 0 && index <= 3) {
                        return (
                            <TouchableOpacity style={[corouselStyles.circle, {
                                backgroundColor: index == currentIndex ? "#E7BB42" : "#BBBFBF"
                            }]}
                                key={index.toString()}></TouchableOpacity>
                        )
                    }
                })}
            </View>
        </View>
    )
}

export default CarouselComponent;