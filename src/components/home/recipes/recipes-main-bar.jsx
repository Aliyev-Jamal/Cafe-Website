import { Eye, MessagesSquare } from "lucide-react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'

const RecipesMainBar = () => {
    return (
        <Swiper className="relative w-full max-w-[540px]" modules={[Navigation]} speed={1000} navigation={{
            nextEl: '.recipes-next'
        }} loop>
            <SwiperSlide className={``}>
                <div className={'min-h-[510px] bg-[url("/recipes-img.svg")] flex justify-center items-center flex-col gap-8.5 text-white'}>
                    <button className={`w-[95px] h-[25px] rounded-[6px] bg-background opacity-85`}>BREAKFAST</button>
                    <h4>07 Jan 2016</h4>
                    <h3 className={`p-5 ml-2.5 max-w-[400px] text-2xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <h4>Jason Keller</h4>
                    <span className={`flex justify-between`}>
                        <div className="gap-6 flex items-center">
                            <div className={`flex gap-3`}><Eye /><h3>275</h3></div>
                            <div className={`flex gap-3`}><MessagesSquare /><h3>12</h3></div>
                        </div>
                    </span>
                </div>
            </SwiperSlide>
            <SwiperSlide className={``}>
                <div className={'min-h-[510px] bg-[url("/recipes-img.svg")] flex justify-center items-center flex-col gap-8.5 text-white'}>
                    <button className={`w-[95px] h-[25px] rounded-[6px] bg-background opacity-85`}>BREAKFAST</button>
                    <h4>07 Jan 2016</h4>
                    <h3 className={`p-5 ml-2.5 max-w-[400px] text-2xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <h4>Jason Keller</h4>
                    <span className={`flex justify-between`}>
                        <div className="gap-6 flex items-center">
                            <div className={`flex gap-3`}><Eye /><h3>275</h3></div>
                            <div className={`flex gap-3`}><MessagesSquare /><h3>12</h3></div>
                        </div>
                    </span>
                </div>
            </SwiperSlide>
            <button className={`recipes-next bg-background opacity-85 rounded-4xl p-4 absolute right-7.5 z-10 top-7.5`}><img src="/icons/arrow.svg" alt="#" /></button>
        </Swiper>
    )
}

export default RecipesMainBar