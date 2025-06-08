
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Wrench, 
  Clock,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      <HeroSection />
      
      {/* Quick Overview Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose ML Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for precision fasteners and custom manufacturing solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="text-center p-6">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">ISO Standards</h3>
              <p className="text-muted-foreground">Compliant with ISO 898, DIN, ASTM quality standards for consistent reliability</p>
            </motion.div>
            
            <motion.div {...fadeInUp} className="text-center p-6">
              <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom Manufacturing</h3>
              <p className="text-muted-foreground">Precision CNC turning and custom fastener solutions tailored to your specifications</p>
            </motion.div>
            
            <motion.div {...fadeInUp} className="text-center p-6">
              <Clock className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick turnaround times with zero-defect quality assurance processes</p>
            </motion.div>
          </div>

          <motion.div className="text-center mt-12" {...fadeInUp}>
            <Button size="lg" asChild>
              <Link to="/products">
                Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
