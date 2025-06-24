"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import { ThemeProvider } from "@/components/Theme";
import Footer from "@/components/Footer";


//COOOOOOOOOOOOOOK FAZLA KOD VAR
//FramerMotion kısmında AI'dan yardım aldım. Çünkü üşengecim. Ama çok güzel oldu.
const galleryImages = [
  {
    id: 1,
    thumb: "/LuckMC/spawngenel.avif",
    src: "/LuckMC/spawngenel.avif",
    alt: "Skyblock Sunucusu genel spawn görünümü",
    caption: "Genel Spawn Görünümü",
  },
  {
    id: 2,
    thumb: "/LuckMC/spawn.avif",
    src: "/LuckMC/spawn.avif",
    alt: "Skyblock Sunucusu spawn noktası",
    caption: "Spawn",
  },
  {
    id: 3,
    thumb: "/LuckMC/avantajlar.avif",
    src: "/LuckMC/avantajlar.avif",
    alt: "Skyblock sunucusundaki avantajlar menüsü",
    caption: "Avantajlar",
  },
  {
    id: 4,
    thumb: "/LuckMC/hizlierisim.avif",
    src: "/LuckMC/hizlierisim.avif",
    alt: "Skyblock sunucusundaki hızlı erişim menüsü",
    caption: "Hızlı Erişim",
  },
  {
    id: 5,
    thumb: "/LuckMC/koylutakas.avif",
    src: "/LuckMC/koylutakas.avif",
    alt: "Skyblock sunucusundaki köylü takas sistemi",
    caption: "Köylü Takas",
  },
  {
    id: 6,
    thumb: "/LuckMC/balikci.avif",
    src: "/LuckMC/balikci.avif",
    alt: "Skyblock sunucusundaki balıkçı",
    caption: "Balıkçı",
  },
  {
    id: 7,
    thumb: "/LuckMC/metintasi.avif",
    src: "/LuckMC/metintasi.avif",
    alt: "Skyblock sunucusundaki metin taşı",
    caption: "Metin Taşı",
  },
  {
    id: 8,
    thumb: "/LuckMC/ada1.avif",
    src: "/LuckMC/ada1.avif",
    alt: "LuckMC Sunucusundan ada görünümü 1",
    caption: "Ada 1",
  },
  {
    id: 9,
    thumb: "/LuckMC/ada2.avif",
    src: "/LuckMC/ada2.avif",
    alt: "LuckMC Sunucusundan ada görünümü 2",
    caption: "Ada 2",
  },
  {
    id: 10,
    thumb: "/LuckMC/adatabela.avif",
    src: "/LuckMC/adatabela.avif",
    alt: "Skyblock sunucusundaki ada tabelası",
    caption: "Ada Tabelası",
  },
  {
    id: 11,
    thumb: "/LuckMC/barci.avif",
    src: "/LuckMC/barci.avif",
    alt: "Skyblock sunucusundaki barcı",
    caption: "Barcı",
  },
  {
    id: 12,
    thumb: "/LuckMC/kasa1.avif",
    src: "/LuckMC/kasa1.avif",
    alt: "Skyblock sunucusundaki kasa 1",
    caption: "Kasa 1",
  },
  {
    id: 13,
    thumb: "/LuckMC/kasa2.avif",
    src: "/LuckMC/kasa2.avif",
    alt: "Skyblock sunucusundaki kasa 2",
    caption: "Kasa 2",
  },
];
export default function HomePage() {
  return (
    <main className="bg-neutral-100 dark:bg-neutral-900">
      <Hero />
      <ImageGallery />
      <Footer />
    </main>
  );
}

function ImageGallery() {
  const lightGalleryRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleOpen = (index: number) => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(index);
    }
  };

  const { scrollY } = useScroll();
  const translateYCol1 = useTransform(scrollY, [0, 4200], [0, -400]);
  const translateYCol3 = useTransform(scrollY, [0, 4200], [0, 450]);

  const column1 = galleryImages.filter((_, index) => index % 3 === 0);
  const column2 = galleryImages.filter((_, index) => index % 3 === 1);
  const column3 = galleryImages.filter((_, index) => index % 3 === 2);

  return (
    <div className="w-full py-1 px-1 md:px-1 max-w-none ">
      <LightGallery
        dynamic
        dynamicEl={galleryImages.map((img) => ({
          src: img.src,
          thumb: img.thumb,
          subHtml: `<h4>${img.caption}</h4><p>${img.alt}</p>`,
        }))}
        plugins={[lgThumbnail, lgZoom]}
        onInit={(detail) => {
          lightGalleryRef.current = detail.instance;
        }}
      />
      <div className="w-full overflow-visible grid grid-cols-1 md:grid-cols-3 md:gap-1">
        {isMobile ? (
          <div className="flex flex-col gap-1">
            {galleryImages.map((image) => (
              <GalleryImage
                key={image.id}
                image={image}
                onImageClick={() =>
                  handleOpen(
                    galleryImages.findIndex((img) => img.id === image.id)
                  )
                }
              />
            ))}
          </div>
        ) : (
          <>
            <motion.div
              style={{ y: translateYCol1 }}
              className="flex flex-col gap-1 transition-transform ease-out"
            >
              {column1.map((image) => (
                <GalleryImage
                  key={image.id}
                  image={image}
                  onImageClick={() =>
                    handleOpen(
                      galleryImages.findIndex((img) => img.id === image.id)
                    )
                  }
                />
              ))}
            </motion.div>
            <div className="flex flex-col gap-1">
              {column2.map((image) => (
                <GalleryImage
                  key={image.id}
                  image={image}
                  onImageClick={() =>
                    handleOpen(
                      galleryImages.findIndex((img) => img.id === image.id)
                    )
                  }
                />
              ))}
            </div>
            <motion.div
              style={{ y: translateYCol3 }}
              className="h-fit flex flex-col gap-1 transition-transform ease-out"
            >
              {column3.map((image) => (
                <GalleryImage
                  key={image.id}
                  image={image}
                  onImageClick={() =>
                    handleOpen(
                      galleryImages.findIndex((img) => img.id === image.id)
                    )
                  }
                />
              ))}
            </motion.div>
          </>
        )}
      </div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      ></ThemeProvider>
    </div>
  );
}

function GalleryImage({
  image,
  onImageClick,
}: {
  image: (typeof galleryImages)[0];
  onImageClick: () => void;
}) {
  return (
    <div className="relative group cursor-pointer" onClick={onImageClick}>
      <Image
        src={image.thumb}
        alt={image.alt}
        width={1920} //Bunlar kalite ayarları. Boyut için aşağıdaki width ve height değerlerini değiştirmeniz gerekir. :-)
        height={1920}
        className="w-full object-cover transition-opacity duration-300 group-hover:opacity-95 aspect-[3/4]"
      />
      <div className="absolute bottom-0 left-0 p-3">
        <span className="text-sm font-light text-white bg-black/30 backdrop-blur-sm px-2 py-1 rounded-sm">
          {image.caption}
        </span>
      </div>
    </div>
  );
}
