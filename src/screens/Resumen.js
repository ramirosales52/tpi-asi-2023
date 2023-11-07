import React from "react"; 
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Image, Alert } from "react-native";
import { useTheme, Appbar, Text, Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { savePedido } from "../../api";

const Resumen = () => {

  const navigation = useNavigation();

  const theme = useTheme();

  const goBack = () => {
    navigation.navigate("Carrito"); 
  };

  const cart = useSelector((state) => state.cart.cart)

  const createPedido = () => {
    savePedido(cart)
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
        </ScrollView>
        <View style={{backgroundColor: theme.colors.inverseOnSurface, height: 80, padding: 16}}>
          <Button mode="contained" icon={'cart'} onPress={createPedido}>Hacer pedido</Button>
        </View>
      </View>
    </View>
  )
}

export default Resumen;