import courseData from "../data/music_courses.json";
import Link from "next/link";

function FeaturedCourses() {
  return (
    <div  className="py-12 bg-gray-900">
    <div className="text-center">
      <h2 className="text-sm font-semibold tracking-widest text-teal-400 uppercase"> FEATURED COURSES</h2>
      <p className="mt-3 text-4xl sm:text-5xl font-extrabold text-whit">Learn with the best</p>
    </div>
    <div>2</div>
    <div className="mt-20 text-center">
      <Link href={"/courses"} 
      className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
        LINK
      </Link>
    </div>
    </div>
  )
}

export default FeaturedCourses
