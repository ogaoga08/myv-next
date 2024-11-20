"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/ImageComponent.module.css";

export const ImageComponent = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <Image
        src="/cattle.png"
        alt="cattle illustration"
        width={700}
        height={612}
        className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
        onLoad={() => setIsImageLoaded(true)}
      />
    </>
  );
};
