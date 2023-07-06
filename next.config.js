/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'images.unsplash.com', "www.w3.org"],
    },
    distDir: 'build',
}

module.exports = nextConfig
