/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',  // ده بيفعل خاصية static export الجديدة في Next.js 15
  basePath: isProd ? '/your-repo-name' : '',
  assetPrefix: isProd ? '/your-repo-name/' : '',
}

module.exports = nextConfig
