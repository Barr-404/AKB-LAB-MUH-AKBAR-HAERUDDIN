// File: app/tabs/profil.tsx

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const profilePic = require("../../assets/images/gojo.png");

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Animatable.View
        animation="fadeInDown"
        duration={800}
        style={styles.headerBox}
      >
        <Text style={styles.headerText}>Data Profil</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={300}
        duration={900}
        style={styles.cardBox}
      >
        <Image source={profilePic} style={styles.avatar} />
        <Text style={styles.fullName}>M. FIKRI HAIKAL AYATULLAH</Text>

        <View style={styles.detailBlock}>
          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.value}>1056111002</Text>
        </View>

        <View style={styles.detailBlock}>
          <Text style={styles.label}>Kelas:</Text>
          <Text style={styles.value}>A2</Text>
        </View>

        <View style={styles.detailBlock}>
          <Text style={styles.label}>Jurusan:</Text>
          <Text style={styles.value}>Teknik Informatika</Text>
        </View>

        <View style={styles.detailBlock}>
          <Text style={styles.label}>Fakultas:</Text>
          <Text style={styles.value}>Teknik</Text>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eef6ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerBox: {
    marginBottom: 24,
    padding: 12,
    backgroundColor: "#4a90e2",
    borderRadius: 10,
    elevation: 4,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  cardBox: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 16,
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: "#4a90e2",
  },
  fullName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  detailBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 6,
  },
  label: {
    fontWeight: "bold",
    color: "#4a4a4a",
  },
  value: {
    color: "#2a2a2a",
  },
});
