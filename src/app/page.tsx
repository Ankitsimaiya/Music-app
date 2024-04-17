import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UncomingWebinar"
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antilised bg-grid-white/0.0]  ">
     <HeroSection></HeroSection>
     <FeaturedCourses/>
     <WhyChooseUs></WhyChooseUs>
     <MusicSchoolTestimonial/>
     <UpcomingWebinar/>
     <Instructor/>
     <Footer/>

    </main>
  );
}
