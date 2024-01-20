/** @type {import('next').NextConfig} */
const nextConfig = {
    //distDir: 'dist',
    env: {
      API_URL: 'http://127.0.0.1:3000/' 
      },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
