/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/contact',
          destination: '/mailsender',
          permanent: false, // rediriger temporairement
        },
      ];
    },
  };
  
  export default nextConfig;