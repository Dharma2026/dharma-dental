'use client';

import { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url: string;
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const copyToClipboard = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
      }
      
      setShowOptions(false);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy link. Please copy manually: ' + url);
    }
  };

  const handleShare = async () => {
    // Check if native share is available AND reliable
    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // Mobile device - use native share
      try {
        await navigator.share({
          title: title,
          url: url
        });
      } catch (error) {
        // User cancelled, do nothing
        console.log('Share cancelled');
      }
    } else {
      // Desktop or unsupported - show options or copy directly
      setShowOptions(!showOptions);
    }
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank',
      'width=550,height=420'
    );
    setShowOptions(false);
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank',
      'width=550,height=420'
    );
    setShowOptions(false);
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank',
      'width=550,height=420'
    );
    setShowOptions(false);
  };

  return (
    <div className="relative ml-auto">
      <button 
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-[#0F172A]/10 rounded-full hover:bg-[#0F172A] hover:text-white transition-all group"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            <span className="text-sm font-bold">Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-bold">Share</span>
          </>
        )}
      </button>
      
      {/* Share Options Dropdown */}
      {showOptions && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-[#0F172A]/10 rounded-2xl shadow-2xl overflow-hidden z-50 min-w-[200px] animate-fade-in">
          <button
            onClick={copyToClipboard}
            className="w-full px-4 py-3 text-left hover:bg-[#F5F3EE] transition-colors flex items-center gap-3 text-sm font-medium text-[#0F172A]"
          >
            <Copy className="w-4 h-4" />
            Copy Link
          </button>
          
          <div className="border-t border-[#0F172A]/10" />
          
          <button
            onClick={shareToTwitter}
            className="w-full px-4 py-3 text-left hover:bg-[#F5F3EE] transition-colors flex items-center gap-3 text-sm font-medium text-[#0F172A]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Share on X
          </button>
          
          <button
            onClick={shareToFacebook}
            className="w-full px-4 py-3 text-left hover:bg-[#F5F3EE] transition-colors flex items-center gap-3 text-sm font-medium text-[#0F172A]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Share on Facebook
          </button>
          
          <button
            onClick={shareToLinkedIn}
            className="w-full px-4 py-3 text-left hover:bg-[#F5F3EE] transition-colors flex items-center gap-3 text-sm font-medium text-[#0F172A]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Share on LinkedIn
          </button>
        </div>
      )}

      {/* Click outside to close */}
      {showOptions && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowOptions(false)}
        />
      )}
      
      {/* Toast notification */}
      {copied && (
        <div className="absolute top-full mt-2 right-0 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-fade-in whitespace-nowrap z-50">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}