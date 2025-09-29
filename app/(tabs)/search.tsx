import React, { useState, useMemo, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import { products } from '../../constants/Products';

export default function SearchScreen() {
  const { category } = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (category) {
      setSearchQuery('');
    }
  }, [category]);

  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Sort by rating and availability
    return filtered.sort((a, b) => {
      if (a.inStock && !b.inStock) return -1;
      if (!a.inStock && b.inStock) return 1;
      return b.rating - a.rating;
    });
  }, [searchQuery, category]);

  const renderProduct = ({ item }: { item: any }) => (
    <ProductCard
      product={item}
      onPress={() => router.push(`/product/${item.id}`)}
    />
  );

  const getResultTitle = () => {
    if (category && searchQuery) {
      return `"${searchQuery}" in ${category}`;
    }
    if (category) {
      return category;
    }
    if (searchQuery) {
      return `Results for "${searchQuery}"`;
    }
    return 'All Products';
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.content}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder={category ? `Search in ${category}...` : "Search products..."}
        />

        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>{getResultTitle()}</Text>
          <Text style={styles.resultsCount}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </Text>
        </View>

        {filteredProducts.length > 0 ? (
          <FlatList
            data={filteredProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.productRow}
            contentContainerStyle={styles.productsGrid}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateTitle}>No products found</Text>
            <Text style={styles.emptyStateSubtitle}>
              Try adjusting your search terms or browse categories
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  resultsHeader: {
    marginBottom: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  resultsCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productsGrid: {
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emptyStateSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});