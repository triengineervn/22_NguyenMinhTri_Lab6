import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
const ChatScreen = ({ navigation, route }) => {
  const cart = route.params;
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
        <Text style={[styles.title, { color: "white" }]}>Chat</Text>
        <Entypo
          name="shopping-cart"
          color="white"
          size={25}
          onPress={null}
          style={{ marginRight: 24 }}
        />
      </View>
    );
  };

  const ItemData = ({ desc, img, shop }) => {
    return (
      <SafeAreaView style={styles.item}>
        <View style={{ flexDirection: "row" }}>
          <Image source={img} style={{ width: "100%", height: 120 }}></Image>
          <View style={{ flexDirection: "column", marginStart: 12 }}>
            <Text style={styles.subtitle}>{desc}</Text>
            <Text style={styles.filter}>Shop: {shop}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                borderRadius: 5,
                marginTop: 5,
              }}
            >
              <Text
                style={[
                  styles.subtitle,
                  { color: "white", margin: 12, textAlign: "center" },
                ]}
              >
                Chat
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <Header />
      <Text style={styles.text}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <ItemData desc={item.desc} img={item.img} shop={item.shop}></ItemData>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default ChatScreen;

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
    fontSize: 16,
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
    fontSize: 18,
  },
});
