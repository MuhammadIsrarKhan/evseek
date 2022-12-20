import "./Carousel.css";
import testimonial from "../assets/Testimonial/testi.svg";
import testimonial2 from "../assets/Testimonial/testi2.svg";
import testimonial3 from "../assets/Testimonial/testi3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
export default function Carousel() {
  return (
    <>
      <div
        style={{ backgroundColor: "#FFFFFF" }}
        className="md:hidden w-[90%] h-[65vh]"
      >
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {/* shadow-[0px_34px_104px_rgba(18,22,28,0.1)] */}
          <SwiperSlide>
            {" "}
            <div className="bg-[#FFFFFF] w-[227px] h-[312px] rounded-[10px] flex flex-col items-center pt-5">
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
              <div className="absolute bottom-[65px]">
                <p className="font-semibold font-inter text-sm text-center text-[#121D12] mx-5 mt-[21px]">
                  Jenny Wilson
                </p>
                <p className="font-normal font-inter text-xs text-center text-[#525B52] mx-5 mt-1">
                  Project Manager at Microsoft
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFFF] w-[227px] h-[312px] rounded-[10px] flex flex-col items-center pt-5">
              <img
                style={{ width: "66px", height: "66px" }}
                src={testimonial2}
                alt="img1"
              />
              <p className="font-normal font-inter text-xs text-center text-[#121D12] mx-5 mt-[16px]">
                “I really like that I can have all in one place: I can send find
                nearest stations and Plan my trip, I can have live chat, get
                push notifications on my screen so i don’t miss the charging
                stations.”
              </p>
              <div className="absolute bottom-[65px]">
                <p className="font-semibold font-inter text-sm text-center text-[#121D12] mx-5 mt-[21px]">
                  Robert Fox
                </p>
                <p className="font-normal font-inter text-xs text-center text-[#525B52] mx-5 mt-1">
                  Founder at Brain.co
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFFF] w-[227px] h-[312px] rounded-[10px] flex flex-col items-center  pt-5">
              <img
                style={{ width: "66px", height: "66px" }}
                src={testimonial3}
                alt="img1"
              />
              <p className="font-normal font-inter text-xs text-center text-[#121D12] mx-5 mt-[16px]">
                “Very easy to use and set up is simple. I can easily search
                nearest EV charging stations in real-time. It also provides many
                integrations.”
              </p>
              <div className="absolute bottom-[65px]">
                <p className="font-semibold font-inter text-sm text-center text-[#121D12] mx-5 mt-[21px]">
                  Kristin Watson
                </p>
                <p className="font-normal font-inter text-xs text-center text-[#525B52] mx-5 mt-1">
                  User from Finland
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
