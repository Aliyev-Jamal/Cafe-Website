import Title from "../../ui/title"
import SocialItem from "./social-item"

const Social = () => {
    return (
        <section>
            <div className={'container'}>
                <Title bgTitle={`SOCIAL`} text={`We in Social`} />
                <div className={`flex gap-7.5 mt-[60px] items-start`}>
                    <SocialItem linkImg={`/icons/twitter-icon.svg`} linkName={`Twitter`} type="text"/>
                    <SocialItem linkImg={`/icons/instagram-icon.svg`} linkName={`Instagram`} type="image"/>
                    <SocialItem linkImg={`/icons/facebook-icon.svg`} linkName={`Facebook`} type="text"/>
                </div>
            </div>
        </section>
    )
}

export default Social