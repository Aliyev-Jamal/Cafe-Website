const Title = ({ className, bgTitle, text }) => {
    return (
        <h3 className={`before:bg-custom-green before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-0.5 before:w-[60px] relative text-center text-white w-full z-10 flex items-center justify-center min-h-[150px] ${className}`}>
            <span className={`uppercase tracking-wide -z-1 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-[100px] text-mute-gray leading-1.5 absolute`}>{bgTitle}</span>
            <p className={`text-3xl`}>{text}</p>
        </h3>
    )
}

export default Title