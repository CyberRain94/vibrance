import { View, Text, ImageBackground, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from '@/components/AppGradient';
import { router, useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from '@/components/CustomButton';
import {Audio} from 'expo-av';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/meditation-Data';
import Draggable from "react-native-draggable";

const Meditate = () => {
    const {id} = useLocalSearchParams();

    const [secondsRemaining, setSecondsRemaining] = useState(10);
    const [isMeditating, setMeditating] = useState(false);
    const [audioSound, setSound] = useState<Audio.Sound>();
    const [isPlayingAudio, setPlayingAudio] = useState(false);
  
    useEffect (()=> {
      let timerId: NodeJS.Timeout;

      //Exit
      if (secondsRemaining === 0) {
        setMeditating(false);
        return;
      }

      if (isMeditating) {
        timerId = setTimeout(()=> {
          setSecondsRemaining(secondsRemaining -1);
        }, 1000);
      }

      return () => {
        clearTimeout(timerId);
      }
    }, [secondsRemaining, isMeditating]);

    useEffect (() => {
      return () => {
        audioSound?.unloadAsync();
      }

    }, [audioSound]);
    
    const toggleMeditationSessionStatus = async () => {
        if (secondsRemaining === 0) setSecondsRemaining(10);

        setMeditating(!isMeditating);

        await toggleSound();
    };

    const toggleSound = async () => {
      const sound = audioSound ? audioSound : await initializeSound();

      const status = await sound?.getStatusAsync();
      
      if (status?.isLoaded && !isPlayingAudio) {
          await sound.playAsync();
          setPlayingAudio(true);
      } else {
        await sound.pauseAsync();
        setPlayingAudio(false);
      }
    }

    const initializeSound = async () => {
        const audioFileName = MEDITATION_DATA[Number(id) -1].audio;

      const { sound } = await Audio.Sound.createAsync(
        AUDIO_FILES[audioFileName]
      );

        setSound(sound);
        return sound;
    };

    //Format time left ensuring only two digits displayed
    const formatedTimeMinutes = String (
      Math.floor(secondsRemaining / 60)
    ).padStart(2, "0");

    const formatedTimeSeconds = String
    (secondsRemaining % 60).padStart(2, "0")

  return (
  
    <View className='flex-1'>
        <ImageBackground 
        source={MEDITATION_IMAGES[Number(id) -1]}
              resizeMode='cover' 
              className='flex-1'
        >
          <AppGradient colors = {['transparent', 'rgba(0, 0, 0, 0.3)']}>
              <Pressable 
                  onPress={() => router.back()} 
                  className='absolute top-16 left-6 z-10'
              >
                  <AntDesign name="leftcircleo" size={50} color="white" />
              </Pressable>
            
              <View className='flex-1 justify-center items-center'>
              <Draggable x={50} y={120}>
                <View className='backdrop-blur-xl bg-gray-400/70 rounded-2xl w-60 h-40 justify-center items-center'>
                  <Text className='text-4xl text-blue-800 font-rmono'>
                      {formatedTimeMinutes}:{formatedTimeSeconds}
                    </Text>
                </View>
                </Draggable>
              </View>
          
              <View className='flex-1 justify-end mb-5'>
                <CustomButton 
                    title='Start Meditation' 
                    onPress={toggleMeditationSessionStatus}
               />
               
                <CustomButton 
                    title='Adjust Duration' 
                    onPress={toggleMeditationSessionStatus}
                    containerStyles='mt-4'
               />
              </View>
          </AppGradient>
        </ImageBackground>
    </View>
   
  )
}

export default Meditate