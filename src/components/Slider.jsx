import React, { useEffect, useRef, useState } from "react";
import globalApi from "../services/globalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    globalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft = (element)=>{
    element.scrollLeft-=screenWidth-110
  }

  return (
    <div>
      <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer" />
      <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0" />
      <div ref={elementRef} className=" scroll-smooth flex overflow-x-auto w-full px-16 py-4 scrollbar-hide">
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[510px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
