
import { motion } from "framer-motion";
import { Card, CardDescription } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
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

  const testimonials = [
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
  ];

  return (
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
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
