import { ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.name, styles.primary]}>
        Alif Ryanto Rahman{"\n"}105841105022
      </Text>

      <Text style={[styles.name, styles.style1]}>
        Erika Yanti{"\n"}105841105122
      </Text>

      <Text style={[styles.name, styles.style2]}>
        Zulkifli{"\n"}105841105222
      </Text>

      <Text style={[styles.name, styles.style3]}>
        Fifiana{"\n"}105841105322
      </Text>

      <Text style={[styles.name, styles.style4]}>
        MUH. AKBAR HAERUDDIN{"\n"}105841104622
      </Text>

      <Text style={[styles.name, styles.style5]}>
        Agustiana{"\n"}105841105522
      </Text>

      <Text style={[styles.name, styles.style6]}>
        Dia Rahmatillah{"\n"}105841105622
      </Text>

      <Text style={[styles.name, styles.style7]}>
        Juliani{"\n"}105841105722
      </Text>

      <Text style={[styles.name, styles.style8]}>
        Azzah Aulia Syarif{"\n"}105841105822
      </Text>

      <Text style={[styles.name, styles.style9]}>
        Syauqiah Mujahida Yahya{"\n"}105841105922
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  name: {
    fontSize: 20,
    backgroundColor: "#ffffff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 3, // untuk shadow Android
    shadowColor: "#000", // untuk shadow iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  primary: {
    fontFamily: "bitcount-medium",
    color: "#1e40af",
    fontSize: 24,
  },
  style1: { fontFamily: "bitcount-prop-regular" },
  style2: { fontFamily: "bitcount-extrabold" },
  style3: { fontFamily: "bitcount-variable" },
  style4: { fontFamily: "bitcount-prop-variable" },
  style5: { fontFamily: "bitcount-single-variable" },
  style6: { fontFamily: "inter-variable" },
  style7: { fontFamily: "inter-extrabold" },
  style8: { fontFamily: "opensans-bold" },
  style9: { fontFamily: "opensans-italic-variable" },
});
