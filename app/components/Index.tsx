"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Search, TrendingUp, Users, Zap, Heart, ExternalLink } from "lucide-react";
import "./Index.css";

interface Nft {
  id: number;
  title: string;
  creator: string;
  price: string;
  image: string;
  likes: number;
}

const Index = () => {
  const [hoveredNft, setHoveredNft] = useState<number | null>(null);

  const featuredNfts: Nft[] = [
    {
      id: 1,
      title: "Cosmic Dreams #001",
      creator: "ArtistX",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      likes: 234,
    },
    {
      id: 2,
      title: "Digital Feline",
      creator: "CryptoMeow",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      likes: 189,
    },
    {
      id: 3,
      title: "Matrix Realm",
      creator: "NeoCreator",
      price: "3.2 ETH",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      likes: 456,
    },
    {
      id: 4,
      title: "Code Poetry",
      creator: "DevArtist",
      price: "1.5 ETH",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop",
      likes: 167,
    },
  ];

  const trendingCollections = [
    { name: "Mystic Creatures", volume: "125.4 ETH", change: "+23.5%" },
    { name: "Cyber Punks 2024", volume: "98.7 ETH", change: "+18.2%" },
    { name: "Abstract Minds", volume: "87.3 ETH", change: "+15.8%" },
  ];

  return (
    <div className="main-wrapper">
      <nav className="nav-bar">
        <div className="nav-bar-inner">
          <div className="logo">NFTVerse</div>
          <div className="nav-links">
            <Link href="/Explore">Explore</Link>
            <Link href="Create">Create</Link>
            <Link href="/Collections">Collections</Link>
          </div>
          <div className="nav-actions">
            <div className="search-box">
              <Search className="search-icon" />
              <input type="text" placeholder="Search NFTs, collections..." />
            </div>
            <Link href="/ConnectWallet">
              <Button className="gradient-button">Connect Wallet</Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <Badge className="badge-highlight">
          <Zap className="icon-inline" /> New Collection Drop
        </Badge>
        <h1 className="hero-heading">
          Discover, Collect, and Sell <br />
          <span className="highlight-text">Extraordinary NFTs</span>
        </h1>
        <p className="hero-subheading">
          The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens.
        </p>
        <div className="hero-buttons">
          <Link href="/Explore">
            <Button className="gradient-button">Explore Now</Button>
          </Link>
          <Link href="/Create">
            <Button variant="outline" className="outline-button">Create NFT</Button>
          </Link>
        </div>

      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div>
            <div className="stat-title">2.5M+</div>
            <div className="stat-subtitle">Total Sales</div>
          </div>
          <div>
            <div className="stat-title">180K+</div>
            <div className="stat-subtitle">NFTs Created</div>
          </div>
          <div>
            <div className="stat-title">45K+</div>
            <div className="stat-subtitle">Artists</div>
          </div>
          <div>
            <div className="stat-title">12K+</div>
            <div className="stat-subtitle">Collections</div>
          </div>
        </div>
      </section>

      <section className="trending-section">
        <h2>Trending Collections</h2>
        <div className="trending-grid">
          {trendingCollections.map((collection, index) => (
            <Card key={index} className="trending-card">
              <CardContent>
                <div className="trending-header">
                  <div className="trending-rank">{index + 1}</div>
                  <div>
                    <h3>{collection.name}</h3>
                    <span className="trending-change">
                      <TrendingUp className="icon-inline" /> {collection.change}
                    </span>
                  </div>
                </div>
                <div className="trending-volume">
                  <span>{collection.volume}</span>
                  <div>Volume</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="featured-nfts-section">
        <h2>Featured NFTs</h2>
        <div className="nft-grid">
          {featuredNfts.map((nft) => (
            <Card
              key={nft.id}
              className="nft-card"
              onMouseEnter={() => setHoveredNft(nft.id)}
              onMouseLeave={() => setHoveredNft(null)}
            >
              <div className="nft-image-container">
                <img src={nft.image} alt={nft.title} className="nft-image" />
                <div className={`nft-overlay ${hoveredNft === nft.id ? "show" : ""}`}>
                  <Button size="sm">
                    <ExternalLink className="icon-inline" /> View Details
                  </Button>
                </div>
                <div className="nft-like">
                  <Heart className="icon-inline" />
                </div>
              </div>
              <CardContent>
                <h3>{nft.title}</h3>
                <div className="nft-meta">
                  <span>by {nft.creator}</span>
                  <span className="likes">
                    <Heart className="icon-inline" /> {nft.likes}
                  </span>
                </div>
                <div className="nft-footer">
                  <div>
                    <div className="label">Current bid</div>
                    <div className="price">{nft.price}</div>
                  </div>
                  <Button size="sm" className="gradient-button">Bid Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your NFT Journey?</h2>
        <p>Join thousands of creators and collectors in the world's premier NFT marketplace</p>
        <div className="cta-buttons">
          <Button size="lg" className="gradient-button">
            <Users className="icon-inline" /> Join Community
          </Button>
          <Button size="lg" variant="outline" className="outline-button">Learn More</Button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">NFTVerse</h3>
            <p>The world's first and largest digital marketplace for crypto collectibles.</p>
          </div>
          <div>
            <h4>Marketplace</h4>
            <ul>
              <li><a href="#">All NFTs</a></li>
              <li><a href="#">Art</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Photography</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Platform Status</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NFTVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
