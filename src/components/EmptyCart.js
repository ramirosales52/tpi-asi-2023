import React from "react"; 
import {View} from "react-native";
import { useTheme, Button, Text } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const EmptyCart = ({ onPress }) => {

  const theme = useTheme()

  return (
    <View 
      style={{
        flex: 1,
        paddingHorizontal: 40,
      }}>
      <View style={{
        flex:0.9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <MaterialCommunityIcons name={'cart-variant'} color={ theme.colors.onBackground } size={100} />
        <Text variant="headlineMedium" style={{ color: theme.colors.onBackground, marginTop: 30 }}>Tu carrito está vacío</Text>
        <Text variant="bodyMedium" style={{ color: theme.colors.onBackground }}>No agregaste nada al carrito todavía</Text>
        <Button 
          mode="elevated" 
          icon={({ color }) => ( <Ionicons name={'book'} color={color} size={24} /> )}
          buttonColor={ theme.colors.primary }
          textColor={ theme.colors.onPrimary }
          onPress={ onPress }
          style={{ width:'100%', marginTop: 20 }}
        >Ver menú</Button>
      </View>    
    </View>
  );
}

export default EmptyCart;
