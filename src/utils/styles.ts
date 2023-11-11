import { StyleSheet } from "react-native";
import {
  MixedStyleDeclaration,
  MixedStyleRecord,
} from "react-native-render-html";

type WebViewStyle = {
  tagStyles: MixedStyleRecord;
  baseFontStyle: MixedStyleDeclaration;
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});

export const postStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  excerpt: {
    fontSize: 16,
  },
});

export const htmlTagStyles = {
  tagStyles: {
    p: {},
  },
  baseFontStyle: {},
} satisfies WebViewStyle;
