import type { IconType } from "react-icons";
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import { site } from "../content/site";

const socialIcons: Record<string, IconType> = {
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  TikTok: SiTiktok,
  YouTube: SiYoutube,
};

export default function SocialLinks({ withLabels = false }: { withLabels?: boolean }) {
  return <nav className={`social-links${withLabels ? " social-links-labeled" : ""}`} aria-label="Redes sociales del Profe Erik Timal">
    {site.socialLinks.map(({ name, url }) => {
      const Icon = socialIcons[name];
      return <a className="social-link" href={url} key={name} target="_blank" rel="noopener noreferrer" aria-label={`${name}; se abre en una pestaña nueva`} title={name}>
        <Icon size={18} aria-hidden="true" />
        {withLabels && <span>{name}</span>}
      </a>;
    })}
  </nav>;
}