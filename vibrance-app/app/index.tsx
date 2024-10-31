
import { View, Text, ImageBackground } from 'react-native'
import React from 'react';


import  stockImagesTwoTreeHalo from "@assets/Meditation-Images/pexels-timmossholder-tree-halo.jpg";
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from 'components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from 'components/AppGradient';
 
const App = () => {
  const router = useRouter();
  return (
    <View className='flex-1'>
      <ImageBackground 
          source={stockImagesTwoTreeHalo} 
          resizeMode="cover" 
          className="flex-1"
          >
           
            <AppGradient colors={[""]}>
              <SafeAreaView className='flex-1 mx-5 my-12 justify-between'>
                <View>
                    <Text className='text-center text-white font-bold text-4xl'>
                      Vibrance
                      </Text>
                    <Text className='text-center text-white text-regular text-2xl mt-3'>
                      A touch of vibrancy for all
                      </Text>
                </View>
                <View>
                  <CustomButton onPress={() => router.push("/nature-meditate")}
                  title = 'Get started'
                  />
                </View>
                </SafeAreaView>
            </AppGradient>
          
      </ImageBackground>
    </View>
  );
};

export default App;

//EXPERIMENTAL CODE

/*
import React, { useRef, useEffect } from 'react';
import { View, Text, ImageBackground, SafeAreaView, Animated, Dimensions, StyleSheet } from 'react-native';
import { PanResponder } from 'react-native';

const { width, height } = Dimensions.get('window');

const stockImagesTwoTreeHalo = require('/home/deepb__/Clones/vibrance/vibrance-app/assets/Meditation-Images/pexels-timmossholder-tree-halo.jpg');

const App: React.FC = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const handlePanResponderGrant = () => {
    pan.setOffset({
      x: pan.x._value,
      y: pan.y._value,
    });
    pan.setValue({ x: 0, y: 0 });
  };

  const handlePanResponderRelease = () => {
    pan.flattenOffset();
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: handlePanResponderRelease,
    })
  ).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1.5, // Adjust zoom level here
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              { scale: scale },
              { translateX: pan.x },
              { translateY: pan.y },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <ImageBackground
          source={stockImagesTwoTreeHalo}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <SafeAreaView style={styles.safeArea}>
            <Text style={styles.text}>Hello World</Text>
          </SafeAreaView>
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedView: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default App;
*/