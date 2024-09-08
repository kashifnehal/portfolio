"use client"; // Add this directive at the top
import {HeroSubtitle, HeroTitle, HeroWrapper, Overlay} from './styled'
import Image from 'next/image'


const HeroSection: React.FC = () => (
  <HeroWrapper>
      <img src='./heroWrap.jpg' />
      <HeroTitle>Welcome to Patrick David's World</HeroTitle>
      {/* <HeroSubtitle>Entrepreneur, Speaker, and Author</HeroSubtitle> */}
  </HeroWrapper>
);

export default HeroSection;
