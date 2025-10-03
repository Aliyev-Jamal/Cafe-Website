import HomeItems from "../home/home-items"
import myLogo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <section className={`mt-[90px]`}>
            <div className={`h-[275px] bg-bg-gray`}>
                <div className={`h-[155px] flex justify-center items-center  border-b-2 border-b-[#757575]`}>
                    <HomeItems className={`mb-0`} />
                </div>
                <div className={`flex flex-col justify-center items-center mt-7 gap-2`}>
                    <a href="/">
                        <img src={myLogo} alt="#" />
                    </a>
                    <h5 className={`text-[#757575]`}>© Designed by Yellow Snow. All Rights Reserved.</h5>
                </div>
            </div>
        </section>
    )
}

export default Footer