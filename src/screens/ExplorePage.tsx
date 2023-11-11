import WordPressPost from "@components/WordPressPost";
import { usePosts } from "@storage/hooks/usePosts"; // Adjust the import path based on your project structure
import { decodeText } from "@utils/helper";
import React, { useEffect } from "react";
import { View, ScrollView, RefreshControl } from "react-native";

const ExplorePage: React.FC = () => {
  const { posts, loading, error, refetchPosts } = usePosts();

  useEffect(() => {
    // Do something with posts, loading, error
  }, [posts, loading, error]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetchPosts} />
        }
      >
        {posts.map((item, index) => (
          <WordPressPost
            imageUrl={item.jetpack_featured_media_url}
            title={decodeText(item.title.rendered)}
            excerpt={decodeText(item.excerpt.rendered)}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ExplorePage;
