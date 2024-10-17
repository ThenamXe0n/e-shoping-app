import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ProductSlider = () => {
  let images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4bb228120705693.60b70f428bd19.jpg",
    "https://img.freepik.com/free-vector/natural-cosmetics-skin-care-lotion-banner_33099-1957.jpg?size=626&ext=jpg",
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
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay,Navigation]}
        className="mySwiper h-[50vh] "
      >
        {images.map((item, index) => (
          <SwiperSlide className="aspect-[7/5]">
            <img className="w-full object-cover" src={item} alt={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
