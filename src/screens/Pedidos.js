import React, { useEffect, useState } from "react"; 
import { View, ScrollView, RefreshControl, TouchableOpacity } from "react-native";
import { useTheme, Appbar, Text} from "react-native-paper";
import { useNavigation  } from "@react-navigation/native"
import { getPedidos } from "../../api";

const Pedidos = () => {

  const navigation = useNavigation()
  const theme = useTheme();

  const [pedidos, setPedidos] = useState([])
  const [refresing, setRefresing] = useState(false)

  const loadPedidos = async () => {
    const data = await getPedidos()
    setPedidos(data)
  }

  useEffect(() => {
    loadPedidos()
  }, [])

  const onRefresh = React.useCallback(async () => {
    setRefresing(true)
    await loadPedidos()
    setRefresing(false)
  })

  console.log(pedidos)

  const goToPedidoItems = (itemId) => {
    console.log(itemId)
    navigation.navigate("PedidoItems", {id: itemId}); 
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Appbar.Header style={{backgroundColor: theme.colors.inverseOnSurface}} elevated={true}>
       <Appbar.Content title="Pedidos" color={theme.colors.inverseSurface} />
      </Appbar.Header>

      <View style={{flex: 1}}>
        <ScrollView 
          style={{ backgroundColor: theme.colors.background, flex: 1, margin: 16, marginBottom: 0 }} 
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refresing}
              onRefresh={onRefresh}
            />}
          >
          {pedidos.map((item, index) => (
            <TouchableOpacity onPress={() => goToPedidoItems(item.id)} activeOpacity={0.7}>
              <View 
                key={index} 
                style={{
                  backgroundColor: theme.colors.surfaceVariant, 
                  height: 98, 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: 16,
                  marginBottom: 12,
                }}
              >
                <View 
                  style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    width: '100%', 
                    height: 30,
                    borderTopLeftRadius: 16, 
                    borderTopRightRadius: 16, 
                    paddingHorizontal: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.outline
                  }}>
                <Text>{item.fecha.split('T')[0].split('-')[2] + "/" + item.fecha.split('T')[0].split('-')[1] + '/' + item.fecha.split('T')[0].split('-')[0]}</Text>
                <Text>{item.fecha.split('T')[1].split(':')[0] + ":" + item.fecha.split('T')[1].split(':')[1]}</Text>
                </View>
                <View style={{
                  flex: 1,
                  display: 'flex', 
                  flexDirection: 'row',
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  width: '100%', 
                  paddingHorizontal: 16
                }}>
                  <Text>Pedido #{item.id}</Text>
                  <Text>${item.precioTotal}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Pedidos;