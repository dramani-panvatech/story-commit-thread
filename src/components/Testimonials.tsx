import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer M.",
      location: "Local Business Owner",
      rating: 5,
      text: "Care Chakra handled my family law case with incredible compassion. Sarah listened to every concern and fought tirelessly for the best outcome. I couldn't have asked for better representation.",
      case: "Family Law"
    },
    {
      name: "Robert K.",
      location: "Construction Worker",
      rating: 5,
      text: "After my workplace injury, I was lost and overwhelmed. The team at Care Chakra guided me through the entire process and secured a settlement that will help support my family's future.",
      case: "Personal Injury"
    },
    {
      name: "Maria S.",
      location: "Restaurant Manager",
      rating: 5,
      text: "The immigration process seemed impossible until I found Care Chakra. They made everything clear and helped my family achieve our dream of becoming citizens. Forever grateful!",
      case: "Immigration"
    },
    {
      name: "David L.",
      location: "Local Resident",
      rating: 5,
      text: "When I was facing criminal charges, I was terrified. Care Chakra's defense strategy was brilliant, and they never stopped believing in my case. The charges were ultimately dismissed.",
      case: "Criminal Defense"
    },
    {
      name: "Lisa T.",
      location: "Teacher",
      rating: 5,
      text: "Professional, knowledgeable, and truly caring. Care Chakra helped me through a difficult divorce with dignity and respect. They protected my interests and my children's future.",
      case: "Family Law"
    },
    {
      name: "Michael R.",
      location: "Small Business Owner",
      rating: 5,
      text: "Outstanding service from start to finish. Care Chakra handled my personal injury case efficiently and secured compensation that exceeded my expectations. Highly recommend!",
      case: "Personal Injury"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real clients who trusted us with their most important legal matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      {testimonial.case}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;