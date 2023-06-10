import React, { useMemo, useEffect, useState } from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useRouter } from "next/router";
import BootcampCard from "./misc/BootcampCard";

const Bootcamp = ({
  listTraining = [
    {
      id: 0,
      name: "Product Management",
      description: "Kelas yang mengupas product, mengapa product management dibutuhkan, skillset seorang product manager serta metodologi yang digunakan",
      image: "/assets/product-management.png",
    },
    {
      id: 1,
      name: "Product Design",
      description: "Kelas yang mengupas product design, merancang product, skillset seorang product designer serta metodologi yang digunakan",
      image: "/assets/product-design.png",
    },
    {
      id: 2,
      name: "Backend",
      description: "Kelas yang sesuai untuk memulai karir sebagai backend engineer dengan materi dasar algoritma, programming, arsitektur aplikasi, database management etc",
      image: "/assets/backend-2.jpg",
    },
    {
      id: 3,
      name: "Frontend",
      description: "Kelas yang mempersiapkan web developer dengan kurikulum yang dirancang sesuai dengan kebutuhan industri",
      image: "/assets/frontend.jpg",
    },
    {
        id: 4,
        name: "Soft Skill",
        description: "Kelas yang akan membantu meningkatkan skill non teknis sehingga dapat berkolaborasi secara team",
        image: "/assets/softskill.png",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = () => {
    setIsLoading(true);
    router.push("/registration");
  };

  useEffect(() => {
    return () => {
      // Cleanup function
      setIsLoading(false);
    };
  }, []);
  
  return (
    <>
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="bootcamp"
    >
      <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Digital Talent Bootcamp
          </h3>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10" 
          style={{ gap: "10px" }} > 
          {listTraining.map(training=>(
            <BootcampCard key={training.id} training={training}/>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
    
    </>
  );
};

export default Bootcamp;
