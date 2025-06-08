
import { motion } from "framer-motion";

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl font-bold mb-6">About ML Industries</h1>
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
    </div>
  );
};

export default AboutPage;
