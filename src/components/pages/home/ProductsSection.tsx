"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { PRODUCTS } from "@/constants";
import { Triangle } from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-brand-white overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black mb-4 lg:mb-6">
            Our Products
          </h2>
          <p className="text-brand-black text-sm md:text-[16px] max-w-[700px] leading-relaxed mx-auto">
            Everyday, we take a step towards achieving our vision by helping
            people fulfill their learning needs from anywhere at anytime. Below
            are some of the ways by which we make that happen.
          </p>
        </div>
      </Container>

      <div className="relative group">
        <Container className="px-0">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
                centeredSlides: false,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 24,
                centeredSlides: false,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                centeredSlides: false,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-products",
              type: "bullets",
            }}
            navigation={{
              nextEl: ".swiper-button-next-products",
              prevEl: ".swiper-button-prev-products",
              disabledClass: "opacity-30 cursor-not-allowed",
            }}
            loop={false}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper !pb-10 min-h-[300px] px-4 -mx-4 lg:px-0 lg:-mx-0"
          >
            {PRODUCTS.map((product, index) => (
              <SwiperSlide key={index} className="!h-auto">
                {" "}
                <div className="swiper-slide-content bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 grid grid-rows-[auto_1fr_auto] overflow-hidden border border-gray-100/50 h-full">
                  <div className="relative w-full h-48 md:h-56">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col">
                    {" "}
                    <h3 className="text-2xl md:text-[28px] font-bold text-brand-blue mb-4">
                      {product.title}
                    </h3>
                    <p className="text-brand-black text-sm md:text-[16px] leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="p-6 md:p-8 pt-0">
                    {" "}
                    <button className="px-[16px] py-[10px] rounded-md bg-brand-blue/10 text-brand-light-blue font-semibold text-sm hover:bg-brand-blue/20 transition-colors cursor-pointer">
                      Read more
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination-products !relative !bottom-0 !mt-6" />
          </Swiper>
        </Container>

        <div className="swiper-button-prev-products hidden lg:block absolute top-1/2 left-77 -translate-y-1/2 -translate-x-1/2 z-10 text-brand-orange hover:scale-110 transition-transform cursor-pointer">
          <Triangle size={40} fill="currentColor" className="-rotate-90" />
        </div>
        <div className="swiper-button-next-products hidden lg:block absolute top-1/2 right-77 -translate-y-1/2 translate-x-1/2 z-10 text-brand-orange hover:scale-110 transition-transform cursor-pointer">
          <Triangle size={40} fill="currentColor" className="rotate-90" />
        </div>
      </div>
    </section>
  );
}
