import React, { useRef, useState } from "react"; 
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Image, Alert, Modal, StyleSheet, Pressable } from "react-native";
import { useTheme, Appbar, Text, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import LottieView from 'lottie-react-native';
import { savePedido } from "../../api";
import { resetCart } from "../../CartReducer";

const Resumen = () => {

  const navigation = useNavigation();
  const theme = useTheme();
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)

  const animation = useRef(null)

  const [modalVisible, setModalVisible] = useState(false);

  const goBack = () => {
    navigation.goBack(); 
  };

  const emptyCart = () => {
    dispatch(resetCart())
  }

  const createPedido = () => {
    savePedido(cart)
    setModalVisible(true)
    console.log("Pedido Realizado")
  }
  
  const goToMenu = () => {
    emptyCart()
    navigation.navigate("Menu")
    setModalVisible(false)
  }

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Appbar.Header style={{backgroundColor:theme.colors.inverseOnSurface}} elevated={true}>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Pedido" color={theme.colors.inverseSurface} />
      </Appbar.Header>
      <View style={{flex: 1}}>
        <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16, marginBottom: 0 }} showsVerticalScrollIndicator={false}>
          {cart.map((item, index) => (
            <View key={index} style={{
              backgroundColor: theme.colors.surfaceVariant, 
              height: 98, 
              paddingVertical: 12, 
              paddingHorizontal: 16,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 16,
              marginBottom: 12,
            }}>
              <View style={{flex: 1}}>
                <Image source={require('../assets/lata-coca.png')} resizeMode="contain" style={{width: 50, height: '100%'}} />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text>{item.nombre}</Text>
                <Text>${item.precio}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text variant="bodyLarge">x{item.quantity}</Text>
              </View>
            </View>
          ))}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <LottieView
                autoPlay
                loop={false}
                ref={animation}
                style={{
                  width: 200,
                  height: 200, 
                }}
                source={require('../assets/check_lottie.json')}
              />
                <Text style={{color: theme.colors.background}}>Pedido Realizado</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={goToMenu}>
                  <Text style={styles.textStyle}>Volver al menú</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </ScrollView>
        <View style={{backgroundColor: theme.colors.inverseOnSurface, height: 80, padding: 16}}>
          <Button mode="contained" icon={'cart'} onPress={createPedido}>Hacer pedido</Button>
        </View>
      </View>
    </View>
  )
}

export default Resumen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
