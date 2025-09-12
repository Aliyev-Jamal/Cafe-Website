
import Footer from "./footer/footer"
import Header from "./header/header"


const Wrapper = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}

export default Wrapper