import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  ogSiteName?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  canonical?: string;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  mobileWebAppCapable?: string;
  appleMobileWebAppCapable?: string;
  appleMobileWebAppStatusBarStyle?: string;
  appleMobileWebAppTitle?: string;
  formatDetection?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  ogSiteName,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterSite,
  canonical,
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1.0',
  themeColor,
  mobileWebAppCapable,
  appleMobileWebAppCapable,
  appleMobileWebAppStatusBarStyle,
  appleMobileWebAppTitle,
  formatDetection,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content="Dandys World Characters" />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content={viewport} />
      {themeColor && <meta name="theme-color" content={themeColor} />}
      {mobileWebAppCapable && <meta name="mobile-web-app-capable" content={mobileWebAppCapable} />}
      {appleMobileWebAppCapable && <meta name="apple-mobile-web-app-capable" content={appleMobileWebAppCapable} />}
      {appleMobileWebAppStatusBarStyle && <meta name="apple-mobile-web-app-status-bar-style" content={appleMobileWebAppStatusBarStyle} />}
      {appleMobileWebAppTitle && <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} />}
      {formatDetection && <meta name="format-detection" content={formatDetection} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogSiteName && <meta property="og:site_name" content={ogSiteName} />}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
