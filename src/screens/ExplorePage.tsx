// ExplorePage.tsx
import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { usePosts } from "../services/storage/hooks/usePosts"; // Adjust the import path based on your project structure

const ExplorePage: React.FC = () => {
  const { posts, loading, error } = usePosts();
  console.log(posts);
  useEffect(() => {
    // Do something with posts, loading, error
  }, [posts, loading, error]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
};

export default ExplorePage;
