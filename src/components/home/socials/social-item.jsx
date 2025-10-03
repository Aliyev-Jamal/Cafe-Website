import Button from "../../ui/button"

const SocialItem = ({ linkImg, linkName, type = 'text' }) => {
    return (
        <div className={`w-[350px] min-h-[330px] flex flex-col bg-mute-gray rounded-[6px]`}>
            <header className={`flex justify-between items-center px-6 h-[88px] border-b-2 border-b-[#757575]`}>
                <div className={`flex items-center gap-5`}>
                    <span className={`rounded-full border-2 border-[#757575]`}><img src={linkImg} alt="#" /></span>
                    <h3 className={`text-[#757575] font-bold `}>{linkName}</h3>
                </div>
                <Button className={`bg-transparent border-2 border-[#757575] text-[12px]`} text={'FOLLOW US'} />
            </header>
            {type == 'text' ? (
                <div className={`px-6 flex flex-col py-5 h-full grow`}>
                    <div className="grow ">
                        <h4 className={`text-[#757575]`}>07 Jan 2016</h4>
                        <h3 className={`text-white mt-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                    </div>
                    <h4 className={`text-custom-green mt-auto`}>@DennisFerguson</h4>
                </div>
            ) : (
                <div className={`flex flex-wrap mt-[1px]`}>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num}>
                            <img src={`/insta-icons/insta-${num}.jpg`} alt="" />
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default SocialItem