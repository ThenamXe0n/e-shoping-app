import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ProductSlider = () => {
  let images = [
    "https://slidebazaar.com/wp-content/uploads/2021/09/product-banner-jpg.webp",
    "https://graphicsfamily.com/wp-content/uploads/edd/2022/12/E-commerce-Product-Banner-Design-2048x1152.jpg",
    "https://static.vecteezy.com/system/resources/previews/005/741/458/original/cosmetics-or-skin-care-product-ads-with-bottle-banner-ad-for-beauty-products-and-leaf-background-glittering-light-effect-design-vector.jpg",
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay,Navigation]}
        className="mySwipe"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} >
            <img className="max-h-96 w-full object-fill aspect-[16/9] overflow-visible" src={item} alt={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
