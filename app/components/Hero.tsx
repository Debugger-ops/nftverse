'use client';

import React from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import './Hero.css'; // CSS file

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Background effects */}
      <div className="hero-background"></div>
      <div className="hero-blob-purple"></div>
      <div className="hero-blob-blue"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Discover{' '}
          <span className="highlight-text">NFTs</span>
        </h1>
        <p className="hero-subtitle">
          Explore, collect, and sell extraordinary digital art from the world's top creators
        </p>

        <div className="hero-buttons">
          <Button size="lg">
            <Search className="mr-2 h-5 w-5" />
            Explore NFTs
          </Button>
          <Button size="lg" variant="outline">
            <TrendingUp className="mr-2 h-5 w-5" />
            Create NFT
          </Button>
        </div>

        <div className="hero-stats">
          {[
            ['2.5M+', 'NFTs Created'],
            ['180K+', 'Artists'],
            ['45K+', 'Collections'],
          ].map(([value, label]) => (
            <div className="text-center" key={label}>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
