import CoverImage from '@/assets/images/cover.jpg';
import AuthorImage from '@/assets/images/zeke.png';
import { Instagram } from '@/components/icons/brands/instagram';
import { Twitter } from '@/components/icons/brands/twitter';
import { Facebook } from '@/components/icons/brands/facebook';
import User1 from '@/assets/images/avatar/4.png';
import User2 from '@/assets/images/avatar/2.png';
import User3 from '@/assets/images/avatar/3.png';
import User4 from '@/assets/images/avatar/1.png';
import User5 from '@/assets/images/avatar/6.png';

export const authorData = {
  id: 157896,
  name: 'Zeke',
  user_name: 'zi_dev',
  wallet_key: '0xa3ec6031a97DC7b2FBCE197cC84FBEAd9f9d4e8c',
  created_at: 'April 2023',
  cover_image: {
    id: 1,
    thumbnail: CoverImage,
    original: CoverImage,
  },
  avatar: {
    id: 1,
    thumbnail: AuthorImage,
    original: AuthorImage,
  },
  bio: 'Zi-Network is an innovative blockchain platform designed to deliver unparalleled performance and scalability. Combining a unique consensus mechanism, advanced developer tools, and a thriving DeFi ecosystem.',
  following: '5',
  followers: '162',
  followed_by: [
    {
      id: 1,
      name: 'Thirtythree',
      slug: 'thirtythree',
      avatar: {
        id: 1,
        thumbnail: User1,
        original: User1,
      },
    },
    {
      id: 2,
      name: 'Thirtythree',
      slug: 'thirtythree',
      avatar: {
        id: 1,
        thumbnail: User2,
        original: User2,
      },
    },
    {
      id: 3,
      name: 'Thirtythree',
      slug: 'thirtythree',
      avatar: {
        id: 1,
        thumbnail: User3,
        original: User3,
      },
    },
    {
      id: 4,
      name: 'Thirtythree',
      slug: 'thirtythree',
      avatar: {
        id: 1,
        thumbnail: User4,
        original: User4,
      },
    },
    {
      id: 5,
      name: 'Thirtythree',
      slug: 'thirtythree',
      avatar: {
        id: 1,
        thumbnail: User5,
        original: User5,
      },
    },
  ],
  socials: [
    {
      id: 1,
      title: '@zinetwork_org',
      link: 'https://twitter.com/zinetwork_org',
      icon: <Twitter className="w-4" />,
    },
    {
      id: 2,
      title: '@zinetwork_org',
      link: '',
      icon: <Facebook className="w-4" />,
    },
    {
      id: 3,
      title: '@zinetwork_org',
      link: '',
      icon: <Instagram className="w-4" />,
    },
  ],
  links: [
    {
      id: 1,
      title: '@zinetwork_org',
      link: 'https://twitter.com/zinetwork_org',
    },
    {
      id: 2,
      title: '@zinetwork_org',
      link: 'https://t.me/zi_network',
    },
  ],
};
