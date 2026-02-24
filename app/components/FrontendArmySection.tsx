import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
  PlayIcon,
  SpeakerLoudIcon,
  TwitterLogoIcon,
  VideoIcon,
} from '@radix-ui/react-icons';
import Footer from './Footer';

const FRONTEND_ARMY_SOCIALS = [
  {
    url: 'https://www.twitch.tv/frontend_army',
    name: 'Twitch',
    icon: VideoIcon,
  },
  {
    url: 'https://www.youtube.com/@frontend_army',
    name: 'Youtube',
    icon: PlayIcon,
  },
  {
    url: 'https://open.spotify.com/show/0sN5AI1KvzNm46qhIPqppT',
    name: 'Spotify',
    icon: SpeakerLoudIcon,
  },
  {
    url: 'https://discord.com/invite/pKQ6KdPBj3',
    name: 'Discord',
    icon: DiscordLogoIcon,
  },
  {
    url: 'https://www.instagram.com/frontend_army/',
    name: 'Instagram',
    icon: InstagramLogoIcon,
  },
  {
    url: 'https://twitter.com/frontend_army',
    name: 'Twitter',
    icon: TwitterLogoIcon,
  },
  {
    url: 'https://www.linkedin.com/company/frontend-army',
    name: 'Linkedin',
    icon: LinkedInLogoIcon,
  },
  {
    url: 'https://www.tiktok.com/@frontend_army',
    name: 'Tiktok',
    icon: MobileIcon,
  },
  {
    url: 'https://github.com/frontend-army',
    name: 'Github',
    icon: GitHubLogoIcon,
  },
];

export default function FrontendArmySection() {
  return (
    <div className="flex flex-col h-full justify-center gap-3">
      <div className="max-w-4xl">
        <h1 className="font-bebas text-[60px] leading-15.5">
          Frontend Army Podcast
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl">
          Frontend Army is a community-driven podcast made by frontenders for
          frontenders. It exists to share practical frontend knowledge, bring
          real experiences from the field, and help developers keep growing
          through conversations, interviews, and community exchange.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 max-w-3xl opacity-75">
        {FRONTEND_ARMY_SOCIALS.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center hover:opacity-100 opacity-70 transition-opacity"
            aria-label={item.name}
            title={item.name}
          >
            <item.icon width={18} height={18} />
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}
