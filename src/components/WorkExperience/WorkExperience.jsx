import React, { useRef } from "react";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../util/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Navigation, Pagination } from "swiper/modules"; // Import necessary modules

const WorkExperience = () => {
  const swiperRef = useRef(null); // Create a reference for the Swiper instance

  // Function to go to the next slide
  const slideRight = () => {
    swiperRef.current.swiper.slideNext();
  };

  // Function to go to the previous slide
  const slideLeft = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content">
        {/* Custom right arrow */}
        <div className="arrow-right no-select" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        {/* Custom left arrow */}
        <div className="arrow-left no-select" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        <Swiper
          ref={swiperRef} // Attach the reference to the Swiper component
          spaceBetween={50}
          slidesPerView={2}
          slidesPerGroup={1}
          loop={true}
          navigation={false} // Disable default navigation arrows
          pagination={false}
          modules={[Navigation, Pagination]} // Use modules directly here
        >
          {WORK_EXPERIENCE.map((item) => (
            <SwiperSlide key={item.id}>
              <ExperienceCard details={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WorkExperience;
