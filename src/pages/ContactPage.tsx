
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Upload } from "lucide-react";

const ContactPage = () => {
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

  return (
    <div className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
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
    </div>
  );
};

export default ContactPage;
