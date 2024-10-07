import React from 'react';
import { YoutubeIcon, LinkedinIcon, InstagramIcon, TwitterIcon, MailIcon } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: YoutubeIcon, href: 'https://www.youtube.com/@comicfixxx', label: 'YouTube' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/comicfix-com', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/comicfix.in/', label: 'Instagram' },
    { icon: TwitterIcon, href: 'https://x.com/comicfixin', label: 'X (Twitter)' },
    { icon: MailIcon, href: 'mailto:comicfixxx@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-purple-900 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-center mt-4 text-sm">
          © {new Date().getFullYear()} ComicFix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;