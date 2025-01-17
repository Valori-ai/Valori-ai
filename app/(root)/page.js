import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import StepsSection from "@/components/home/StepsSection";
import Reviews from "@/components/home/UserReviews";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
  return (
   <div className="md:px-0 px-4">
   <div className="pt-16">
   <HeroSection />
   </div>
   <div className="pt-16">
    <StepsSection />
   </div>
   <div className="pt-16">
   <Features />
   </div>
   <div className="pt-16">
   <Pricing />
   </div>
   <div className="pt-16">
   <Reviews />
   </div>
   </div>
  );
}