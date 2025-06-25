import React from 'react';
import { Heart, Eye, User } from 'lucide-react';
import './NFTCard.css';

interface NFTCardProps {
  id: number;
  title: string;
  creator: string;
  price: string;
  image: string;
  likes: number;
  views: number;
}

const NFTCard: React.FC<NFTCardProps> = ({ title, creator, price, image, likes, views }) => {
  return (
    <div className="nft-card">
      <div className="card-image">
        <img src={image} alt={title} className="nft-image" />
        <div className="image-overlay" />
        <div className="overlay-icons">
          <div className="icon-button">
            <Heart className="icon-sm" />
          </div>
          <div className="icon-button">
            <Eye className="icon-sm" />
          </div>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="creator-info">
          <User className="icon-sm" />
          <span className="creator-name">by {creator}</span>
        </div>

        <div className="card-bottom">
          <div className="price-info">
            <div className="label">Current bid</div>
            <div className="price">{price} ETH</div>
          </div>
          <div className="stats">
            <span className="stat">
              <Heart className="icon-xs" /> {likes}
            </span>
            <span className="stat">
              <Eye className="icon-xs" /> {views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
