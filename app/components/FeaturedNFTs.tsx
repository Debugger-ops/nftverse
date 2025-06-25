"use client";

import React from 'react';
import NFTCard from './NFTCard';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import './FeaturedNFTs.css';

const FeaturedNFTs = () => {
  const featuredNFTs = [
    {
      id: 1,
      title: "Cosmic Dreams #142",
      creator: "ArtistX",
      price: "2.5",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&h=500&fit=crop",
      likes: 234,
      views: 1520
    },
    {
      id: 2,
      title: "Digital Sunset",
      creator: "CryptoVision",
      price: "1.8",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop",
      likes: 189,
      views: 892
    },
    {
      id: 3,
      title: "Neon City #88",
      creator: "FutureArt",
      price: "3.2",
      image: "https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=500&h=500&fit=crop",
      likes: 456,
      views: 2340
    },
    {
      id: 4,
      title: "Abstract Waves",
      creator: "DigitalMaster",
      price: "1.5",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=500&h=500&fit=crop",
      likes: 321,
      views: 1680
    },
    {
      id: 5,
      title: "Cyber Punk Girl",
      creator: "NeonArtist",
      price: "4.1",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=500&h=500&fit=crop",
      likes: 567,
      views: 3120
    },
    {
      id: 6,
      title: "Quantum Portal",
      creator: "TechnoCreator",
      price: "2.9",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&h=500&fit=crop",
      likes: 398,
      views: 2450
    }
  ];

  return (
    <div className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="highlight">NFTs</span>
          </h2>
          <p className="section-subtitle">
            Discover the most sought-after digital collectibles from top creators
          </p>
        </div>

        <div className="nft-grid">
          {featuredNFTs.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>

        <div className="view-all">
          <Button size="lg" variant="outline" className="view-all-button">
            View All NFTs
            <ArrowRight className="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFTs;
