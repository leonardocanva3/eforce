import {
  About,
  EbookSection,
  FinalCTA,
  Hero,
  InstagramSection,
  Problems,
  Reviews,
  Services,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <About />
      <EbookSection />
      <Reviews />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}
