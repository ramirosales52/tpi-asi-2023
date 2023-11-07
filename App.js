import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from 'react-redux';
import store from './Store';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Resumen from './src/screens/Resumen';
import Menu from './src/screens/Menu';
import Pedidos from './src/screens/Pedidos';
import Carrito from './src/screens/Carrito';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNav() {

  const cart = useSelector((state) => state.cart.cart)
  const itemsInCart = cart.length

  return(
    <Tab.Navigator 
      sceneAnimationEnabled={ true }
      initialRouteName={ Menu }
      sceneAnimationType="shifting"
    >
      <Tab.Screen name="Menu" component={ Menu } 
        options={{
          headerTitle:'Menu',
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} color={color} size={24} />
          )
        }}
      />
      <Tab.Screen name="Pedidos" component={ Pedidos } 
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'receipt' : 'receipt-outline'} color={color} size={24} />
          )
        }}
      />
      <Tab.Screen name="Carrito" component={ Carrito } 
        options={{
          tabBarBadge: (itemsInCart == 0) ? false : itemsInCart,
          tabBarLabel: 'Carrito',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'cart' : 'cart-outline' } color={color} size={24} />
          )
        }}
      />   
    </Tab.Navigator>
  )
}


export default function App () {
   
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme({ fallbackSourceColor: '#f4a605' });

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider theme={ paperTheme } >
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false, statusBarTranslucent: true }}>
            <Stack.Screen name='Home' component={ BottomNav } />
            <Stack.Screen name='Resumen' component={ Resumen } />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  )
}