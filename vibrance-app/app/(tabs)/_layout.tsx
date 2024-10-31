import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import {Entypo,FontAwesome6}  from '@expo/vector-icons';

const TabsLayout = () => {
  return (
        <Tabs screenOptions = {{
                    headerShown:false,
                    tabBarActiveTintColor: Colors.primary,
              }}
        >
            <Tabs.Screen 
                name= "nature-meditate" 
                options={{
                    tabBarLabel: "Meditate",
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name = "flower"
                            size = {24}
                            color = {color}
                    />
                ),
            }}
            
        />
            <Tabs.Screen 
                name= "affirmations" 
                options={{
                    tabBarLabel: "Affirmations",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6
                            name = "hand-holding-heart"
                            size = {24}
                            color = {color}
                    />
                ),
            }}
            
        />
   </Tabs>
  );
};

export default TabsLayout