import React, { useEffect, useState } from "react"; 
import { View, ScrollView, RefreshControl, TouchableOpacity } from "react-native";
import { useTheme, Appbar, Text} from "react-native-paper";
import { useNavigation  } from "@react-navigation/native"
import { getPedidoItems } from "../../api";


const PedidoItems = ({ route }) => {
  console.log()
  const navigation = useNavigation()
  const theme = useTheme()

  const goBack = () => {
    navigation.goBack(); 
  };

  const [items, setItems] = useState([])

  const loadItems = async (id) => {
    const data = await getPedidoItems(id)
    setItems(data)
  }

  useEffect(() => {
    loadItems(route.params.id)
  }, [])

  console.log(items)

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Appbar.Header style={{backgroundColor: theme.colors.inverseOnSurface}} elevated={true}>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Pedido" color={theme.colors.inverseSurface} />
      </Appbar.Header>
      <View style={{flex: 1}}>
        <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16, marginBottom: 0 }} showsVerticalScrollIndicator={false}>
          {items.map((item, index) => (
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
              <Text>{item.itempedido_id}</Text>
              <Text>{item.product_name}</Text>
              <Text>${item.price}</Text>
              <Text>${item.subtotal}</Text>
              <Text>x{item.quantity}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={{backgroundColor: theme.colors.inverseOnSurface, height: 140, padding: 16}}>
          
        </View>
      </View>
    </View>
  );
}

export default PedidoItems;
