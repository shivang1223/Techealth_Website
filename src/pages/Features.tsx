
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Video, 
  UserCheck, 
  AlertTriangle, 
  Eye, 
  Power, 
  Mic, 
  PlayCircle, 
  Navigation, 
  AlertOctagon, 
  Gauge, 
  Ship, // Replaced Speedboat with Ship icon
  LayoutDashboard 
} from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";

const Features = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  
  const features = [
    {
      title: "Real-time vehicle tracking",
      description: "Monitor your fleet's location, movement, and status in real-time with precise GPS tracking.",
      icon: MapPin,
      color: "text-techealth-green"
    },
    {
      title: "Driver behavior analysis",
      description: "Analyze driving patterns to identify risky behaviors and improve driver safety and efficiency.",
      icon: UserCheck,
      color: "text-techealth-blue"
    },
    {
      title: "Event-based video recording",
      description: "Automatic video recording of incidents and unusual events for post-event analysis.",
      icon: Video,
      color: "text-techealth-green"
    },
    {
      title: "Crash detection & emergency alerts",
      description: "Immediate detection of accidents with automated alerts to emergency contacts.",
      icon: AlertTriangle,
      color: "text-techealth-blue"
    },
    {
      title: "Live driver & cabin monitoring",
      description: "Real-time monitoring of driver alertness and cabin conditions to prevent accidents.",
      icon: Eye,
      color: "text-techealth-green"
    },
    {
      title: "Remote vehicle ignition control",
      description: "Enable or disable vehicle ignition remotely for enhanced security and control.",
      icon: Power,
      color: "text-techealth-blue"
    },
    {
      title: "Voice assistance for drivers",
      description: "AI-powered voice guidance and alerts to assist drivers and reduce distractions.",
      icon: Mic,
      color: "text-techealth-green"
    },
    {
      title: "Ride playback for trip/event review",
      description: "Review completed trips with detailed playback of routes, events, and metrics.",
      icon: PlayCircle,
      color: "text-techealth-blue"
    },
    {
      title: "Geo-fencing alerts",
      description: "Create virtual boundaries and receive alerts when vehicles enter or exit designated areas.",
      icon: Navigation,
      color: "text-techealth-green"
    },
    {
      title: "Over-speeding notifications",
      description: "Instant alerts when vehicles exceed speed limits for immediate intervention.",
      icon: AlertOctagon,
      color: "text-techealth-blue"
    },
    {
      title: "Real-time vehicle diagnostics",
      description: "Monitor vehicle health and identify potential issues before they cause breakdowns.",
      icon: Gauge,
      color: "text-techealth-green"
    },
    {
      title: "Automatic speed reduction system",
      description: "AI-powered speed control that automatically adjusts vehicle speed in dangerous conditions.",
      icon: Ship, // Changed from Speedboat to Ship
      color: "text-techealth-blue"
    },
    {
      title: "Centralized fleet management dashboard",
      description: "Comprehensive dashboard to manage all fleet operations from a single interface.",
      icon: LayoutDashboard,
      color: "text-techealth-green"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {showDemoForm && (
        <DemoRequestForm onClose={() => setShowDemoForm(false)} />
      )}
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">EmergencyEye Features</h1>
            
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
              EmergencyEye combines AI, IoT, and data analytics to deliver a comprehensive suite of features
              designed to enhance fleet safety, efficiency, and management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-techealth-green to-techealth-blue p-8 rounded-xl text-white text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience the Future of Fleet Management</h2>
              <p className="text-lg mb-6">
                EmergencyEye is constantly evolving with new features and improvements to meet the changing needs of the industry.
              </p>
              <button
                onClick={() => setShowDemoForm(true)}
                className="bg-white text-techealth-darkgreen hover:bg-gray-100 py-3 px-8 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
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

export default Features;
