'use client';

import { useState, useEffect } from 'react';
import { TbArrowsExchange } from 'react-icons/tb';

const BrandToggle = () => {
  const [isFourMeme, setIsFourMeme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch current branding state
  const fetchBrandingState = async () => {
    try {
      const response = await fetch('/api/branding');
      const data = await response.json();
      setIsFourMeme(data.isFourMeme);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching branding state:', error);
      setIsLoading(false);
    }
  };

  // Update branding state
  const updateBrandingState = async (newState) => {
    try {
      await fetch('/api/branding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFourMeme: newState }),
      });
    } catch (error) {
      console.error('Error updating branding state:', error);
    }
  };

  useEffect(() => {
    fetchBrandingState();

    // Set up polling to check for updates every 5 seconds
    const interval = setInterval(fetchBrandingState, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Update DOM when isFourMeme changes
      const elements = document.getElementsByTagName('*');
      
      for (let element of elements) {
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') continue;

        // Handle image sources
        if (element.tagName === 'IMG') {
          const src = element.getAttribute('src');
          if (isFourMeme && src === 'https://i.ibb.co/wgXQCtN/pump.gif') {
            element.setAttribute('src', 'https://i.ibb.co/xSCLsNxm/Logo.webp');
          } else if (!isFourMeme && src === 'https://i.ibb.co/xSCLsNxm/Logo.webp') {
            element.setAttribute('src', 'https://i.ibb.co/wgXQCtN/pump.gif');
          }
        }

        if (element.childNodes && element.childNodes.length > 0) {
          for (let node of element.childNodes) {
            if (node.nodeType === 3) {
              if (isFourMeme) {
                node.textContent = node.textContent.replace(/pump\.fun/gi, 'Four.Meme');
                node.textContent = node.textContent.replace(/Pump\.Fun/gi, 'Four.Meme');
              } else {
                node.textContent = node.textContent.replace(/four\.meme/gi, 'pump.fun');
                node.textContent = node.textContent.replace(/Four\.Meme/gi, 'Pump.Fun');
              }
            }
          }
        }

        if (element.hasAttribute('href')) {
          const href = element.getAttribute('href');
          if (isFourMeme && href.includes('pump.fun/board')) {
            element.setAttribute('href', 'https://four.meme/');
          } else if (!isFourMeme && href.includes('four.meme')) {
            element.setAttribute('href', 'https://pump.fun/board');
          }
        }
      }
    }
  }, [isFourMeme, isLoading]);

  const toggleBranding = async () => {
    const newState = !isFourMeme;
    setIsFourMeme(newState);
    await updateBrandingState(newState);
  };

  if (isLoading) {
    return null;
  }

  return (
    <button
      onClick={toggleBranding}
      title={`Switch to ${isFourMeme ? 'Pump.Fun' : 'Four.Meme'}`}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        color: '#000',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1000,
        opacity: 0.5,
        transition: 'all 0.2s ease',
      }}
      onMouseOver={(e) => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'rotate(180deg)';
      }}
      onMouseOut={(e) => {
        e.target.style.opacity = '0.5';
        e.target.style.transform = 'rotate(0deg)';
      }}
    >
      <TbArrowsExchange size={24} />
    </button>
  );
};

export default BrandToggle; 