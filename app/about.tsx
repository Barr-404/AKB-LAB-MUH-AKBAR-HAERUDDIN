import { Text, View, ScrollView, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Octicons } from '@expo/vector-icons';

export default function TabIndex() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animatable.View 
        animation="bounceInUp" 
        delay={100} 
        duration={1500}
        style={styles.card}
      >
        <View style={styles.titleContainer}>
          <Octicons name="info" size={3} color="#00ff80ff" style={styles.icon} />
          <Text style={styles.title}>tentang aplikasi</Text>
        </View>

        <Text style={styles.description}>
          Aplikasi ini dikembangkan sebagai bagian dari tugas mata kuliah Pengembangan Aplikasi Mobile.

          {"\n\n"}
          <Text style={styles.subtitle}>Fung untuk aplikasi:</Text>
          {"\n\n"}
          <Text style={styles.subtitle}>• Rumah:</Text> Menyajikan informasi umum tentang Universitas Muhammadiyah Makassar, sebagai kampus tempat pengembangan aplikasi ini dilakukan.
          
          {"\n\n"}
          <Text style={styles.subtitle}>• Tentang:</Text> Menjelaskan secara detail mengenai tujuan pembuatan aplikasi, teknologi yang digunakan (React Native dan Expo), serta struktur dan fungsi dari setiap halaman dalam aplikasi.
          
          {"\n\n"}
          <Text style={styles.subtitle}>• Profil:</Text> Menampilkan data pengguna seperti nama lengkap, NIM, kelas, program studi, fakultas, dan departemen sebagai simulasi fitur data diri dalam aplikasi.

          {"\n\n"}
          Dengan membangun aplikasi ini, mahasiswa diharapkan mampu menerapkan teori yang dipelajari di kelas ke dalam proyek nyata berbasis React Native dan memahami proses kerja pembuatan aplikasi lintas platform secara praktis dan efisien.
        </Text>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  card: {
    backgroundColor: '#000000ff',
    borderRadius: 30,
    padding: 25,
    width: '100%',
    maxWidth: 400,
    elevation: 10,
    shadowColor: '#6eb6c0ff',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7c7af0ff',
  },
  subtitle: {
    fontWeight: 'bold',
    color: '#2f2f72ff',
  },
  description: {
    fontSize: 20,
    color: '#5e2e2eff',
    lineHeight: 24,
    textAlign: 'justify',
  },
});