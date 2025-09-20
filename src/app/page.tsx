import Herosection from "./components/ui/Herosection";
import FeaturedCourses from "./components/ui/FeaturedCourses";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <h1 className="text-2xl text-center"></h1>
   <Herosection/>
   <FeaturedCourses/>
   </main>
  );
}
