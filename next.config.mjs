/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ebayimg.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/account-settings',
        destination: '/accountSettings',
      },
      {
        source: '/buy-now',
        destination: '/buyNow',
      },
      {
        source: '/catch-of-the-day',
        destination: '/catch',
      },
      {
        source: '/fishin-buddy',
        destination: '/fishinBuddy',
      },
      {
        source: '/privacy-policy',
        destination: '/privacyPolicy',
      },
      {
        source: '/sign-up',
        destination: '/signUp'
      },
      {
        source: '/terms-of-use',
        destination: '/terms'
      }
    ];
  },
};

export default nextConfig;

