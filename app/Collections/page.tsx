"use client";

import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, Crown, Flame, Star } from 'lucide-react';
import './Collections.css';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Cosmic Cats",
      creator: "SpaceArtist",
      items: 10000,
      floorPrice: "0.8",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=300&h=300&fit=crop",
      verified: true,
      trending: true
    },
    {
      id: 2,
      name: "Digital Dreamscapes",
      creator: "VisionaryArt",
      items: 5555,
      floorPrice: "1.2",
      image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=300&h=300&fit=crop",
      verified: true,
      trending: false
    },
    {
      id: 3,
      name: "Neon Nights",
      creator: "CyberCreator",
      items: 8888,
      floorPrice: "0.6",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=300&h=300&fit=crop",
      verified: false,
      trending: true
    }
  ];

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

        <div className="collections-grid">
          {collections.map((collection) => (
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
