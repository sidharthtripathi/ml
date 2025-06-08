
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
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

  const products = [
    {
      title: "Bolts & Screws",
      description: "Hex bolts, machine screws, self-tapping screws, anchor bolts with various head types",
      features: ["M3 to M64 sizes", "Grade 8.8 to 12.9", "Zinc plated finish"],
      image: "/images/bolt.jpg"
    },
    {
      title: "Nuts & Washers",
      description: "Hex nuts, square nuts, lock nuts, flat washers, spring washers in various materials",
      features: ["Carbon & Stainless Steel", "DIN/ISO Standards", "Custom threading"],
      image: "/images/img2.jpg"
    },
    {
      title: "Rivets & Pins",
      description: "Solid rivets, blind rivets, dowel pins, cotter pins for industrial applications",
      features: ["Aluminum & Steel", "Custom lengths", "Aerospace grade"],
      image: "/images/rivet.jpg"
    },
    {
      title: "Custom Components",
      description: "CNC turned components, special fasteners manufactured to customer drawings",
      features: ["Prototype to Production", "Complex geometries", "Tight tolerances"],
      image: "/images/custom.jpg"
    },
    {
      title: "Coated Fasteners",
      description: "Zinc plated, galvanized, PTFE coated, black oxide finished fasteners",
      features: ["Corrosion resistant", "High durability", "Custom colors"],
      image: "/images/one.jpg"
    },
    {
      title: "High-Tensile Bolts",
      description: "Grade 10.9 and 12.9 high-strength bolts for critical applications",
      features: ["Automotive grade", "Structural bolting", "Certified materials"],
      image: "/images/two.jpg"
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h1 className="text-4xl font-bold mb-4">Our Product Range</h1>
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
          {products.map((product, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-t-lg">
                  <img 
                    src={product.image}
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
                    <Button className="w-full mt-4"  asChild  >
                        <Link to="/contact">Request Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
