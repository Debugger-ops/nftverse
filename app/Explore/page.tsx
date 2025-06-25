"use client";
import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Heart, Eye, TrendingUp } from 'lucide-react';
import './Explore.css';

interface NFT {
  id: string;
  title: string;
  creator: string;
  price: number;
  currency: string;
  image: string;
  likes: number;
  views: number;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  isLiked: boolean;
}

interface Collection {
  id: string;
  name: string;
  floorPrice: number;
  volume: number;
  change: number;
  image: string;
}

const ExplorePage: React.FC = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [filteredNfts, setFilteredNfts] = useState<NFT[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });

  const categories = ['all', 'art', 'gaming', 'photography', 'music', 'sports', 'collectibles'];
  const sortOptions = ['newest', 'oldest', 'price-low', 'price-high', 'most-liked'];

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockNfts: NFT[] = [
      {
        id: '1',
        title: 'Cosmic Voyage #1234',
        creator: 'ArtistName',
        price: 2.5,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=1',
        likes: 125,
        views: 1200,
        category: 'art',
        rarity: 'rare',
        isLiked: false
      },
      {
        id: '2',
        title: 'Digital Dreams',
        creator: 'CreatorX',
        price: 1.8,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=2',
        likes: 87,
        views: 890,
        category: 'photography',
        rarity: 'epic',
        isLiked: true
      },
      {
        id: '3',
        title: 'Neon Samurai',
        creator: 'CyberArt',
        price: 5.2,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=3',
        likes: 234,
        views: 3400,
        category: 'art',
        rarity: 'legendary',
        isLiked: false
      },
      {
        id: '4',
        title: 'Abstract Mind #789',
        creator: 'ModernPixel',
        price: 0.8,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=4',
        likes: 45,
        views: 567,
        category: 'art',
        rarity: 'common',
        isLiked: false
      },
      {
        id: '5',
        title: 'Gaming Legend Avatar',
        creator: 'GameMaster',
        price: 3.7,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=5',
        likes: 189,
        views: 2100,
        category: 'gaming',
        rarity: 'epic',
        isLiked: true
      },
      {
        id: '6',
        title: 'Urban Landscape',
        creator: 'CityShots',
        price: 1.2,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=6',
        likes: 67,
        views: 834,
        category: 'photography',
        rarity: 'rare',
        isLiked: false
      },
      {
        id: '7',
        title: 'Synthwave Beats',
        creator: 'AudioVision',
        price: 2.9,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=7',
        likes: 156,
        views: 1890,
        category: 'music',
        rarity: 'rare',
        isLiked: true
      },
      {
        id: '8',
        title: 'Champion Trophy',
        creator: 'SportsNFT',
        price: 4.1,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=8',
        likes: 298,
        views: 4200,
        category: 'sports',
        rarity: 'legendary',
        isLiked: false
      },
      {
        id: '9',
        title: 'Vintage Card #001',
        creator: 'CardCollector',
        price: 1.5,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=9',
        likes: 78,
        views: 923,
        category: 'collectibles',
        rarity: 'rare',
        isLiked: false
      },
      {
        id: '10',
        title: 'Ethereal Portrait',
        creator: 'PortraitMaster',
        price: 3.3,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=10',
        likes: 203,
        views: 2567,
        category: 'art',
        rarity: 'epic',
        isLiked: true
      },
      {
        id: '11',
        title: 'Mystical Forest',
        creator: 'NatureArt',
        price: 2.1,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=11',
        likes: 134,
        views: 1456,
        category: 'photography',
        rarity: 'rare',
        isLiked: false
      },
      {
        id: '12',
        title: 'Dragon Warrior',
        creator: 'FantasyGuild',
        price: 6.8,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=12',
        likes: 412,
        views: 5678,
        category: 'gaming',
        rarity: 'legendary',
        isLiked: true
      },
      {
        id: '13',
        title: 'Jazz Fusion',
        creator: 'SoundWave',
        price: 1.9,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=13',
        likes: 89,
        views: 1123,
        category: 'music',
        rarity: 'common',
        isLiked: false
      },
      {
        id: '14',
        title: 'Stadium Glory',
        creator: 'SportsMoments',
        price: 3.5,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=14',
        likes: 267,
        views: 3234,
        category: 'sports',
        rarity: 'epic',
        isLiked: false
      },
      {
        id: '15',
        title: 'Retro Poster',
        creator: 'VintageVibes',
        price: 0.9,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=15',
        likes: 56,
        views: 678,
        category: 'collectibles',
        rarity: 'common',
        isLiked: false
      },
      {
        id: '16',
        title: 'Geometric Harmony',
        creator: 'MathArt',
        price: 2.7,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=16',
        likes: 145,
        views: 1789,
        category: 'art',
        rarity: 'rare',
        isLiked: true
      },
      {
        id: '17',
        title: 'Ocean Depths',
        creator: 'AquaPhoto',
        price: 1.6,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=17',
        likes: 92,
        views: 1034,
        category: 'photography',
        rarity: 'rare',
        isLiked: false
      },
      {
        id: '18',
        title: 'Space Explorer',
        creator: 'CosmicGamer',
        price: 4.3,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=18',
        likes: 321,
        views: 4567,
        category: 'gaming',
        rarity: 'epic',
        isLiked: true
      },
      {
        id: '19',
        title: 'Classical Symphony',
        creator: 'OrchestralNFT',
        price: 5.1,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=19',
        likes: 178,
        views: 2345,
        category: 'music',
        rarity: 'legendary',
        isLiked: false
      },
      {
        id: '20',
        title: 'Victory Moment',
        creator: 'ChampionCapture',
        price: 2.8,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=20',
        likes: 234,
        views: 2890,
        category: 'sports',
        rarity: 'rare',
        isLiked: false
      },
      {
        id: '21',
        title: 'Antique Compass',
        creator: 'TreasureHunter',
        price: 1.7,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=21',
        likes: 76,
        views: 987,
        category: 'collectibles',
        rarity: 'rare',
        isLiked: false
      },
      {
        id: '22',
        title: 'Cyberpunk City',
        creator: 'FutureVision',
        price: 3.9,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=22',
        likes: 287,
        views: 3456,
        category: 'art',
        rarity: 'epic',
        isLiked: true
      },
      {
        id: '23',
        title: 'Mountain Peak',
        creator: 'SummitShots',
        price: 1.3,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=23',
        likes: 65,
        views: 789,
        category: 'photography',
        rarity: 'common',
        isLiked: false
      },
      {
        id: '24',
        title: 'Mech Warrior',
        creator: 'RobotArena',
        price: 7.2,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=24',
        likes: 456,
        views: 6789,
        category: 'gaming',
        rarity: 'legendary',
        isLiked: true
      },
      {
        id: '25',
        title: 'Electronic Pulse',
        creator: 'BeatMaker',
        price: 2.4,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=25',
        likes: 123,
        views: 1567,
        category: 'music',
        rarity: 'rare',
        isLiked: false
      },
      {
        id: '26',
        title: 'Olympic Spirit',
        creator: 'GameTime',
        price: 4.6,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=26',
        likes: 345,
        views: 4123,
        category: 'sports',
        rarity: 'epic',
        isLiked: false
      },
      {
        id: '27',
        title: 'Ancient Artifact',
        creator: 'HistoryKeeper',
        price: 8.5,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=27',
        likes: 567,
        views: 7890,
        category: 'collectibles',
        rarity: 'legendary',
        isLiked: true
      },
      {
        id: '28',
        title: 'Aurora Borealis',
        creator: 'SkyWatcher',
        price: 3.1,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=28',
        likes: 198,
        views: 2456,
        category: 'photography',
        rarity: 'epic',
        isLiked: false
      },
      {
        id: '29',
        title: 'Pixel Paradise',
        creator: 'RetroGamer',
        price: 1.4,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=29',
        likes: 87,
        views: 1098,
        category: 'gaming',
        rarity: 'common',
        isLiked: false
      },
      {
        id: '30',
        title: 'Fractal Dreams',
        creator: 'MathematicalArt',
        price: 2.6,
        currency: 'ETH',
        image: 'https://picsum.photos/400/400?random=30',
        likes: 156,
        views: 1876,
        category: 'art',
        rarity: 'rare',
        isLiked: true
      }
    ];

    const mockCollections: Collection[] = [
      {
        id: '1',
        name: 'Bored Ape Yacht Club',
        floorPrice: 12.5,
        volume: 1250.8,
        change: 5.2,
        image: 'https://picsum.photos/100/100?random=101'
      },
      {
        id: '2',
        name: 'CryptoPunks',
        floorPrice: 45.2,
        volume: 2100.3,
        change: -2.1,
        image: 'https://picsum.photos/100/100?random=102'
      },
      {
        id: '3',
        name: 'Azuki',
        floorPrice: 8.7,
        volume: 890.5,
        change: 12.3,
        image: 'https://picsum.photos/100/100?random=103'
      },
      {
        id: '4',
        name: 'Doodles',
        floorPrice: 6.2,
        volume: 456.7,
        change: -5.8,
        image: 'https://picsum.photos/100/100?random=104'
      },
      {
        id: '5',
        name: 'Clone X',
        floorPrice: 3.9,
        volume: 234.1,
        change: 8.9,
        image: 'https://picsum.photos/100/100?random=105'
      },
      {
        id: '6',
        name: 'Moonbirds',
        floorPrice: 7.1,
        volume: 567.3,
        change: 3.4,
        image: 'https://picsum.photos/100/100?random=106'
      }
    ];

    setNfts(mockNfts);
    setFilteredNfts(mockNfts);
    setCollections(mockCollections);
  }, []);

  // Filter and sort NFTs
  useEffect(() => {
    let filtered = nfts.filter(nft => {
      const matchesSearch = nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           nft.creator.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || nft.category === selectedCategory;
      const matchesPrice = nft.price >= priceRange.min && nft.price <= priceRange.max;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort filtered NFTs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'most-liked':
          return b.likes - a.likes;
        case 'oldest':
          return parseInt(a.id) - parseInt(b.id);
        default: // newest
          return parseInt(b.id) - parseInt(a.id);
      }
    });

    setFilteredNfts(filtered);
  }, [nfts, searchTerm, selectedCategory, sortBy, priceRange]);

  const handleLike = (nftId: string) => {
    setNfts(prev => prev.map(nft => 
      nft.id === nftId 
        ? { ...nft, isLiked: !nft.isLiked, likes: nft.isLiked ? nft.likes - 1 : nft.likes + 1 }
        : nft
    ));
  };

  return (
    <div className="explore-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Explore NFTs</h1>
          <p className="hero-subtitle">Discover unique digital assets from top creators</p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">2.5M+</span>
            <span className="stat-label">NFTs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">150K+</span>
            <span className="stat-label">Artists</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">45K+</span>
            <span className="stat-label">Collections</span>
          </div>
        </div>
      </section>

      {/* Trending Collections */}
      <section className="trending-section">
        <h2 className="section-title">
          <TrendingUp className="section-icon" />
          Trending Collections
        </h2>
        <div className="collections-grid">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <img src={collection.image} alt={collection.name} className="collection-image" />
              <div className="collection-info">
                <h3 className="collection-name">{collection.name}</h3>
                <div className="collection-stats">
                  <span className="floor-price">Floor: {collection.floorPrice} ETH</span>
                  <span className={`change ${collection.change >= 0 ? 'positive' : 'negative'}`}>
                    {collection.change >= 0 ? '+' : ''}{collection.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters and Search */}
      <section className="filters-section">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search NFTs, collections, or creators..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filters-container">
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>
                  {option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </option>
              ))}
            </select>
          </div>

          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={18} />
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* NFTs Grid/List */}
      <section className="nfts-section">
        <div className={`nfts-container ${viewMode}`}>
          {filteredNfts.map((nft) => (
            <div key={nft.id} className={`nft-card ${viewMode}`}>
              <div className="nft-image-container">
                <img src={nft.image} alt={nft.title} className="nft-image" />
                <div className="nft-overlay">
                  <button 
                    className={`like-btn ${nft.isLiked ? 'liked' : ''}`}
                    onClick={() => handleLike(nft.id)}
                  >
                    <Heart size={20} fill={nft.isLiked ? 'currentColor' : 'none'} />
                  </button>
                  <span className="rarity-badge">{nft.rarity}</span>
                </div>
              </div>
              
              <div className="nft-info">
                <h3 className="nft-title">{nft.title}</h3>
                <p className="nft-creator">by {nft.creator}</p>
                
                <div className="nft-stats">
                  <div className="nft-price">
                    <span className="price-amount">{nft.price}</span>
                    <span className="price-currency">{nft.currency}</span>
                  </div>
                  
                  <div className="nft-engagement">
                    <span className="likes">
                      <Heart size={14} />
                      {nft.likes}
                    </span>
                    <span className="views">
                      <Eye size={14} />
                      {nft.views}
                    </span>
                  </div>
                </div>
                
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;