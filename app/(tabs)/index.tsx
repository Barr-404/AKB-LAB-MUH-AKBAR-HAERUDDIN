import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const bas69GenerateImagePairs = () => {
  const baseNIM = "10584110";
  const suffix = "22";
  const baseURL = "https://simak.unismuh.ac.id/upload/mahasiswa/";
  const query = "_.jpg?1751871539";
  const altURL =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHVzYzJ1bjJiaGFwcmx6cjduNHk1cjk0djc4bm55czVxczNsMzM4MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zkNBtlymM6zX4DndrU/giphy.gif";

  const pairs = [];

  for (let i = 46; i <= 54; i++) {
    const nim = `${baseNIM}${i}${suffix}`;
    const main = `${baseURL}${nim}${query}`;
    const alt = altURL;
    pairs.push({ main, alt });
  }

  return pairs.slice(0, 9); // ⬅️ Ambil hanya 9 gambar (3x3)
};

const bas69ImagePairs = bas69GenerateImagePairs();

export default function Bas69GambarGrid() {
  const [bas69States, setBas69States] = useState(
    bas69ImagePairs.map(() => ({ scale: 1, isAlt: false }))
  );

  const bas69HandlePress = (index: number) => {
    setBas69States((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newScale = item.scale < 2 ? item.scale * 1.2 : 2;
        return {
          scale: newScale,
          isAlt: !item.isAlt,
        };
      })
    );
  };

  return (
    <View style={bas69Styles.container}>
      <ScrollView contentContainerStyle={bas69Styles.grid}>
        {bas69ImagePairs.map((pair, index) => (
          <Pressable key={index} onPress={() => bas69HandlePress(index)}>
            <Image
              source={{ uri: bas69States[index].isAlt ? pair.alt : pair.main }}
              style={[
                bas69Styles.image,
                {
                  transform: [{ scale: bas69States[index].scale }],
                },
              ]}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const bas69Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f0ff", // 💠 Latar belakang seluruh layar jadi biru muda
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: Dimensions.get("window").width / 3 - 20,
    height: Dimensions.get("window").width / 3 - 20,
    margin: 5,
    borderRadius: 10,
    resizeMode: "cover",
    backgroundColor: "#e0f0ff", // 💠 Background loading
    borderWidth: 3,
    borderColor: "#ffc107", // 💛 Bingkai kuning
  },
});
