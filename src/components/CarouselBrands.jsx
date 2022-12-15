import "./CarouselBrands.css";
import Tesla from "../assets/Brands/tesla.png";
import Bramo from "../assets/Brands/brammo.png";
import Nio from "../assets/Brands/nio.png";
// import Drako from "../assets/Brands/drako.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay } from "swiper";
// export default function CarouselBrands() {
//   return (
//     <>
//       <div style={{ backgroundColor: "#FFFFFF" }} className="md:hidden">
//         <Swiper
//           //   spaceBetween={30}
//           //   pagination={{
//           //     clickable: true,
//           //   }}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           modules={[Autoplay]}
//           className="mySwiper"
//         >
//           {/* shadow-[0px_34px_104px_rgba(18,22,28,0.1)] */}
//           <SwiperSlide>
//             {" "}
//             <img src={Tesla} alt="Tesla icon" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={Bramo} alt="Tesla icon" />
//             <img src={Drako} alt="Tesla icon" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={Nio} alt="Tesla icon" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={Drako} alt="Tesla icon" />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// }

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { Autoplay } from "swiper";

export default function CarouselBrands() {
  return (
    <>
      <div className="md:hidden w-[100%] bg-[#ffffff] mt-5">
        <Swiper
          style={{ backgroundColor: "#ffffff" }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#FFFFFF] w-full">
              <div className="w-[198px] h-[43.5px]  mx-auto">
                {" "}
                <img src={Tesla} alt="Tesla icon" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#FFFFFF] w-full">
              <div className="w-[198px] h-[43.5px]  mx-auto">
                {" "}
                <img src={Bramo} alt="Tesla icon" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[#ffffff]">
            <div className="bg-[#FFFFFF] w-full">
              <div className="w-[158px] h-[54px] mx-auto">
                {" "}
                <img src={Nio} alt="Tesla icon" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FFFFFF] w-full">
              <div className="w-[198px] h-[43.5px]  mx-auto">
                {" "}
                <img src={Bramo} alt="Tesla icon" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="bg-[#000] z-50 w-[30%] h-[10vh]"></div> */}
    </>
  );
}
