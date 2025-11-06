import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-gray-600"
            >
              Ready to transform your business? Let's discuss your project.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-4">
                    <Mail />
                  </div>
                  <div>
                    {/* <h4 className="font-semibold text-gray-900">Email</h4> */}
                    <p className="text-gray-600">info@t2solutions.com.my</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-4">
                    <Phone />
                  </div>
                  <div>
                    {/* <h4 className="font-semibold text-gray-900">Phone</h4> */}
                    <p className="text-gray-600">+60 1-2345 6789</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-4">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      T2-18-12, The Place@Cyberjaya, Sepang, Selangor
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center hover:cursor-pointer">
                  <Phone />
                  <p>WhatsApp Us</p>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Full Name
                  </Label>
                  <Input id="name" placeholder="Your name" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-700">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold hover:cursor-pointer"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
