import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import StarField from "@/components/three/StarField";
import PlanetScroll from "@/components/three/PlanetScroll";

export default function Home() {
  return (
    <div className="relative min-h-screen space-black">
      {/* CSS Star Field Background */}
      <StarField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        
        {/* Planet Scroll Section */}
        <PlanetScroll />
        
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="relative py-12 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 font-jetbrains">
              © 2024 Nikhil - Cosmic Developer. All rights reserved across the galaxy.
            </p>
            <div className="mt-4 flex justify-center items-center space-x-4">
              <span className="text-sm text-gray-500">Built with</span>
              <div className="flex space-x-2">
                <span className="text-space-teal">⚛️</span>
                <span className="text-space-purple">🎯</span>
                <span className="text-space-orange">🚀</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
