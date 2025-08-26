// File: app/tabs/profil.tsx

import { Image, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

// import statis supaya bundler tahu asset-nya
// di app/profil.tsx
const gojoImage = require("../assets/images/gmabr_gojo.jpg");

export default function Profile() {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" delay={300} style={styles.title}>
        Profil USER
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.profileCard}
      >
        <Image source={gojoImage} style={styles.profileImage} />
        <Text style={styles.name}>MUH AKBAR HAERUDDIN</Text>
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
    borderColor: "#074072ff",
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
