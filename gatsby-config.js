let contentfulConfig
try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title:
      'W mojej szafie - blog o życiu, emocjach, kobiecości i własnej drodze. Jak pokochać siebie.',
    description:
      'W mojej szafie - blog o życiu, emocjach, kobiecości i własnej drodze. Jak pokochać siebie.',
    keywords: [
      'blog o życiu, emocjach, kobiecości i własnej drodze',
      'kobieca moc i energia',
      'podróż w głąb siebie',
      'jak pokochać siebie',
    ],
    siteUrl: 'https://www.wmojejszafie.pl',
    image: '/images/share.jpg',
    menuLinks: [
      {
        name: 'Start',
        slug: '/',
      },
      {
        name: 'O mnie',
        slug: '/about/',
      },
    ],
    postsPerFirstPage: 25,
    postsPerPage: 15,
    basePath: '/',
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-38565715-3',
        head: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wmoejeszafie',
        short_name: 'wmsz',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './static/images/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.wmojejszafie.pl', // if 'www' is set to 'false', be sure to also remove it here!
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-38565715-3', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        environments: ['production', 'development'],
      },
    },
  ],
}
