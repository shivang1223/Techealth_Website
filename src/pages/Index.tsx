
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Truck, Eye, Globe, AlertTriangle, BarChart, Navigation, Zap, Users, FileText, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down">
              Revolutionizing <span className="text-gradient-primary">Fleet Safety</span> with <span className="text-gradient-secondary">AI Technology</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 animate-fade-up">
              EmergencyEye combines AI, IoT, and data analytics to transform commercial vehicle safety and fleet management across India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up">
              <Link to="/product">
                <Button size="lg" className="bg-techealth-green hover:bg-techealth-darkgreen text-white">
                  Discover EmergencyEye
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-techealth-green">Techealth Apex</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a deep-tech startup revolutionizing India's commercial vehicle and logistics industry with cutting-edge solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-techealth-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enhanced Safety</h3>
                <p className="text-gray-600">
                  Our AI-powered solutions significantly reduce accidents and enhance driver safety through proactive monitoring and alerts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-techealth-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Optimize fleet performance with real-time analytics, reducing downtime and improving route efficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Eye className="w-12 h-12 text-techealth-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-gray-600">
                  Get 24/7 visibility into your fleet with detailed insights on vehicle health, driver behavior, and location tracking.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/about">
              <Button className="bg-techealth-blue hover:bg-techealth-darkblue text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Introducing <span className="text-techealth-blue">EmergencyEye</span></h2>
              <p className="text-lg text-gray-600 mb-6">
                EmergencyEye is a powerful black box system built specifically for commercial vehicles. By combining artificial intelligence, Internet of Things (IoT), and advanced data analytics, we address key pain points in logistics and fleet management.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-techealth-green text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium">Real-time vehicle tracking and diagnostics</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-techealth-green text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium">Event-based video recording</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-techealth-green text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium">Driver behavior analysis</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-techealth-green text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium">Crash detection with automated emergency alerts</h4>
                  </div>
                </div>
              </div>
              <Link to="/product">
                <Button className="bg-techealth-green hover:bg-techealth-darkgreen text-white">
                  Explore EmergencyEye
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-techealth-green/20 to-techealth-blue/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Fleet monitoring system" 
                  className="w-full object-cover h-full min-h-[400px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-techealth-green rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-techealth-blue rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              EmergencyEye comes equipped with cutting-edge features designed to revolutionize your fleet operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Truck className="w-10 h-10 text-techealth-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Fleet Tracking</h3>
              <p className="text-gray-300">
                Monitor your entire fleet in real-time with precise location data and movement analytics.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <AlertTriangle className="w-10 h-10 text-techealth-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crash Detection</h3>
              <p className="text-gray-300">
                Automatic detection of accidents with immediate emergency alerts to predefined contacts.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <BarChart className="w-10 h-10 text-techealth-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Driver Behavior Analysis</h3>
              <p className="text-gray-300">
                Monitor and analyze driver behavior including speeding, harsh braking, and fatigue detection.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Navigation className="w-10 h-10 text-techealth-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Geo-fencing</h3>
              <p className="text-gray-300">
                Create virtual boundaries and receive alerts when vehicles enter or exit designated areas.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Zap className="w-10 h-10 text-techealth-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Speed Regulation</h3>
              <p className="text-gray-300">
                Automatic speed regulation system to ensure vehicles maintain safe speeds.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Globe className="w-10 h-10 text-techealth-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fleet Dashboard</h3>
              <p className="text-gray-300">
                Comprehensive software dashboard for fleet monitoring, analytics, and management.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/features">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients have to say about how EmergencyEye has transformed their fleet operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Rajesh Kumar</h4>
                    <p className="text-gray-600">Fleet Manager, Logistics Co.</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "EmergencyEye has completely transformed how we manage our fleet. The real-time tracking and driver behavior analysis have helped us reduce accidents by 40% and improve fuel efficiency significantly."
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Priya Sharma</h4>
                    <p className="text-gray-600">Operations Director, Transport Inc.</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The crash detection and emergency alert system saved one of our driver's lives. The automatic notification allowed us to dispatch help immediately. This technology is revolutionary for the industry."
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Vikram Singh</h4>
                    <p className="text-gray-600">CEO, National Trucking</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Implementing EmergencyEye across our fleet has been one of the best business decisions we've made. Insurance costs down, efficiency up, and our drivers feel safer and more accountable."
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-techealth-green to-techealth-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fleet Operations?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join the growing number of companies using EmergencyEye to enhance safety, reduce costs, and optimize their fleet management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white bg-white text-techealth-darkgreen hover:bg-transparent hover:text-white">
                Schedule a Demo
              </Button>
            </Link>
            <Link to="/product">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in fleet management and vehicle safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gray-900/20"></div>
                <FileText className="absolute inset-0 m-auto w-12 h-12 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>April 5, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  The Future of Commercial Vehicle Safety in India
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how AI and IoT technologies are transforming safety standards in the commercial vehicle industry.
                </p>
                <Link to="/insights" className="text-techealth-blue hover:text-techealth-darkblue font-medium inline-flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gray-900/20"></div>
                <FileText className="absolute inset-0 m-auto w-12 h-12 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>March 28, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  5 Ways AI is Reducing Accidents in Logistics
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how artificial intelligence is helping fleet operators drastically reduce accident rates and save lives.
                </p>
                <Link to="/insights" className="text-techealth-blue hover:text-techealth-darkblue font-medium inline-flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gray-900/20"></div>
                <FileText className="absolute inset-0 m-auto w-12 h-12 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>March 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Cost Savings: The Business Case for Fleet Intelligence
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how investing in fleet intelligence technology can lead to significant cost savings and ROI.
                </p>
                <Link to="/insights" className="text-techealth-blue hover:text-techealth-darkblue font-medium inline-flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/insights">
              <Button className="bg-techealth-blue hover:bg-techealth-darkblue text-white">
                View All Insights
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
