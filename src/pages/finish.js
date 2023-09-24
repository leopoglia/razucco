import Footer from "../components/footer";
import About from "../components/about";
import Stats from "../components/stats";



export default function Finish() {

    return (
        <div>
            <span className="h-60 flex items-center justify-center text-4xl">
                Obrigado por comprar conosco!
            </span>

            <Stats />

            <About />

            <Footer />

        </div>
    )
}