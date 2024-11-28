import type { ImageSourceMap } from '@/lib/types';
import { ResponsiveImage } from './responsive-image';

type DynamicImageProps = {
  imageConfig: Partial<ImageSourceMap>;
  placeholder?: 'blur' | 'empty';
} & React.HTMLAttributes<HTMLElement>;

export function DynamicImage({
  imageConfig,
  placeholder = 'blur',
  className,
  ...rest
}: DynamicImageProps) {
  if (Object.keys(imageConfig).length === 0) {
    return null;
  }

  return (
    <div className={className} {...rest}>
      {Object.values(imageConfig).map((imageSource, index) => (
        <ResponsiveImage
          key={index}
          imageSource={imageSource}
          placeholder={placeholder}
        />
      ))}
    </div>
  );
}
