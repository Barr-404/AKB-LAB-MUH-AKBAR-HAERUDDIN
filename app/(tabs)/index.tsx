import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
      <Text style={{ fontSize: 100, marginBottom: 10 }}>
        Daftar 10 Ikon Baru:
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <AntDesign name="pluscircleo" size={500} color="black" />
        <AntDesign name="infocirlceo" size={500} color="black" />
        <Entypo name="controller-play" size={500} color="black" />
        <Entypo name="clapperboard" size={500} color="black" />
        <EvilIcons name="location" size={500} color="black" />
        <EvilIcons name="sc-facebook" size={500} color="black" />
        <Feather name="camera" size={500} color="black" />
        <Feather name="moon" size={500} color="black" />
        <FontAwesome name="music" size={500} color="black" />
        <FontAwesome name="book" size={500} color="black" />
      </View>
    </ScrollView>
  );
}
