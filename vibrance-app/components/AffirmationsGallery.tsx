import { View, Text, FlatList, Pressable, Image } from 'react-native';
import React from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirmationCat';
import { Link, Href } from 'expo-router';

interface AffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const AffirmationsGallery = ({ title, previews }: AffirmationsGalleryProps) => {
    return (
        <View className="my-5">
            <View className="mb-2">
                <Text className="text-white font-bold text-xl">{title}</Text>
            </View>
            <View className="space-y-2">
                <FlatList
                    data={previews}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <Link href={`/affirmations/${item.id}` as Href<string>} asChild>
                            <Pressable>
                                <View className="h-36 w-32 rounded-md mr-4">
                                    <Image
                                       source={item.image}
                                        resizeMode="cover"
                                        className="w-full h-full"
                                    />
                                </View>
                            </Pressable>
                        </Link>
                    )}
                    horizontal
                />
            </View>
        </View>
    );
};

export default AffirmationsGallery;
