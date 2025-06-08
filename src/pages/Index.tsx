
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  CheckCircle, 
  Factory, 
  Wrench, 
  Shield, 
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Upload,
  Settings,
  Award,
  Users,
  Target
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    productType: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    // Handle form submission logic here
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <motion.header 
        className="bg-white border-b shadow-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Factory className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-primary">ML Industries</h1>
                <p className="text-sm text-muted-foreground">Precision Fasteners</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#quality" className="text-foreground hover:text-primary transition-colors">Quality</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button size="sm">Request Quote</Button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Precision Fasteners
              <span className="block text-blue-400">Made in India</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              ML Industries manufactures high-quality bolts, screws, rivets, nuts, pins, washers and custom turning components with ISO-equivalent precision from Faridabad, Haryana.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={fadeInUp}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                View Product Catalog
              </Button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">ISO Standards</h3>
                <p className="text-slate-300">Compliant with ISO 898, DIN, ASTM quality standards</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <Wrench className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Custom Manufacturing</h3>
                <p className="text-slate-300">Precision CNC turning and custom fastener solutions</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-slate-300">Quick turnaround with zero-defect quality assurance</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of standard and custom fasteners manufactured with precision engineering
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                title: "Bolts & Screws",
                description: "Hex bolts, machine screws, self-tapping screws, anchor bolts with various head types",
                features: ["M3 to M64 sizes", "Grade 8.8 to 12.9", "Zinc plated finish"],
                image: "photo-1518770660439-4636190af475"
              },
              {
                title: "Nuts & Washers",
                description: "Hex nuts, square nuts, lock nuts, flat washers, spring washers in various materials",
                features: ["Carbon & Stainless Steel", "DIN/ISO Standards", "Custom threading"],
                image: "photo-1518770660439-4636190af475"
              },
              {
                title: "Rivets & Pins",
                description: "Solid rivets, blind rivets, dowel pins, cotter pins for industrial applications",
                features: ["Aluminum & Steel", "Custom lengths", "Aerospace grade"],
                image: "photo-1518770660439-4636190af475"
              },
              {
                title: "Custom Components",
                description: "CNC turned components, special fasteners manufactured to customer drawings",
                features: ["Prototype to Production", "Complex geometries", "Tight tolerances"],
                image: "photo-1518770660439-4636190af475"
              },
              {
                title: "Coated Fasteners",
                description: "Zinc plated, galvanized, PTFE coated, black oxide finished fasteners",
                features: ["Corrosion resistant", "High durability", "Custom colors"],
                image: "photo-1518770660439-4636190af475"
              },
              {
                title: "High-Tensile Bolts",
                description: "Grade 10.9 and 12.9 high-strength bolts for critical applications",
                features: ["Automotive grade", "Structural bolting", "Certified materials"],
                image: "photo-1518770660439-4636190af475"
              }
            ].map((product, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-t-lg">
                    <img 
                      src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=400&h=250`}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      <Button className="w-full mt-4">Request Quote</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">About ML Industries</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Located in Khasra Number 427/2, Village Bhakhri, Faridabad 121004, Haryana, ML Industries is a leading manufacturer of precision fasteners and turning components.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With state-of-the-art CNC turning capabilities and stringent quality control processes, we serve automotive, construction, electronics, and machinery industries across India and globally.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Product Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Quality Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              {...fadeInUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&h=400"
                alt="Manufacturing facility"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=400"
                alt="Precision components"
                className="rounded-lg shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section id="quality" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Quality & Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our adherence to international standards and rigorous quality control processes
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { icon: Shield, title: "ISO 898 Compliance", description: "Mechanical properties of fasteners" },
              { icon: Award, title: "DIN Standards", description: "German engineering standards" },
              { icon: Target, title: "ASTM Certified", description: "American testing standards" },
              { icon: Settings, title: "Zero PPM Goal", description: "Continuous quality improvement" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 h-full">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="mb-3">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 bg-white rounded-lg p-8 shadow-sm"
            {...fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {["Automotive", "Construction", "Electronics", "Agriculture", "Machinery"].map((industry, index) => (
                <div key={index} className="text-center">
                  <Badge variant="secondary" className="mb-2">{industry}</Badge>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                quote: "ML Industries delivered custom screws exactly per our drawings, on time and defect-free. Their quality control is exceptional.",
                name: "Rajesh Kumar",
                company: "Auto Components Ltd.",
                rating: 5
              },
              {
                quote: "Outstanding precision and finishing quality. We've been sourcing fasteners from ML Industries for over 5 years now.",
                name: "Priya Singh",
                company: "Construction Corp",
                rating: 5
              },
              {
                quote: "Their custom turning components meet aerospace-grade standards. Highly recommended for critical applications.",
                name: "Amit Sharma",
                company: "Precision Engineering",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="mb-4 text-base italic">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact & Quote Request */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl mb-8 text-slate-300">
                Ready to discuss your fastener requirements? Send us your specifications and we'll provide a detailed quote.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-blue-400" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-slate-300">Khasra 427/2, Village Bhakhri, Faridabad 121004, Haryana</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-blue-400" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-300">+91 XXXXX XXXXX</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-blue-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">info@mlindustries.in</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="bg-white text-slate-900">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                      <Input
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                      <Input
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <Input
                      placeholder="Product Type (e.g., M8 Hex Bolts)"
                      value={formData.productType}
                      onChange={(e) => handleInputChange("productType", e.target.value)}
                    />
                    <Textarea
                      placeholder="Message / Specifications"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                    />
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Upload className="h-4 w-4" />
                      <span>Attach technical drawings (optional)</span>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="h-6 w-6" />
                <span className="text-xl font-bold">ML Industries</span>
              </div>
              <p className="text-slate-400">
                Precision fasteners and turning components manufactured with quality and reliability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Bolts & Screws</li>
                <li>Nuts & Washers</li>
                <li>Rivets & Pins</li>
                <li>Custom Components</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Automotive</li>
                <li>Construction</li>
                <li>Electronics</li>
                <li>Machinery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#quality" className="hover:text-white">Quality</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="text-center text-slate-400">
            <p>&copy; 2024 ML Industries. All rights reserved. | ISO 898 Compliant | Made in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
