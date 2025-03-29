import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ title, description, image, url, type = 'website' }: SEOProps) => {
  const siteName = 'Swarnalaya Gold & Diamonds';
  const defaultImage = 'https://swarnalaya.com/og-image.jpg'; // Replace with your actual OG image URL
  const siteUrl = 'https://swarnalaya.com'; // Replace with your actual domain

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO; 