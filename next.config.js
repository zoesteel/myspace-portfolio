/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'url-loader',
          options: options,
        },
      ],
      
    })
 
    return config
  },
}

module.exports = nextConfig
