// File: app/tabs/profil.tsx

import { Image, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

// import statis supaya bundler tahu asset-nya
// di app/profil.tsx
const gojoImage = require("../assets/images/gmabr_gojo.jpg");

export default function Profile() {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" delay={200} style={styles.title}>
        Profil Pengguna
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUp"
        delay={400}
        style={styles.profileCard}
      >
        <Image source={gojoImage} style={styles.profileImage} />
        <Text style={styles.name}>M. FIKRI HAIKAL AYATULLAH</Text>
        {/* ... detail lainnya ... */}
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /* ... */
  },
  title: {
    /* ... */
  },
  profileCard: {
    /* ... */
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#9bd0ff",
  },
  name: {
    /* ... */
  },
  detail: {
    /* ... */
  },
  bold: {
    /* ... */
  },
});
