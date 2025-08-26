import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

export default function TabIndex() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://news.unismuh.ac.id/wp-content/uploads/2023/04/51231776_108783916909288_5111860601001345024_n.jpg' }} 
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
        <Text style={styles.description}>
          Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah perguruan tinggi swasta yang berdiri sejak 19 Juni 1963 dan merupakan bagian dari amal usaha Muhammadiyah. Kampus ini berlokasi di Jl. Sultan Alauddin No. 259, Makassar, dan dikenal sebagai salah satu PTS unggulan di Indonesia Timur. 
          {'\n\n'}
          Unismuh memiliki 7 fakultas dengan lebih dari 34 program studi serta program pascasarjana. Pada tahun 2024, Unismuh menjadi perguruan tinggi Muhammadiyah pertama di kawasan Indonesia Timur yang meraih Akreditasi Unggul dari BAN-PT. 
          {'\n\n'}
          Fasilitas kampus meliputi gedung Iqra Tower, Masjid Subulussalam Al-Khoory, Balai Sidang Mukhtamar, perpustakaan modern, dan rusunawa mahasiswa. Civitas akademikanya mencakup lebih dari 22.000 mahasiswa dan lebih dari 200 dosen. 
          {'\n\n'}
          Unismuh juga aktif menjalin kerja sama internasional serta meraih prestasi nasional, seperti dosen terbaik versi SINTA dan kampus penerima program KMMI dari Kemendikbud. Pendaftaran mahasiswa baru dibuka setiap tahun dengan berbagai jalur termasuk CBT dan nilai rapor, serta tersedia beasiswa unggulan seperti Bibit Unggul Persyarikatan.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff8e1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#e3f2fd',
    borderRadius: 24,
    padding: 26,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#1976d2',
    shadowOpacity: 0.28,
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 14,
    width: '100%',
    maxWidth: 400,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 18,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#1976d2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 14,
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
    letterSpacing: 1,
  },
  description: {
    fontSize: 16,
    color: '#37474f',
    textAlign: 'justify',
    lineHeight: 26,
    fontFamily: 'serif',
  },
});