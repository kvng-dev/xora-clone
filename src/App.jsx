import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
    </main>
  );
}

export default App;
