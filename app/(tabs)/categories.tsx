import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import CategoryCard from '../../components/CategoryCard';
import { categories, products } from '../../constants/Products';

export default function CategoriesScreen() {
  const getCategoryProductCount = (categoryName: string) => {
    return products.filter(product => product.category === categoryName).length;
  };

  const renderCategory = ({ item }: { item: any }) => (
    <CategoryCard
      category={item}
      onPress={() => router.push({
        pathname: '/(tabs)/search',
        params: { category: item.name }
      })}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <Text style={styles.headerSubtitle}>Discover products by category</Text>
      </View>

      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.categoryRow}
        contentContainerStyle={styles.categoriesGrid}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          {categories.length} categories • {products.length} products
        </Text>
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
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  categoryRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  categoriesGrid: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  statsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  statsText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});