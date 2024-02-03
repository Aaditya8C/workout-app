import { View, Text } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const sliderImages: any = [
  require("../assets/images/slide1.png"),
  require("../assets/images/slide2.png"),
  require("../assets/images/slide3.png"),
  require("../assets/images/slide4.png"),
];

const ImageSlider = () => {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={windowWidth}
      firstItem={1}
      itemWidth={windowWidth - 70}
      autoplayInterval={3000}
      slideStyle={{ display: "flex", alignItems: "center" }}></Carousel>
  );
};

const ItemCard = ({ item, index }: any, parallaxProps: any) => {
  return (
    <View style={{ width: windowWidth - 70, height: 200 }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}></ParallaxImage>
    </View>
  );
};
export default ImageSlider;
