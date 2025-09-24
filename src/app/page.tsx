import Herosection from "./components/ui/Herosection";
import FeaturedCourses from "./components/ui/FeaturedCourses";
import WhychooseUs from "./components/WhychooseUs";
import MusicSchoolTestimonial from "./components/TestimonialCards";
import UpcomingWebinars from "./components/ui/UpcomingWebinars";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <h1 className="text-2xl text-center"></h1>
   <Herosection/>
   <FeaturedCourses/>
   <WhychooseUs/>
   <MusicSchoolTestimonial/>
   <UpcomingWebinars/>
   </main>
  );
}
