import Image, { type ImageProps } from "next/image";
import { IMAGE_BLURS } from "@/app/lib/image-blurs";

type BlurImageProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  src: string;
};

export default function BlurImage({ src, ...props }: BlurImageProps) {
  const blurDataURL = IMAGE_BLURS[src];

  return (
    <Image
      src={src}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
}
