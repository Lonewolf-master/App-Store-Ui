import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function GradientButton(props: any) {
  return (
    <LinearGradient colors={["rgba(9, 181, 211, 0.9)","rgba(58, 131, 244, 0.9)"]}
        className={`rounded-full ${props.containerClass}`}
        end={{x:1, y:1}}
        start={{x: 0.1, y: 0.2}}>

        <TouchableOpacity   className={`py-4 px-8  ${props.buttonClass}`}>
            <Text className='text-white font-bold'>
                {props.value}
            </Text>
        </TouchableOpacity>

    </LinearGradient>
  )
}