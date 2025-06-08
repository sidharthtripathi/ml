
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Wrench, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
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
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/contact">
                Request Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg">
              <Link to="/products">View Product Catalog</Link>
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
  );
};

export default HeroSection;
