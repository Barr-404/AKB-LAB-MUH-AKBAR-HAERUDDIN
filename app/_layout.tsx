import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#1c92d2" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: (props) => <Feather name="home" {...props} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Tentang",
          tabBarIcon: (props) => <Feather name="info" {...props} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: (props) => <Feather name="user" {...props} />,
        }}
      />
    </Tabs>
  );
}