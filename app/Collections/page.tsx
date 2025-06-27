"use client";
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, Crown, Flame, Star, Search, Filter } from 'lucide-react';
import './Collections.css';

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const collections = [
    {
      id: 1,
      name: "Cosmic Cats",
      creator: "SpaceArtist",
      items: 10000,
      floorPrice: "0.8",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "art"
    },
    {
      id: 2,
      name: "Digital Dreamscapes",
      creator: "VisionaryArt",
      items: 5555,
      floorPrice: "1.2",
      image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 3,
      name: "Neon Nights",
      creator: "CyberCreator",
      items: 8888,
      floorPrice: "0.6",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=300&h=300&fit=crop",
      verified: false,
      trending: true,
      category: "gaming"
    },
    {
      id: 4,
      name: "Crystal Warriors",
      creator: "MysticForge",
      items: 7777,
      floorPrice: "2.1",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 5,
      name: "Ocean Waves",
      creator: "AquaDesign",
      items: 3333,
      floorPrice: "0.4",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "nature"
    },
    {
      id: 6,
      name: "Galactic Heroes",
      creator: "StarForge",
      items: 9999,
      floorPrice: "1.8",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 7,
      name: "Abstract Minds",
      creator: "ThoughtArt",
      items: 2222,
      floorPrice: "3.2",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 8,
      name: "Cyber Punks 2077",
      creator: "FutureNow",
      items: 10000,
      floorPrice: "0.9",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 9,
      name: "Mountain Peaks",
      creator: "NatureLens",
      items: 4444,
      floorPrice: "0.7",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "nature"
    },
    {
      id: 10,
      name: "Ethereal Spirits",
      creator: "GhostlyArt",
      items: 6666,
      floorPrice: "1.5",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "art"
    },
    {
      id: 11,
      name: "Urban Legends",
      creator: "CityMyths",
      items: 8000,
      floorPrice: "0.5",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "photography"
    },
    {
      id: 12,
      name: "Dragon Lords",
      creator: "MythicRealm",
      items: 5000,
      floorPrice: "2.8",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 13,
      name: "Sunset Dreams",
      creator: "GoldenHour",
      items: 3000,
      floorPrice: "0.3",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "nature"
    },
    {
      id: 14,
      name: "Pixel Pioneers",
      creator: "8BitMaster",
      items: 12000,
      floorPrice: "0.6",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 15,
      name: "Midnight Shadows",
      creator: "DarkArt",
      items: 7500,
      floorPrice: "1.1",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "art"
    },
    {
      id: 16,
      name: "Forest Guardians",
      creator: "WildSpirit",
      items: 4000,
      floorPrice: "0.8",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "nature"
    },
    {
      id: 17,
      name: "Mecha Warriors",
      creator: "RobotFactory",
      items: 9000,
      floorPrice: "1.9",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 18,
      name: "Color Splash",
      creator: "RainbowArt",
      items: 2500,
      floorPrice: "2.5",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 19,
      name: "Street Photography",
      creator: "UrbanLens",
      items: 6000,
      floorPrice: "0.4",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "photography"
    },
    {
      id: 20,
      name: "Ancient Artifacts",
      creator: "TimelessArt",
      items: 1500,
      floorPrice: "4.2",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "art"
    },
    {
      id: 21,
      name: "Neon Genesis",
      creator: "ElectricDreams",
      items: 8500,
      floorPrice: "0.7",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=300&h=300&fit=crop",
      verified: false,
      trending: true,
      category: "gaming"
    },
    {
      id: 22,
      name: "Desert Mirage",
      creator: "SandDunes",
      items: 3500,
      floorPrice: "0.9",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "nature"
    },
    {
      id: 23,
      name: "Cosmic Voyagers",
      creator: "SpaceOdyssey",
      items: 7000,
      floorPrice: "1.6",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 24,
      name: "Watercolor Worlds",
      creator: "FluidArt",
      items: 4500,
      floorPrice: "1.3",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 25,
      name: "Wildlife Chronicles",
      creator: "SafariShots",
      items: 5500,
      floorPrice: "0.6",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "photography"
    },
    {
      id: 26,
      name: "Quantum Realms",
      creator: "ParticleArt",
      items: 11000,
      floorPrice: "2.0",
      image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 27,
      name: "Minimalist Zen",
      creator: "SimpleSpaces",
      items: 2000,
      floorPrice: "3.8",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 28,
      name: "Arctic Expeditions",
      creator: "IceCaptures",
      items: 3800,
      floorPrice: "1.0",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "nature"
    },
    {
      id: 29,
      name: "Steampunk Society",
      creator: "GearWorks",
      items: 6500,
      floorPrice: "1.4",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 30,
      name: "Graffiti Legends",
      creator: "WallArt",
      items: 7200,
      floorPrice: "0.5",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "art"
    },
    {
      id: 31,
      name: "Celestial Bodies",
      creator: "StarGazer",
      items: 4200,
      floorPrice: "2.3",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "photography"
    },
    {
      id: 32,
      name: "Tropical Paradise",
      creator: "IslandVibes",
      items: 5200,
      floorPrice: "0.8",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "nature"
    },
    {
      id: 33,
      name: "Cyber Samurai",
      creator: "DigitalWarrior",
      items: 8800,
      floorPrice: "1.7",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 34,
      name: "Abstract Emotions",
      creator: "FeelingArt",
      items: 3600,
      floorPrice: "2.9",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 35,
      name: "Urban Exploration",
      creator: "CityScapes",
      items: 4800,
      floorPrice: "0.7",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "photography"
    },
    {
      id: 36,
      name: "Mythical Creatures",
      creator: "FantasyForge",
      items: 9500,
      floorPrice: "1.5",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 37,
      name: "Retro Waves",
      creator: "VintageVibes",
      items: 6800,
      floorPrice: "0.9",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=300&h=300&fit=crop",
      verified: false,
      trending: true,
      category: "art"
    },
    {
      id: 38,
      name: "Mountain Majesty",
      creator: "PeakCaptures",
      items: 4100,
      floorPrice: "1.2",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "nature"
    },
    {
      id: 39,
      name: "Digital Gladiators",
      creator: "ArenaArt",
      items: 7800,
      floorPrice: "1.8",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 40,
      name: "Pop Art Revolution",
      creator: "ModernPop",
      items: 5800,
      floorPrice: "2.1",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 41,
      name: "Night Photography",
      creator: "DarkLens",
      items: 3400,
      floorPrice: "1.6",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "photography"
    },
    {
      id: 42,
      name: "Ocean Depths",
      creator: "DeepSea",
      items: 4600,
      floorPrice: "1.0",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "nature"
    },
    {
      id: 43,
      name: "Space Marines",
      creator: "GalacticForce",
      items: 10500,
      floorPrice: "2.4",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 44,
      name: "Geometric Patterns",
      creator: "ShapeShifter",
      items: 2800,
      floorPrice: "3.5",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 45,
      name: "Portrait Masters",
      creator: "FaceArt",
      items: 6200,
      floorPrice: "0.8",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "photography"
    },
    {
      id: 46,
      name: "Enchanted Forests",
      creator: "MagicWoods",
      items: 5400,
      floorPrice: "1.3",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "nature"
    },
    {
      id: 47,
      name: "Cyber Knights",
      creator: "DigitalRealm",
      items: 8200,
      floorPrice: "1.9",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "gaming"
    },
    {
      id: 48,
      name: "Surreal Dreams",
      creator: "DreamWeaver",
      items: 3700,
      floorPrice: "2.7",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      verified: true,
      trending: false,
      category: "art"
    },
    {
      id: 49,
      name: "Architecture Wonders",
      creator: "BuildingArt",
      items: 4300,
      floorPrice: "1.4",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop",
      verified: false,
      trending: false,
      category: "photography"
    },
    {
      id: 50,
      name: "Aurora Borealis",
      creator: "NorthernLights",
      items: 2200,
      floorPrice: "4.8",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      verified: true,
      trending: true,
      category: "nature"
    }
  ];

  const filteredCollections = collections.filter(collection => {
    const matchesSearch = collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || collection.category === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="collections-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Top <span className="highlight">Collections</span>
          </h2>
          <p className="section-subtitle">
            Explore the most popular NFT collections in the marketplace
          </p>
        </div>

        <div className="controls-section">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-section">
            <Filter className="filter-icon" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Categories</option>
              <option value="art">Art</option>
              <option value="gaming">Gaming</option>
              <option value="nature">Nature</option>
              <option value="photography">Photography</option>
            </select>
          </div>
        </div>

        <div className="collections-grid">
          {filteredCollections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <div className="card-image">
                <img src={collection.image} alt={collection.name} />
                <div className="badge-group">
                  {collection.verified && (
                    <div className="badge blue">
                      <Crown className="icon-sm" />
                    </div>
                  )}
                  {collection.trending && (
                    <div className="badge orange">
                      <Flame className="icon-sm" />
                    </div>
                  )}
                </div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{collection.name}</h3>
                <p className="card-subtitle">by {collection.creator}</p>

                <div className="card-stats">
                  <div className="stat">
                    <div className="label">Items</div>
                    <div className="value">{collection.items.toLocaleString()}</div>
                  </div>
                  <div className="stat">
                    <div className="label">Floor Price</div>
                    <div className="value">{collection.floorPrice} ETH</div>
                  </div>
                </div>

                <Button className="collection-button">
                  View Collection
                  <ArrowRight className="icon" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="explore-button">
            Explore All Collections
            <Star className="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Collections;