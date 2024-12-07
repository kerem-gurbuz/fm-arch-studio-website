import { ResponsiveImage } from '@/components/common';
import { sanitizeString } from '@/lib/utils';
import type { Leader, SocialLink } from '../types';
import { LinkedInIcon } from './linkedin-icon';
import { TwitterIcon } from './twitter-icon';

type LeaderCardProps = {
  leader: Leader;
  className?: string;
};

const socialIconMap = {
  linkedin: (
    <LinkedInIcon className="h-10 w-10 fill-white transition-colors duration-300 hover:fill-white/80" />
  ),
  twitter: (
    <TwitterIcon className="h-10 w-10 fill-white transition-colors duration-300 hover:fill-white/80" />
  ),
};

export function LeaderCard({ leader, className }: LeaderCardProps) {
  const leaderName = sanitizeString(leader.name);

  return (
    <div aria-labelledby={`${leaderName}-heading`} className={className}>
      <div className="group relative">
        {/* Card Image */}
        <ResponsiveImage imageSource={leader.image} placeholder="blur" />
        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
        {/* Social Links */}
        <div
          aria-label="Social Links"
          className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          {renderSocialLinks(leader.socialLinks)}
        </div>
      </div>
      {/* Name & Role */}
      <div className="mt-[15px]">
        <h3 id={`${leaderName}-heading`} className="heading-sm">
          {leader.name}
        </h3>
        <p className="body-text opacity-75">{leader.role}</p>
      </div>
    </div>
  );
}

const renderSocialLinks = (socialLinks: SocialLink[]) => {
  return socialLinks.map((socialLink) => (
    <a
      key={socialLink.url}
      href={socialLink.url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      {socialIconMap[socialLink.name]}
    </a>
  ));
};
