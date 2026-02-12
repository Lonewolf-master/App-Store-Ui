import { View, Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { HeartIcon, ArrowDownTrayIcon } from 'react-native-heroicons/solid'
import { storeColors } from '@/theme/storeColors'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
// import  ArrowDownTrayIcon  from '@expo/vector-icons/Ionicons'

export default function GameCard({ game }: { game: any}) {

    const { width, height } = useWindowDimensions();
    const [isFavourite, setFavourite] = useState(false)

  return (
    <View className='mr-4 h-[70%] relative' style={{width: width*0.85, height: height*0.32}}> 

      <Image resizeMode='cover' source={game.image} className='w-full h-full rounded-3xl'></Image>

      <LinearGradient
            colors={["transparent","rgba(0, 0, 0 ,0.6)"]}
            className='absolute p-4 h-full w-full flex justify-between rounded-3xl' >

        {/* Game Title */}
        <View className='flex-row justify-end'>
            <TouchableOpacity onPress={()=>{setFavourite(!isFavourite)}}
                className='p-3 rounded-full ' 
                style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
            >
                
                <HeartIcon size='25' color={isFavourite ? storeColors.redHeart : "white"} />

            </TouchableOpacity>
        </View>

        {/* Star Rating */}
        <View>
            <StarRatingDisplay  
                starSize={25} 
                maxStars={5}
                rating={game.stars}
                color="#FFB800"        // A deeper, richer gold/yellow
                emptyColor="#D1D5DB" // Light gray for empty stars
                />
            <Text className='ml-2 text-2xl font-bold text-gray-300'>
                {game.title}
            </Text>
            <View className='flex-row items-center gap-x-2 ml-2'>
                <ArrowDownTrayIcon size={20} color="lightgray"/>
                <Text className='text-sm text-gray-300 font-semibold'>
                    {game.downloads} Downloads
                </Text>
            </View>
        </View>
      </LinearGradient>
   
    </View>
  )
}