import { decodeText } from "@utils/helper";
import { imageCarouselStyle } from "@utils/styles";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";
interface ImageCarouselProps {
  featuredPosts: {
    id: number;
    title: {
      rendered: string;
    };
    jetpack_featured_media_url: string; // Replace with the actual field in your WordPress setup
    excerpt: {
      rendered: string;
    };
  }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ featuredPosts }) => {
  return (
    <Swiper
      style={imageCarouselStyle.wrapper}
      showsButtons={false}
      autoplay
      autoplayTimeout={4}
      activeDotColor="#fff"
      key={featuredPosts.length}
    >
      {featuredPosts.map((post, index) => (
        <View key={index}>
          <ImageBackground
            source={{ uri: post.jetpack_featured_media_url }}
            imageStyle={imageCarouselStyle.imageBackground}
          >
            <View style={imageCarouselStyle.overlay}>
              <Text style={imageCarouselStyle.title}>
                {decodeText(post.title.rendered)}
              </Text>
            </View>
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
