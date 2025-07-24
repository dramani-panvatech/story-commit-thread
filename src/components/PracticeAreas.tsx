import { Users, Heart, Shield, Plane } from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Heart,
      title: "Family Law",
      description: "Divorce, child custody, adoption, and domestic relations handled with sensitivity and care.",
      features: ["Divorce & Separation", "Child Custody", "Adoption Services", "Prenuptial Agreements"]
    },
    {
      icon: Users,
      title: "Personal Injury",
      description: "Fighting for compensation after accidents, medical malpractice, and workplace injuries.",
      features: ["Car Accidents", "Medical Malpractice", "Workplace Injuries", "Insurance Claims"]
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Protecting your rights and freedom with aggressive defense strategies.",
      features: ["DUI Defense", "Drug Charges", "Assault Cases", "White Collar Crime"]
    },
    {
      icon: Plane,
      title: "Immigration",
      description: "Helping families and individuals navigate complex immigration processes.",
      features: ["Visa Applications", "Green Card Process", "Citizenship", "Deportation Defense"]
    }
  ];

  return (
    <section id="practice-areas" className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal services tailored to your needs, delivered with expertise and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-border group hover:border-accent"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6 text-accent group-hover:text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {area.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center text-sm text-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;