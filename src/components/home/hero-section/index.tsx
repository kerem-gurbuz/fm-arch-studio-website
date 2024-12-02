import { HERO_SLIDES } from './constants';
import { HeroSlider } from './hero-slider';

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="pb-[36px] md:pb-[44.5px] lg:pb-[54px]"
    >
      <div className="md:container">
        <HeroSlider slides={HERO_SLIDES} />
      </div>
    </section>
  );
}
