
import { Factory } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/quality" className="hover:text-white">Quality</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
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
  );
};

export default Footer;
