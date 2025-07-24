import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import attorneyPhoto from "@/assets/attorney-photo.jpg";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of successful outcomes for our clients"
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Deep understanding of law and legal precedents"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Every client receives dedicated, individualized care"
    },
    {
      icon: Clock,
      title: "Timely Response",
      description: "Quick response times and regular case updates"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={attorneyPhoto}
                alt="Attorney Sarah Johnson"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-accent rounded-lg -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Care Chakra
            </h2>
            
            <div className="text-lg text-muted-foreground mb-8 space-y-4">
              <p>
                At Care Chakra, we believe legal guidance should be empowering, not intimidating. 
                Our team listens with empathy and fights with precision, ensuring you feel 
                supported every step of the way.
              </p>
              
              <p>
                Led by experienced attorney Sarah Johnson, our practice has been serving 
                individuals and families for over 25 years. We understand that legal issues 
                can be overwhelming, which is why we're committed to providing clear, 
                compassionate guidance tailored to your unique situation.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-light"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Download Our Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;