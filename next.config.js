/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        siteUrl: 'http://localhost:3000',
      },
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '**',
          },
        ],
      },      
}

module.exports = nextConfig
