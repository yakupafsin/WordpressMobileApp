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
  scrollViewContainer: {
    marginTop: 20,
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
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#ddd",
    borderRadius: 8,
    padding: 10,
  },
  subContainer: {
    width: "70%",
    paddingHorizontal: 10,
  },
  image: {
    width: "30%",
    height: 100,
    alignSelf: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  excerpt: {
    fontSize: 16,
  },
});

export const imageCarouselStyle = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  imageBackground: {
    flex: 1,
    height: 200,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for the darkness
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});

export const htmlTagStyles = {
  tagStyles: {
    p: {},
  },
  baseFontStyle: {},
} satisfies WebViewStyle;
