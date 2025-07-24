import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@carechakra.com",
      subtitle: "24/7 response"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Main Street, Suite 400",
      subtitle: "Downtown Legal District"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Emergency consultations available"
    }
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    matterType: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors: typeof errors = { firstName: "", lastName: "", email: "", message: "" };
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
      valid = false;
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Please tell us about your situation.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (validate()) {
      // Submit logic here (e.g., API call)
      // Reset form or show success message
      // setForm({ firstName: "", lastName: "", email: "", phone: "", matterType: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a free, confidential consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input 
                    name="firstName"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input 
                    name="lastName"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={handleChange}
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input 
                  type="email"
                  name="email"
                  placeholder="john.doe@email.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Legal Matter Type
                </label>
                <select 
                  className="w-full p-3 border border-input rounded-md bg-background"
                  name="matterType"
                  value={form.matterType}
                  onChange={handleChange}
                >
                  <option value="">Select a practice area</option>
                  <option>Family Law</option>
                  <option>Personal Injury</option>
                  <option>Criminal Defense</option>
                  <option>Immigration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your situation *
                </label>
                <Textarea 
                  name="message"
                  placeholder="Please provide details about your legal matter..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold"
              >
                Schedule Free Consultation
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. 
                All consultations are confidential.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Our Location
              </h3>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Downtown Legal District</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Convenient parking available</p>
                <p>Accessible building entrance</p>
                <p>Public transportation nearby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;