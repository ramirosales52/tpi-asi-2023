import React from "react"; 
import { View } from "react-native";
import { useTheme, Appbar } from "react-native-paper";

const Pedidos = () => {

  const theme = useTheme();

  return (
    <View>
      <Appbar.Header style={{backgroundColor:theme.colors.inverseOnSurface}} elevated={true}>
       <Appbar.Content title="Pedidos" color={theme.colors.inverseSurface} />
      </Appbar.Header>
      {/* <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '20%', color: theme.colors.onBackground }}>Pedidos</Text> */}
    </View>
  )
}

export default Pedidos;