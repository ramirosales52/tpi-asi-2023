import React from "react"; 
import { ScrollView, View, Image } from "react-native";
import { useTheme, Button, Text, Appbar } from "react-native-paper";
import { useNavigation  } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../CartReducer";
import EmptyCart from "../components/EmptyCart";
import QuantityButton from "../components/QuantityButton";

const Carrito = () => {

  let precioTotal = 0;

  const navigation = useNavigation();

  const goToMenu = () => {
    navigation.navigate("Menu"); 
  };

  const goToResumen = () => {
    navigation.navigate("Resumen"); 
  };

  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item))
  }

  const decreaseQuantity = (item) => {
    if(item.quantity > 1){
      dispatch(decrementQuantity(item))
    }
  }

  const itemsInCart = cart.length

  const theme = useTheme()

  return(
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Appbar.Header style={{backgroundColor: theme.colors.inverseOnSurface}} elevated={true}>
        <Appbar.Content title="Carrito" color={theme.colors.inverseSurface}/>
      </Appbar.Header>
      {(itemsInCart == 0) ? (
        <View style={{ flex: 1 }}>
          <EmptyCart onPress={goToMenu}/>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16, marginBottom: 0 }} showsVerticalScrollIndicator={false}>
            {cart.map((item, index) => { 
              precioTotal += item.precio * item.quantity;
              return (
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
                  <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{marginBottom: 5}} variant="titleMedium">${(item.precio)*(item.quantity)}</Text>
                    
                    <QuantityButton increaseQuantity={()=>increaseQuantity(item)} decreaseQuantity={()=>decreaseQuantity(item)} quantity={item.quantity}/>
                    
                  </View>   
                </View>
            )})}
          </ScrollView>
        <View style={{backgroundColor: theme.colors.inverseOnSurface, height: 80, padding: 16}}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%'}}>
            <View>
              <Text>Total:</Text>
              <Text>${precioTotal}</Text>
            </View>
            <Button mode="contained" icon={'check'} onPress={goToResumen}>Confirmar</Button>
          </View>
        </View>
      </View>
      )}

    </View>
  )
}

export default Carrito;

