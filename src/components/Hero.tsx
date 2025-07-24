import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import qrCode from "@/assets/qr-code.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering You With{" "}
            <span className="text-accent">Expert Legal Guidance</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Legal support that listens first. Serving our community with compassion and clarity.
          </p>

          {/* QR Code Section */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <p className="text-white text-lg font-medium mb-2">Scan here to schedule an appointment.</p>
              <p className="text-white text-lg font-medium">Scan here to instantly connect with a lawyer.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg inline-block">
              <img src={qrCode} alt="QR Code for Legal Services" className="w-40 h-40 mx-auto" />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-lg px-8 py-4 h-auto"
            >
              <a href="https://stagelawyer.panvatech.com/RequestAppointment?PA=MQ==" target="_blank" rel="noopener noreferrer">
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm">Cases Won</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;