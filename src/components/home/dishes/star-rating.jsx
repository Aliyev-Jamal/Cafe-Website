import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function StarRating() {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    return (
        <Rating
            iconsCount={5}
            SVGclassName={`inline`}
            initialValue={rating}
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            size={25.5}
        />
    )
}
