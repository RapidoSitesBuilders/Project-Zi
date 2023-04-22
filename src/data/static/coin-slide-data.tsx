//images
import BitcoinImage from '@/assets/images/coin/bitcoin.svg';
import TetherImage from '@/assets/images/coin/tether.svg';
import CardanoImage from '@/assets/images/coin/cardano.svg';
import BinanceImage from '@/assets/images/coin/binance.svg';

export const coinSlideData = [
  {
    id: '0',
    name: 'BNB',
    symbol: 'BNB',
    balance: '240.55',
    usdBalance: '340.24',
    logo: BinanceImage,
    change: '+1.5%',
    isChangePositive: true,
    color: '#F3BA2C',
  },
  {
    id: '1',
    name: 'Zi-Network',
    symbol: 'ZNT',
    balance: '1.2345',
    usdBalance: '1,032.24',
    logo: TetherImage,
    change: '-1.5%',
    isChangePositive: false,
    color: '#00DAFF',
  },
  {
    id: '2',
    name: 'Cardano',
    symbol: 'ADA',
    balance: '1.2370',
    usdBalance: '532.94',
    logo: CardanoImage,
    change: '+12.5%',
    isChangePositive: true,
    color: '#DBE3FF',
  },
  {
    id: '3',
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '0.2231345',
    usdBalance: '11,032.24',
    logo: BitcoinImage,
    change: '+12.5%',
    isChangePositive: true,
    color: '#FDEDD4',
  },
];
