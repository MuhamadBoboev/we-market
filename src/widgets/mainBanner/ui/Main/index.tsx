'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classes from './main.module.scss'
import { Wrapper } from '@shared/ui/Wrapper';
import SliderNav from '@shared/ui/SliderNav/SliderNav';
import clsx from 'clsx';
import Image from 'next/image';

export const Main = () => {
  return  <Wrapper className={classes.wrapper}>
      <div className={classes.body} >
        <Swiper
        effect={'coverflow'}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.2}
        className={classes.swiper}
        pagination={{
          enabled: true,
          clickable: true,
          el: '#gallery-pagination',
          bulletClass: 'slider-custom-pagination-bullet',
          bulletActiveClass: 'slider-custom-pagination-bullet-active',
        }}
        navigation={{
          enabled: true,
          nextEl: '#gallery-nav-next',
          prevEl: '#gallery-nav-prev',
        }}
        centeredSlides={true}
      >
        <SwiperSlide className={classes.slide}>
          <div className={classes.bl_img} >
            <Image 
              className={classes.img}
              src='/assets/images/banners/banner-1.png'
              width={1030}
              height={360}
              alt='banner'
              />
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.bl_img} >
            <Image 
              className={classes.img}
              src='/assets/images/banners/banner-1.png'
              width={1030}
              height={360}
              alt='banner'
              />
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.bl_img} >
            <Image 
              className={classes.img}
              src='/assets/images/banners/banner-1.png'
              width={1030}
              height={360}
              alt='banner'
              />
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.bl_img} >
            <Image 
              className={classes.img}
              src='/assets/images/banners/banner-1.png'
              width={1030}
              height={360}
              alt='banner'
              />
          </div>
        </SwiperSlide>
      </Swiper>
        <div className={classes.Navigation} >
					<SliderNav  
						className={classes.nav_buttons}
						prevId="gallery-nav-prev"
						nextId="gallery-nav-next"
						theme='light'
						/>
				</div>
				<div id={'gallery-pagination'}  
					className={clsx(
					"slider-custom-pagination",
					"slider-custom-pagination-light",
					classes.bullets
					)} >
				</div>
      </div>
  </Wrapper>
};