'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import PropertyData from '@/assets/data/openrent-data.json';
import PropertyCard, { PropertyType } from "@/ui/cards/property";
import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={3.25}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className={styles.propertySwiper}
    >
      {PropertyData.map((property: PropertyType, index) => {
        return (
          <SwiperSlide key={index}><PropertyCard {...property} /></SwiperSlide>
        )
      })}
    </Swiper>
  )
}