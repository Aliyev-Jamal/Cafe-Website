import Button from "../../ui/button"

const SocialItem = ({ headerText }) => {
    return (
        <div className={`w-[350px] h-[330px] bg-mute-gray`}>
            <header className={`flex`}>
                <span><img src="#" alt="#" /></span>
                <h3>{headerText}</h3>
                <Button text={'FOLLOW US'} />
            </header>
            <div>

            </div>
        </div>
    )
}

export default SocialItem