import React from 'react';
import { TrendingUp, Users, Palette, Coins } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '$2.5B+',
      label: 'Trading Volume',
      color: 'text-green-400'
    },
    {
      icon: Users,
      value: '500K+',
      label: 'Active Users',
      color: 'text-blue-400'
    },
    {
      icon: Palette,
      value: '1.2M+',
      label: 'Artworks',
      color: 'text-purple-400'
    },
    {
      icon: Coins,
      value: '89%',
      label: 'Success Rate',
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <IconComponent className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
