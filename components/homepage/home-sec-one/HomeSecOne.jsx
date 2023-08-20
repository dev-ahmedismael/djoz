"use client";
import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Button, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import React from "react";
import { register } from "swiper/element/bundle";
import CarouselItem from "./CarouselItem";

register();
const HomeSecOne = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: true,
      autoplay: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        100: { slidesPerView: 1 },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      injectStyles: [
        `
          .swiper-pagination-bullet{
            width: 30px;
            height: 30px;
            background-color: purple;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const images = [
    "/images/events/event-1.jpg",
    "/images/events/event-2.jpg",
    "/images/events/event-3.jpg",
    "/images/events/event-4.jpg",
    "/images/events/event-1.jpg",
    "/images/events/event-2.jpg",
    "/images/events/event-3.jpg",
  ];
  return (
    <Section>
      <SectionTitle>UPCOMING EVENTS</SectionTitle>

      <swiper-container ref={swiperRef} init="false">
        {images.map((img, index) => (
          <swiper-slide key={index}>
            <Box height={500}>
              <CarouselItem img={img} />
            </Box>
          </swiper-slide>
        ))}
      </swiper-container>
    </Section>
  );
};

export default HomeSecOne;
