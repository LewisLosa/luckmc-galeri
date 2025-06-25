"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react"
import type { LightGallery as LightGalleryInstance } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { useRef, useCallback, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import { ThemeProvider } from "@/components/Theme";
import Footer from "@/components/Footer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { galleryImages } from "@/constants/gallery";
import { GalleryImage as GalleryImageType } from "@/types";
import ErrorBoundary from "@/components/ui/error-boundary";

export default function HomePage() {
  return (
    <main className="bg-neutral-100 dark:bg-neutral-900">
      <ErrorBoundary>
        <Hero />
        <ImageGallery />
        <Footer />
      </ErrorBoundary>
    </main>
  );
}

function ImageGallery() {
  const lightGalleryRef = useRef<LightGalleryInstance | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleOpen = useCallback((index: number) => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(index);
    }
  }, []);

  const { scrollY } = useScroll();
  const translateYCol1 = useTransform(scrollY, [0, 4200], [0, -400]);
  const translateYCol3 = useTransform(scrollY, [0, 4200], [0, 450]);

  const columns = useMemo(() => {
    const column1 = galleryImages.filter((_, index) => index % 3 === 0);
    const column2 = galleryImages.filter((_, index) => index % 3 === 1);
    const column3 = galleryImages.filter((_, index) => index % 3 === 2);
    return { column1, column2, column3 };
  }, []);

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
              {columns.column1.map((image) => (
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
              {columns.column2.map((image) => (
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
              {columns.column3.map((image) => (
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

const GalleryImage = memo(function GalleryImage({
  image,
  onImageClick,
}: {
  image: GalleryImageType;
  onImageClick: () => void;
}) {
  return (
    <div className="relative group cursor-pointer" onClick={onImageClick}>
      <Image
        src={image.thumb}
        alt={image.alt}
        width={1920}
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
});