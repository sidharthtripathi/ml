
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Factory } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      className="bg-white border-b shadow-sm sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Factory className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">ML Industries</h1>
              <p className="text-sm text-muted-foreground">Precision Fasteners</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${isActive('/products') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/quality" 
              className={`transition-colors ${isActive('/quality') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Quality
            </Link>
           
            <Button size="sm" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
