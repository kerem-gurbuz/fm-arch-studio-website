import Image from 'next/image';

import type { ImageSource } from '@/lib/types';
import { cn } from '@/lib/utils';

type ResponsiveImageProps = {
  imageSource: ImageSource;
  placeholder?: 'blur' | 'empty';
} & React.HTMLAttributes<HTMLElement>;

export function ResponsiveImage({
  imageSource,
  placeholder = 'blur',
  className,
  ...rest
}: ResponsiveImageProps) {
  return (
    <figure
      className={cn(
        'relative h-full w-full',
        imageSource.wrapperClassName,
        className,
      )}
      {...rest}
    >
      <Image
        src={imageSource.src}
        alt={imageSource.alt}
        className={imageSource.className}
        sizes={imageSource.sizes}
        quality={imageSource.quality}
        priority={imageSource.priority}
        placeholder={placeholder}
        blurDataURL={
          placeholder === 'blur' ? imageSource.src.blurDataURL : undefined
        }
        fill
      />
    </figure>
  );
}
