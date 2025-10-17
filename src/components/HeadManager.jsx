import { useEffect } from 'react';

// Helper function to set/update a meta tag
const setMetaTag = (attr, key, content) => {
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const HeadManager = ({ title, description, url, image }) => {
  useEffect(() => {
    // Set Title
    if (title) {
      document.title = title;
      setMetaTag('property', 'og:title', title);
    }

    // Set Description
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
    }

    // Set URL
    if (url) {
      // You might want to make this more robust, e.g., by using a base URL from an env var
      const fullUrl = `https://hyfata.kr${url}`;
      setMetaTag('property', 'og:url', fullUrl);
    }

    // Set Image
    if (image) {
      setMetaTag('property', 'og:image', image);
    }
    
    // Set other default OG tags
    setMetaTag('property', 'og:type', 'website');

    // Dispatch event to let prerenderer know we're done
    document.dispatchEvent(new Event('head-manager-done'));
  }, [title, description, url, image]);

  return null;
};

export default HeadManager;