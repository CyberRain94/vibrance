import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import MEDITATION_GALLERY from '@/constants/meditation-gallery';
import AffirmationsGallery from '@/components/AffirmationsGallery';

const Affirmations = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className='text-zinc-50 text-3xl font-bold'>Rewire your beliefs with affirmations</Text>
          <View>
            {MEDITATION_GALLERY.map((g) => (
              <AffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;

