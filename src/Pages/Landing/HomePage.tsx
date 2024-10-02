
import AboutMe from "./AboutMeSection";
import Footer from "./Footer";
import Projects from "./Projects";
import Stars from "./Stars";

const HomePage = () => {
    return(
        <>
        <Stars />
        <div className="min-h-screen text-gray-100 flex flex-col items-center">
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <AboutMe />
                <Projects />
            </main>
            <Footer />
        </div>
        </>
    )
}

export default HomePage;