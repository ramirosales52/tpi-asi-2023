import React from "react"; 
import { View, TouchableOpacity } from "react-native";
import { useTheme, Text } from "react-native-paper";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const QuantityButton = ({increaseQuantity, decreaseQuantity, quantity}) => {

  const theme = useTheme()

  return (
    <View style={{ height: 32, width: 95, display: 'flex', flexDirection:'row'}}>
      <TouchableOpacity onPress={decreaseQuantity} disabled={quantity == 1} > 
        <View style={{
            backgroundColor: theme.colors.secondaryContainer,
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 7,
            paddingHorizontal: 5,
            borderTopLeftRadius: 50, 
            borderBottomLeftRadius: 50,
            borderWidth: 1, 
            borderColor: theme.colors.outline,
            borderRightWidth: 0
          }}>
          <MaterialCommunityIcons name='minus' color={theme.colors.primary} size={18} />
        </View>
      </TouchableOpacity>

      <View style={{
        flex: 1, 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        borderWidth: 1,
        borderColor: theme.colors.outline
        }}>
        <Text style={{color: theme.colors.onSurface}}>{quantity}</Text>
      </View>

      <TouchableOpacity onPress={increaseQuantity}> 
        <View style={{
            backgroundColor: theme.colors.secondaryContainer,
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 50, 
            borderBottomRightRadius: 50, 
            paddingRight: 7,
            paddingHorizontal: 5,
            margin:0,
            borderWidth: 1, 
            borderColor: theme.colors.outline,
            borderLeftWidth: 0,
          }}>
          <MaterialCommunityIcons name='plus' color={theme.colors.primary} size={18} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default QuantityButton;
