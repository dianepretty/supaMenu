import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Restaurants({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Restaurant</Text>
      <View style={{ marginTop: 35 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Resto", {})}
          style={styles.resto}
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://ditech.media/wp-content/uploads/2020/05/pancakes.jpg",
            }}
          />
          <View style={styles.r_content}>
            <Text style={styles.r_name}>Choose Kigali</Text>
            <Text style={{ fontSize: 16, marginTop: 8 }}>
              World,African,Pizzeria,Coffee
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.resto}>
          <Image
            style={styles.image}
            source={{
              uri: "https://ditech.media/wp-content/uploads/2020/05/pancakes.jpg",
            }}
          />
          <View style={styles.r_content}>
            <Text style={styles.r_name}>Choose Kigali</Text>
            <Text style={{ fontSize: 16, marginTop: 8 }}>
              World,African,Pizzeria,Coffee
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffefe",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: { color: "#f9b461", fontWeight: "600", fontSize: 18, marginTop: 20 },
  image: {
    width: "25%",
    height: 80,
    borderRadius: 12,
  },
  resto: {
    flexDirection: "row",
    backgroundColor: "#F5F7FA",
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
  },
  r_content: {
    width: "70%",
    marginLeft: "5%",
  },
  r_name: { fontWeight: "bold", fontSize: 18, marginTop: 5 },
});
