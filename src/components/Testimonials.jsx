import styles from '../styles/styles'
import { testimonials } from '../constants/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <section id="reviews" className={`${styles.paddingY}`}>
      <div className="block ss:hidden min-h-[100px]"></div>

      <div className='py-5'>
        <h2 className={`${styles.heading2}`}>
          Clients Reviews
        </h2>
        <p className={`${styles.paragraph}`}> What our clients say about us</p>
      </div>
      <div className={` py-5 flex items-start flex-wrap justify-between`}>
        <div className={`w-[100%] sm:w-[78%] md:w-[70%] bg-dimBlue p-4 ss:p-14`}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }}

            pagination={{
              el: '.swiper-pagination-div',
              type: "fraction",
              clickable: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
              },
            }}
          >
            {
              testimonials.map(feedback => (
                <SwiperSlide key={feedback.id}>
                  <div>
                    <p className={`${styles.paragraph} mt-5`}> {feedback.content} </p>
                  </div>
                  <div className='flex items-center mt-5'>
                    <div className='w-[80px] h-[80px] rounded-full mt-5'>
                      <img className='w-[100%] h-[100%] object-contain rounded-full' src={feedback.img} alt="" />
                    </div>
                    <div className='mx-5'>
                      <h4 className={`font-normal text-[16px] leading-[30.8px] mt-2`}> {feedback.name} </h4>
                      <p className={`font-normal text-greyish text-[14px] leading-[30.8px]`}> {feedback.title} </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <div className='w-[50%] ss:w-[20%] md:w-[25%] text-center py-5 sm:py-0 sm:h-[300px] flex items-center justify-center flex-col'>
          <div className='flex'>
            <div className="swiper-pagination-div text-xl" />
            <span className='ml-3 text-xl'> People </span>
          </div>

          <div className='flex my-5 pb-5'>
            <div className="text-3xl text-blue-300">
              <AiFillStar />
            </div>
            <div className="text-3xl text-blue-300">
              <AiFillStar />
            </div>
            <div className="text-3xl text-blue-300">
              <AiFillStar />
            </div>
            <div className="text-3xl text-blue-300">
              <AiFillStar />
            </div>
            <div className="text-3xl">
              <AiFillStar />
            </div>
          </div>

          <div className='relative w-[90%] md:w-[50%]'>
            <div className='swiper-button-next'> </div>
            <div className='swiper-button-prev '> </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials