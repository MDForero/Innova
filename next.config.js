/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    distDir: 'build',
    output: "export",
    trailingSlash: true,
}

module.exports = nextConfig
