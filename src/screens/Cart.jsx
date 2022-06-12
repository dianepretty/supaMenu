import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { addOrderInfo } from "../services/RestaurantService";

export default function Cart({ navigation, item }) {
  const [items, setItems] = useState([]);

  const changeQuantity = (index, op) => {
    let items_temp = [...items];
    items_temp[index].quantity += op;
    if (items_temp[index].quantity < 1) {
      items_temp.splice(index, 1);
    }
    setItems(items_temp);
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].quantity * items[i].unitPrice;
    }
    return formatPrice(total);
  };

  const formatPrice = (price) => {
    let n_price = price.toString();
    for (let p = n_price.length; p > 2; p--) {
      if (p % 3 == 0) {
        n_price = n_price.slice(0, p - 1) + "," + n_price.slice(p - 1);
      }
    }
    return n_price;
  };

  const addOrder = () => {
    let order = {
      orderDetails: items.map((i) => ({
        item: i.id,
        quantity: i.quantity,
      })),
      orderType: "PICK_AND_GO",
      seat: 0,
      status: "ORDERING",
    };
    addOrderInfo(order)
      .then((res) => navigation.navigate("Payment", { orderInfo: res.id }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (item) {
      let index = items.findIndex((x) => x.id === item.id);
      if (index > -1) {
        let items_temp = [...items];
        items_temp[index].quantity += 1;
        setItems(items_temp);
      } else {
        setItems(items.concat({ ...item, quantity: 1 }));
      }
    }
  }, [item]);

  return (
    <View style={styles.container}>
      <View style={{ paddingRight: 30 }}>
        <Text style={styles.r_name}>Choose Kigali</Text>
        <Text style={styles.title}>Drinks</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <View onPress={() => {}} style={styles.resto} key={item.id + index}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://ditech.media/wp-content/uploads/2020/05/pancakes.jpg",
                }}
              />
              <View style={styles.r_content}>
                <Text style={styles.r_menu}>{item.name}</Text>
                <Text style={{ fontSize: 17, fontFamily: "DMSans_700Bold" }}>
                  {item.description} - {item.id}??
                </Text>
                <Text style={styles.price}>Frw {item.unitPrice}</Text>
                <View style={styles.counter}>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 2 }}
                    onPress={() => changeQuantity(index, -1)}
                  >
                    <AntDesign name="minus" size={16} color="#f9b461" />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16, paddingHorizontal: 6 }}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 2 }}
                    onPress={() => changeQuantity(index, 1)}
                  >
                    <AntDesign name="plus" size={16} color="#f9b461" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text>Cart is empty</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.details}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={[styles.text, { fontSize: 16 }]}>more drinks</Text>
        <AntDesign
          name="arrowright"
          size={18}
          color="orange"
          style={{ marginTop: 2, marginLeft: 8 }}
        />
      </TouchableOpacity>
      <View style={styles.total}>
        <Text style={[{ fontSize: 20 }, styles.text]}>Total</Text>
        <Text style={[{ fontSize: 20 }, styles.text]}>Frw {getTotal()}</Text>
      </View>
      <TouchableOpacity style={styles.ibtn} onPress={addOrder}>
        <Text style={styles.ibtn_text}>Proceed to checkout</Text>
      </TouchableOpacity>
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
  title: {
    color: "#f9b461",
    fontWeight: "400",
    fontSize: 18,
    marginTop: 8,
    textAlign: "right",
    fontFamily: "DMSans_400Regular",
  },
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
    position: "relative",
  },
  // r_name: { fontWeight: "bold", fontSize: 18, marginTop: 5 },
  r_name: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "right",
    fontFamily: "DMSans_700Bold",
  },
  r_menu: {
    fontSize: 16,
    marginTop: 2,
    fontFamily: "DMSans_400Regular",
  },
  counter: {
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    padding: 2,
    borderRadius: 5,
  },
  price: {
    color: "#f9b461",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 6,
  },
  details: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "orange",
    fontFamily: "DMSans_700Bold",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  ibtn_text: {
    color: "white",
    fontFamily: "DMSans_500Medium",
    fontSize: 18,
    textAlign: "center",
  },
  ibtn: {
    backgroundColor: "orange",
    paddingVertical: 15,
    marginVertical: 30,
    borderRadius: 10,
    width: "100%",
  },
});
