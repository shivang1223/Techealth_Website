
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  BrainCircuit, 
  ShieldCheck, 
  TrendingUp, 
  Truck, 
  BarChart3,
  Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DemoRequestForm from "@/components/DemoRequestForm";

const About = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {showDemoForm && (
        <DemoRequestForm onClose={() => setShowDemoForm(false)} />
      )}
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us</h1>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Techealth Apex is an emerging deep-tech startup transforming the logistics and commercial vehicle sector 
                with smart, AI-powered safety and fleet management solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded by Shivang Tiwari and Gaurav Kumar, the company's core innovation, EmergencyEye, 
                acts as a black box for vehicles—offering real-time tracking, driver monitoring, crash alerts, 
                and remote control features to make transport safer and more efficient.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
                  <ShieldCheck className="w-16 h-16 text-techealth-green mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Enhancing Safety</h3>
                  <p className="text-gray-600">
                    We're committed to reducing road accidents and saving lives through 
                    preventive monitoring and real-time emergency response systems.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
                  <TrendingUp className="w-16 h-16 text-techealth-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Optimizing Operations</h3>
                  <p className="text-gray-600">
                    We help logistics companies improve efficiency, reduce costs, and 
                    enhance fleet performance through data-driven insights.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-10">Our Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src="/lovable-uploads/52bde5ac-a7a1-44d8-94e3-d237c61f2daf.png" 
                      alt="Shivang Tiwari" 
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">Shivang Tiwari</h3>
                    <p className="text-techealth-blue font-medium mb-3">Chief Executive Officer</p>
                    <p className="text-gray-600 mb-4">
                      Leading Techealth Apex's vision to transform commercial vehicle safety across India.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/shivangtiwari23/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-techealth-green hover:text-techealth-darkgreen font-medium flex items-center"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="mr-2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn Profile
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src="/lovable-uploads/1fd6c00b-ff43-4680-9f35-7920ed98261a.png" 
                      alt="Gaurav Kumar" 
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">Gaurav Kumar</h3>
                    <p className="text-techealth-blue font-medium mb-3">Chief Operations Officer</p>
                    <p className="text-gray-600 mb-4">
                      Overseeing the operational excellence and strategic implementation at Techealth Apex.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/shivangtiwari23/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-techealth-green hover:text-techealth-darkgreen font-medium flex items-center"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="mr-2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn Profile
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Ready to See EmergencyEye in Action?</h2>
              <button
                onClick={() => setShowDemoForm(true)}
                className="bg-techealth-blue hover:bg-techealth-darkblue text-white py-3 px-8 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
