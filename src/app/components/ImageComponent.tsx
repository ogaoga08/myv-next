"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/ImageComponent.module.css";

interface ImageComponentProps {
  src: string;
}

export const ImageComponent = ({ src }: ImageComponentProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt="cattle illustration"
        width={700}
        height={612}
        className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
        onLoad={() => setIsImageLoaded(true)}
      />
    </>
  );
};
