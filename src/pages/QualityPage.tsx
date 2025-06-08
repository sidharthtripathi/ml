
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Target, Settings, CheckCircle, Users, Clock, Zap } from "lucide-react";

const QualityPage = () => {
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

  const certifications = [
    { 
      icon: Shield, 
      title: "ISO 898 Compliance", 
      description: "Mechanical properties of fasteners meet international standards",
      color: "text-blue-600"
    },
    { 
      icon: Award, 
      title: "DIN Standards", 
      description: "German engineering precision in every component",
      color: "text-green-600"
    },
    { 
      icon: Target, 
      title: "ASTM Certified", 
      description: "American Society for Testing and Materials compliance",
      color: "text-purple-600"
    },
    { 
      icon: Settings, 
      title: "Zero PPM Goal", 
      description: "Continuous quality improvement and defect elimination",
      color: "text-orange-600"
    }
  ];

  const qualityMetrics = [
    { value: "99.9%", label: "Quality Rate", icon: CheckCircle },
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "24hrs", label: "Response Time", icon: Clock },
    { value: "15+", label: "Years Experience", icon: Zap }
  ];

  const industries = [
    { name: "Automotive", description: "High-performance fasteners for vehicle manufacturing" },
    { name: "Construction", description: "Structural bolts and fasteners for building projects" },
    { name: "Electronics", description: "Precision micro-fasteners for electronic devices" },
    { name: "Agriculture", description: "Durable components for farming equipment" },
    { name: "Machinery", description: "Industrial-grade fasteners for heavy machinery" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <h1 className="text-5xl font-bold mb-6">Quality & Standards</h1>
            <p className="text-xl mb-8 text-white/90">
              Our unwavering commitment to excellence is reflected in our adherence to international standards and rigorous quality control processes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 text-white border-white/30">
                ISO 898 Certified
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 text-white border-white/30">
                DIN Standards
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 text-white border-white/30">
                ASTM Compliant
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {qualityMetrics.map((metric, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-muted-foreground text-sm">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Certifications & Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of quality through rigorous testing and certification processes
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader className="text-center pb-4">
                    <cert.icon className={`h-16 w-16 ${cert.color} mx-auto mb-4`} />
                    <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {cert.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Our Quality Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every component undergoes rigorous testing at each stage of production
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                step: "01",
                title: "Raw Material Testing",
                description: "Chemical composition and mechanical property verification of all incoming materials"
              },
              {
                step: "02", 
                title: "In-Process Quality Control",
                description: "Dimensional checks and quality monitoring at every manufacturing stage"
              },
              {
                step: "03",
                title: "Final Inspection",
                description: "Comprehensive testing including tensile strength, hardness, and surface finish verification"
              }
            ].map((process, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <CardTitle className="mb-4">{process.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {process.description}
                  </CardDescription>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading companies across diverse industrial sectors
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary/30">
                  <CardTitle className="mb-3 text-primary">{industry.name}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Quality?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get in touch with our quality experts to discuss your specific requirements and discover how we can deliver precision fasteners that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Request Quality Documentation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Factory Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;
