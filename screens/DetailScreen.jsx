import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const DetailScreen = ({ navigation, route }) => {
  const cart = route.params?.filteredCountZero;
  console.log(cart);
  const Header = () => {
    return (
      <View style={styles.header}>
        <Entypo
          name="back"
          color="white"
          size={25}
          onPress={() => navigation.goBack()}
          style={{ marginStart: 24 }}
        ></Entypo>
        <Text style={[styles.title, { color: "white" }]}>Giỏ hàng</Text>
        <Entypo
          name="dots-three-horizontal"
          color="white"
          size={25}
          style={{ marginRight: 24 }}
        />
      </View>
    );
  };

  const ItemData = ({ count, desc, img }) => {
    return (
      <SafeAreaView style={styles.item}>
        <View style={{ flexDirection: "row" }}>
          <Image source={img} style={{ width: "100%", height: 120 }}></Image>
          <View style={{ flexDirection: "column", marginStart: 12 }}>
            <Text style={styles.filter}>{desc}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Text style={styles.subtitle}>69.900 đ</Text>
              <Text style={{ marginStart: 12 }}>-39%</Text>
            </View>
            <Text style={styles.filter}>Số lượng: {count}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const totalCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <View style={styles.background}>
      <Header />
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <ItemData
            desc={item.desc}
            img={item.img}
            count={item.count}
          ></ItemData>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <View
        style={{
          padding: 12,
          position: "relative",
          bottom: 0,
          backgroundColor: "#ffffff",
          height: 100,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>Thành Tiền: </Text>
          <Text style={[styles.title, { color: "red" }]}>
            {69900 * totalCount} VNĐ
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "rgbo(0, 0, 0, 0.9)" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#1BA9FF",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  text: {
    marginHorizontal: 32,
    marginVertical: 16,
    fontSize: 20,
  },
  item: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 8,
    alignItems: "start",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  filter: {
    paddingVertical: 8,
    fontSize: 16,
  },
});
