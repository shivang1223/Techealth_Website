
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Investors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Investors</h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Coming soon! This page is under construction.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Investors;
