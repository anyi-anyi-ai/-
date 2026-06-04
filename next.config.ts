/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 如果你有用到图片优化，可能还需要加上下面这行，没有用到可以不加
  images: { unoptimized: true }
};

export default nextConfig;
