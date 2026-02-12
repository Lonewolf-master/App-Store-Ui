import { View, Text, TouchableOpacity, Image, useWindowDimensions  } from 'react-native'
import { storeColors } from '../theme/storeColors'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { ArrowDownTrayIcon } from 'react-native-heroicons/solid'
import GradientButton from '@/components/gradientButton'
import React, { useState } from 'react'

export default function GameList({game}:{game:any}) {
    const { width, height } = useWindowDimensions();

    const [selectedGame, setSelectedGame] = useState(null);
    let bg = game.id === selectedGame? 'rgba(255,255,255,0.4)': 'transparent';

  return (
    <View>
       <TouchableOpacity 
            onPress={()=> !selectedGame? setSelectedGame(game.id): setSelectedGame(null)}
            className='mx-4 p-2 mb-2 flex-row items-center rounded-3xl'
            style={{backgroundColor: bg}}>

            <Image source={game.image} className='rounded-2xl' style={{width: width*0.2, height: height*0.1}}></Image>

            <View className='flex-1 flex justify-center  gap-y-3'>
 
                <Text style={{color: storeColors.text}} className='font-semibold pl-3 text-lg'>
                    {game.title}
                </Text>

                <View className='flex-row gap-x-3 '>

                        <View className='flex-row items-center'>
                            <StarRatingDisplay 
                                    maxStars={1} 
                                    starSize={25} 
                                    rating={1.0}
                                    color='#FFB800'/>
                            <Text className='font-semibold text-gray-700'>
                                {game.stars} Stars
                            </Text>
                        </View>

                        <View className='flex-row gap-x-3 items-center'>
                            <ArrowDownTrayIcon size={20} color='blue' />
                            <Text className='text-gray-700 font-semibold'>
                                {game.downloads}
                            </Text>
                        </View>

                </View>
            </View>

            <View className='flex justify-center items-center'>
                <GradientButton value='Play' buttonClass='py-4 px-8'  />
            </View>
        </TouchableOpacity>
    </View>
  )
}