import { useEffect } from 'react';

const HeadManager = ({ title, description }) => {
  useEffect(() => {
    // Set Title
    if (title) {
      document.title = title;
    }

    // Set Meta Description
    if (description) {
      let descriptionTag = document.querySelector('meta[name="description"]');
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default HeadManager;
