export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Electronics', icon: 'laptop', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300' },
  { id: '2', name: 'Fashion', icon: 'checkroom', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300' },
  { id: '3', name: 'Home & Garden', icon: 'home', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300' },
  { id: '4', name: 'Sports', icon: 'sports-basketball', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300' },
  { id: '5', name: 'Beauty', icon: 'face', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300' },
  { id: '6', name: 'Books', icon: 'book', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300' }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    price: 999,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    category: 'Electronics',
    description: 'The most advanced iPhone ever with A17 Pro chip, titanium design, and Action Button.',
    rating: 4.8,
    reviews: 2547,
    inStock: true,
    tags: ['smartphone', 'apple', 'premium']
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    category: 'Electronics',
    description: 'Supercharged by M2 chip. Incredibly thin and light laptop with up to 18 hours of battery life.',
    rating: 4.9,
    reviews: 1823,
    inStock: true,
    tags: ['laptop', 'apple', 'portable']
  },
  {
    id: '3',
    name: 'Nike Air Max 270',
    price: 150,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Fashion',
    description: 'Lifestyle shoe with the biggest Max Air unit yet for all-day comfort and style.',
    rating: 4.6,
    reviews: 956,
    inStock: true,
    tags: ['shoes', 'nike', 'casual']
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    price: 399,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    category: 'Electronics',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality.',
    rating: 4.7,
    reviews: 3241,
    inStock: true,
    tags: ['headphones', 'sony', 'wireless']
  },
  {
    id: '5',
    name: 'Adidas Ultraboost 22',
    price: 190,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400',
    category: 'Sports',
    description: 'Our most responsive running shoe with incredible energy return.',
    rating: 4.5,
    reviews: 782,
    inStock: false,
    tags: ['running', 'adidas', 'sport']
  },
  {
    id: '6',
    name: 'Dyson V15 Detect',
    price: 749,
    originalPrice: 849,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
    category: 'Home & Garden',
    description: 'The most powerful and intelligent cordless vacuum with laser dust detection.',
    rating: 4.8,
    reviews: 1456,
    inStock: true,
    tags: ['vacuum', 'dyson', 'cordless']
  },
  {
    id: '7',
    name: 'Levi\'s 501 Original Jeans',
    price: 89,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'Fashion',
    description: 'The original blue jean. A classic straight fit with iconic styling.',
    rating: 4.4,
    reviews: 2103,
    inStock: true,
    tags: ['jeans', 'levis', 'classic']
  },
  {
    id: '8',
    name: 'iPad Pro 12.9"',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    category: 'Electronics',
    description: 'The ultimate iPad experience with M2 chip and stunning Liquid Retina XDR display.',
    rating: 4.9,
    reviews: 1687,
    inStock: true,
    tags: ['tablet', 'apple', 'professional']
  }
];