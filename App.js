import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/Products';
import DetailsScreen from './screens/ProductDetail';
import BlogScreen from './screens/Blogs'; 
import BlogDetail from './screens/BlogDetail';
import Categories from './screens/Wishlist';

import { WishlistProvider } from "./context/WishlistContext"; // <--- toevoegen
import Wishlist from './screens/Wishlist';

const Stack = createStackNavigator();

export default function App() {
  return (
    <WishlistProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen name="Products" component={ProductScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Blog" component={BlogScreen} />
          <Stack.Screen name="BlogDetail" component={BlogDetail} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
      </NavigationContainer>
    </WishlistProvider>
  );
}
