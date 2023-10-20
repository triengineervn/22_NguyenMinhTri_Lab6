import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { Images } from "../components/Images";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const DATA = [
  {
    id: 1,
    desc: "Ca lẩu nấu mì mini",
    shop: "Devang",
    img: Images.ca_nau_lau,
  },
  {
    id: 2,
    desc: "1kg khô gà bơ tỏi",
    shop: "LTD Food",
    img: Images.ga_bo_toi,
  },
  {
    id: 3,
    desc: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
    img: Images.xa_can_cau,
  },
  {
    id: 4,
    desc: "Đồ chơi dạng mô hình",
    shop: "Thế giới đồ chơi",
    img: Images.do_choi_dang_mo_hinh,
  },
  {
    id: 5,
    desc: "Lãnh đạo giản đơn",
    shop: "Minh Long Shop",
    img: Images.lanh_dao_gian_don,
  },
  {
    id: 6,
    desc: "Hiểu lòng trẻ con",
    shop: "Minh Long Shop",
    img: Images.hieu_long_con_tre,
  },
  {
    id: 7,
    desc: "Donald Trump Thiên tài lãnh đạo",
    shop: "Minh Long Shop",
    img: Images.trump_1,
  },
  {
    id: 8,
    desc: "Cáp chuyển từ Cổng USB sang PS2...",
    shop: "Shop Điện tử Phong",
    img: Images.giacchuyen_1,
  },
  {
    id: 9,
    desc: "Cáp chuyển từ Cổng USB sang PS2...",
    shop: "Shop Điện tử Long",
    img: Images.daynguon_1,
  },
  {
    id: 10,
    desc: "Cáp chuyển từ Cổng USB sang PS2...",
    shop: "Shop Điện tử Quang",
    img: Images.dauchuyendoipsps2_1,
  },
  {
    id: 11,
    desc: "Cáp chuyển từ Cổng USB sang PS2...",
    shop: "Shop Điện tử Hải",
    img: Images.dauchuyendoi_1,
  },
  {
    id: 12,
    desc: "Cáp chuyển từ Cổng USB sang PS2...",
    shop: "Shop Điện tử ABC",
    img: Images.carbusbtops2_1,
  },
  {
    id: 13,
    desc: "Cáp chuyển từ Cổng USB sang PS2...",
    shop: "Shop Điện tử XYZ",
    img: Images.daucam_1,
  },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const groupedData = cart.reduce((acc, item) => {
    const existingItem = acc.find((group) => group.id === item.id);
    if (existingItem) {
      existingItem.count += item.count;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);
  const filteredCountZero = groupedData.filter((item) => item.count !== 0);

  const [seen, setSeen] = React.useState([]);

  const addToSeen = (product) => {
    setSeen((prevCart) => [...prevCart, product]);
  };

  const groupedSeen = seen.reduce((acc, item) => {
    const existingItem = acc.find((group) => group.id === item.id);
    if (existingItem) {
      existingItem.count += item.count;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const [search, setSearch] = React.useState("");
  const filteredData = DATA.filter((item) =>
    item.desc.toLowerCase().includes(search.toLowerCase())
  );
  const Header = () => {
    return (
      <View style={styles.header}>
        <TextInput
          autoFocus={true}
          style={{
            height: 40,
            width: 200,
            marginStart: 45,
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
          left={<TextInput.Icon icon="magnify" color={"black"} />}
          placeholder="Search here"
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
        />
        <Entypo
          name="shopping-cart"
          color="white"
          size={25}
          onPress={() => {
            navigation.push("Details", { filteredCountZero });
          }}
          style={{
            marginStart: 60,
          }}
        >
          {filteredCountZero.length > 0 ? (
            <View
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                backgroundColor: "red",
                borderRadius: 45,
                height: 10,
                width: 10,
              }}
            />
          ) : null}
        </Entypo>
        <Menu>
          <MenuTrigger
            children={
              <Entypo
                name="dots-three-horizontal"
                color="white"
                size={25}
                style={{ marginStart: 30 }}
              />
            }
          />
          <MenuOptions>
            <MenuOption
              onSelect={() => navigation.push("Chat", groupedSeen)}
              text="Chat"
              style={{ padding: 12 }}
            />
          </MenuOptions>
        </Menu>
      </View>
    );
  };

  const ItemData = ({ id, desc, img, shop }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    return (
      <SafeAreaView style={styles.item}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={img}
                style={{ width: "100%", height: 120 }}
              ></Image>
              <Text style={styles.filter}>{desc}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo name="star" size={13} color={"#FBE41B"}></Entypo>
                <Entypo name="star" size={13} color={"#FBE41B"}></Entypo>
                <Entypo name="star" size={13} color={"#FBE41B"}></Entypo>
                <Entypo name="star" size={13} color={"#FBE41B"}></Entypo>
                <Entypo name="star" size={13} color={"#b4b4b4"}></Entypo>
                <Text style={styles.text}> (15)</Text>
              </View>
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
              <Text style={styles.filter}>
                Số lượng:
                <Entypo
                  name="circle-with-plus"
                  size={16}
                  style={{ margin: 8 }}
                  onPress={increment}
                ></Entypo>
                <Text style={styles.subtitle}>{count}</Text>
                <Entypo
                  name="circle-with-minus"
                  size={16}
                  style={{ margin: 8 }}
                  onPress={decrement}
                ></Entypo>
              </Text>
              <View style={{ flexDirection: "row", marginTop: 24 }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    backgroundColor: "#b4b4b4",
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    addToSeen({ id, desc, img, shop });
                  }}
                >
                  <Text style={styles.text}>Đóng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    backgroundColor: "#2196F3",
                    marginStart: 50,
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    addToCart({ id, desc, img, count });
                    addToSeen({ id, desc, img, shop });
                  }}
                >
                  <Text style={[styles.text, { color: "white" }]}>
                    Thêm vào giỏ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ padding: 8 }}
        >
          <Image source={img} style={{ width: "100%", height: 120 }}></Image>
          <Text style={styles.filter}>{desc}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="star" size={13} color={"#FBE41B"}></Entypo>
            <Entypo name="star" size={13} color={"#FBE41B"}></Entypo>
            <Entypo name="star" size={13} color={"#FBE41B"}></Entypo>
            <Entypo name="star" size={13} color={"#FBE41B"}></Entypo>
            <Entypo name="star" size={13} color={"#b4b4b4"}></Entypo>
            <Text style={styles.text}> (15)</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <Text style={styles.subtitle}>69.900 đ</Text>
            <Text style={{ marginStart: 12 }}>-39%</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  return (
    <View style={styles.background}>
      <Header />
      <FlatList
        horizontal={false}
        numColumns={2}
        style={{ margin: 12 }}
        data={filteredData}
        renderItem={({ item }) => (
          <ItemData
            id={item.id}
            desc={item.desc}
            img={item.img}
            shop={item.shop}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#1BA9FF",
  },
  background: { flex: 1, backgroundColor: "rgbo(0, 0, 0, 0.9)" },
  subtitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  item: {
    backgroundColor: "white",
    borderRadius: 5,
    margin: 8,
    alignItems: "start",
    width: "45%",
  },
  filter: {
    paddingVertical: 8,
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
