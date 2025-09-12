import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const cards = [
    {
        id: 1,
        src: '/about-image-1.svg',
    },
    {
        id: 2,
        src: '/about-image-2.svg',
    },
    {
        id: 3,
        src: '/about-image-1.svg',
    },
    {
        id: 4,
        src: '/about-image-2.svg',
    },
]

const AboutSlider = () => {
    return (
        <div className={`relative flex min-h-[300px] items-center justify-center pt-[60px] pb-[80px]`}>
            <Swiper className={`mx-auto flex max-w-[700px] items-center justify-center`} spaceBetween={34} slidesPerView={2} loop speed={300} modules={[Navigation]} navigation={{ nextEl: `.next`, prevEl: `.prev`, }}>
                {cards.map(card => (
                    <SwiperSlide key={card.id}>
                        <img src={card.src} alt="Картинка" />
                    </SwiperSlide>
                ))}
            </Swiper>
            {[1, 2].map((_, index) => (
                <button className={`${index === 0 ? 'next right-[65px]' : 'prev left-[65px]'} border-mute-gray absolute
                hover:border-custom-green top-1/2 z-50 flex size-15 -translate-y-1/2 cursor-pointer items-center justify-center
                rounded-full border-[2px] duration-300`} type={'button'} key={index}>
                    <img className={`${index === 0 && 'rotate-180'}`} src={`/arrow-icon.svg`} alt="" />
                </button>
            ))}
        </div>
    )
}

export default AboutSlider