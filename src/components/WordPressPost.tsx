import { WordPressPostProps } from "@components/types";
import { htmlTagStyles, postStyles } from "@utils/styles";
import React from "react";
import { View, Text, Image } from "react-native";

import HTMLRenderer from "./HtmlRenderer";
const WordPressPost: React.FC<WordPressPostProps> = ({
  title,
  imageUrl,
  excerpt,
}) => {
  const defaultTextProps = {
    numberOfLines: 2,
  };
  return (
    <View style={postStyles.container}>
      <Image source={{ uri: imageUrl }} style={postStyles.image} />
      <View style={postStyles.subContainer}>
        <Text style={postStyles.title}>{title}</Text>
        <HTMLRenderer
          tagsStyles={htmlTagStyles.tagStyles}
          htmlContent={excerpt}
          defaultTextProps={defaultTextProps}
        />
      </View>
    </View>
  );
};

export default WordPressPost;
