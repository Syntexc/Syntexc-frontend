/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://synexc.com/',
    generateRobotsTxt: true,
    sitemapSize: 5000,      
    exclude: ['/admin/*'], 
  };
  