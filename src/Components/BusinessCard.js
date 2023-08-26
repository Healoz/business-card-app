import Footer from './Footer';
import About from './About';
import Info from './Info';
import Interests from './Interests';

export default function BusinessCard() {
    return (
        <section className="business-card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </section>
        

    )
}