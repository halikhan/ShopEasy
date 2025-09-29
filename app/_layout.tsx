import { Stack } from 'expo-router';
import { CartProvider } from '../contexts/CartContext';

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen 
          name="product/[id]" 
          options={{ 
            headerShown: true,
            headerTitle: 'Product Details',
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: 'white'
          }} 
        />
      </Stack>
    </CartProvider>
  );
}