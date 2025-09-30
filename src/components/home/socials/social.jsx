import Title from "../../ui/title"
import SocialItem from "./social-item"

const Social = () => {
    return (
        <section>
            <div className={'container'}>
                <Title bgTitle={`SOCIAL`} text={`We in Social`} />
                <div>
                    <SocialItem/>
                </div>
            </div>
        </section>
    )
}

export default Social