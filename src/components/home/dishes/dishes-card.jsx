import { useState } from "react"
import { StarRating } from "./star-rating"
import Button from "../../ui/button"

const DishesCard = ({ num, index }) => {
    const [rating, setRating] = useState(0)

    const handleClick = (rate, id) => {
        const newRating = [0, 0, 0, 0, 0, 0]
        newRating[i] = rate
        setRating(newRating)
    }

    return (
        <section className={`w-[350px] h-[493px] bg-bg-gray rounded-md font-medium`}>
            <div>
                <img className={`rounded-t-md`} src={`/card-images/card-img-${index}.svg`} alt="#" />
            </div>
            <div className={`p-7.5`}>
                <div className={`mb-5`}>
                    <h3 className={`text-[32px] leading-[30px] text-white`}>Featured Meal</h3>
                    <p className={`text-xs leading-[16px] tracking-[-0.2px] text-foreground`}>Served with french fries + drink</p>
                </div>
                <p className={`mb-6.5 text-[13px] leading-[18px] tracking-[-0.2px] text-foreground`}>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
                <div className={`flex justify-between items-center`}>
                    <StarRating />
                    <Button text={`ORDER`} />
                </div>
            </div>

        </section>
    )
}

export default DishesCard