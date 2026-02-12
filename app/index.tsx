import { View, Text, ScrollView, TouchableOpacity,} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { cssInterop } from 'nativewind'
import {Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid'
import { storeColors } from '../theme/storeColors'
import GradientButton from '../components/gradientButton'
import {featured, games} from '../utils/data'
import GameCard from '@/components/gameCard'
// import {Link} from 'expo-router'
import GameList from '@/components/gameList'

    const categories = ['Action', 'Puzzle','Adventure', 'Racing', 'Education']


export default function Index() {

    cssInterop(LinearGradient,{className: 'style'})

    const [ activeCategory, setActiviCategory ] = useState('Action')

  return (

        <LinearGradient
            colors={ ['rgba(58, 131, 244, 0.4)', 'rgba(9, 181, 211, 0.4)']}
            className='w-full flex-1'>

                <SafeAreaView className='flex-1' >
                    {/* 1. Added flex-1 here so the safe area fills the screen */}
                    <View className='flex-1'>

                        {/* Navigation bar */}
                        <View className='flex-row justify-between items-center px-4'>
                            <Bars3CenterLeftIcon color={storeColors.text} size='35' />
                            <BellIcon color={storeColors.text} size='35'/>
                        </View>

                        {/* categories */}
                        <View className='mt-3 space-y-3 '>
                            <Text className=' ml-4 text-3xl font-bold' style={{color: storeColors.text}}>
                                Browse Games
                            </Text>
                            <View className='pl-4'>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {
                                            categories.map( cat => {
                                                
                                                if(cat === activeCategory){
                                                    //show gradient category
                                                    // lets create a gradient category buttom
                                                    return (
                                                        <GradientButton containerClass='m-2' key={cat} buttonClass ='' value={cat}/> 
                                                    )

                                                }else{
                                                    //show normal cartegory
                                                     return (
                                                        <TouchableOpacity key={cat}  onPress={()=> { setActiviCategory(cat)}}
                                                            className='bg-blue-200  py-4 px-8 rounded-full m-2  '>
                                                            <Text className='font-bold'>{cat}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                }
                                               
                                            } )
                                        }

                                </ScrollView>
                            </View>
                        </View>


                        {/* featured row */}
                        <View className='mt-2 gap-y-3'>
                            <Text style={{color: storeColors.text}} className='ml-4 text-2xl font-bold'>
                                Featured Games
                            </Text>
                            <View className='pl-4'>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        {
                                            featured.map( (item, index)=>{
                                                return (
                                                    <GameCard key={index} game={item} />
                                                )
                                            })
                                        }
                                </ScrollView>
                            </View>
                        </View>

                        {/* Top action games list  */}
                        <View className='flex-1 mt-3 '>
                            
                            <View className='mx-4 flex-row justify-between items-center'>

                                <Text className=' text-2xl font-bold' style={{color: storeColors.text}}>
                                    Top Action Games
                                </Text>  

                                <TouchableOpacity >
                                    <Text className=' text-blue-600 font-bold'>
                                        See All
                                    </Text>
                                </TouchableOpacity>

                            </View>
                          
                            <ScrollView 
                                showsVerticalScrollIndicator={false}>
                                    {
                                        games.map( (item, index)=>{
                                            return (
                                                <GameList key={index} game={item}/>
                                            )
                                        })
                                    }

                                </ScrollView>

                        </View>


                    </View>
                </SafeAreaView>
                    


        </LinearGradient>
  )
} 
