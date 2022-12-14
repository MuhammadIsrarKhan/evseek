import "./Carousel.css";
import testimonial from "../assets/testi.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div
        style={{ backgroundColor: "#F6FAF6" }}
        className="md:hidden w-[90%] h-[90vh]"
      >
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="bg-[#FFFFFF] w-[227px] h-[312px] rounded-[10px] flex flex-col items-center shadow-[0px_34px_104px_rgba(18,22,28,0.1)] mt-44 pt-5">
              <img
                style={{ width: "66px", height: "66px" }}
                src={testimonial}
                alt="img1"
              />
              <p className="font-normal font-inter text-xs text-center text-[#121D12] mx-5 mt-[16px]">
                “I just simply love the app that make my life easier! I have
                everything that I need while driving my EV, that allows save
                cost as well as plan my trip according the stations available.”
              </p>
              <p className="font-semibold font-inter text-sm text-center text-[#121D12] mx-5 mt-[21px]">
                Jenny Wilson
              </p>
              <p className="font-normal font-inter text-xs text-center text-[#525B52] mx-5 mt-1">
                Project Manager at Microsoft
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFFF] w-[227px] h-[312px] rounded-[10px] flex flex-col items-center shadow-[0px_34px_104px_rgba(18,22,28,0.1)] mt-44 pt-5">
              <img
                style={{ width: "66px", height: "66px" }}
                src={testimonial}
                alt="img1"
              />
              <p className="font-normal font-inter text-xs text-center text-[#121D12] mx-5 mt-[16px]">
                “I just simply love the app that make my life easier! I have
                everything that I need while driving my EV, that allows save
                cost as well as plan my trip according the stations available.”
              </p>
              <p className="font-semibold font-inter text-sm text-center text-[#121D12] mx-5 mt-[21px]">
                Jenny Wilson
              </p>
              <p className="font-normal font-inter text-xs text-center text-[#525B52] mx-5 mt-1">
                Project Manager at Microsoft
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFFF] w-[227px] h-[312px] rounded-[10px] flex flex-col items-center shadow-[0px_34px_104px_rgba(18,22,28,0.1)] mt-44 pt-5">
              <img
                style={{ width: "66px", height: "66px" }}
                src={testimonial}
                alt="img1"
              />
              <p className="font-normal font-inter text-xs text-center text-[#121D12] mx-5 mt-[16px]">
                “I just simply love the app that make my life easier! I have
                everything that I need while driving my EV, that allows save
                cost as well as plan my trip according the stations available.”
              </p>
              <p className="font-semibold font-inter text-sm text-center text-[#121D12] mx-5 mt-[21px]">
                Jenny Wilson
              </p>
              <p className="font-normal font-inter text-xs text-center text-[#525B52] mx-5 mt-1">
                Project Manager at Microsoft
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
