export interface GalleryImage {
  id: number;
  thumb: string;
  src: string;
  alt: string;
  caption: string;
}

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  url: string;
  ariaLabel: string;
}