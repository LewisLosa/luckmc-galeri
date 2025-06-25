import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { SocialLink } from "@/types";

export const socialMediaLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com",
    ariaLabel: "GitHub profilimizi ziyaret edin",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com",
    ariaLabel: "Twitter profilimizi takip edin",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com",
    ariaLabel: "LinkedIn profilimize bağlanın",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
    ariaLabel: "Instagram sayfamızı takip edin",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://youtube.com",
    ariaLabel: "YouTube kanalımıza abone olun",
  },
];