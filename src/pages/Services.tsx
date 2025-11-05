import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BarChart,
  Calendar,
  Globe,
  MessageCircle,
  Settings,
  Shield,
  ShoppingCart,
  Zap,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Digital Presence",
    description:
      "Help local businesses establish a professional online identity and make it easier for customers to reach them.",
    icon: "Globe",
    details: [
      "Website Design & Development",
      "Google Business Profile Setup",
      "Online Booking Pages",
    ],
  },
  {
    id: 2,
    title: "Customer Engagement & Automation",
    description:
      "Modernize how businesses communicate with customers and handle inquiries automatically.",
    icon: "MessageCircle",
    details: [
      "WhatsApp & SMS Automation System",
      "Chatbot Integration",
      "Newsletter & Broadcast Messaging",
    ],
  },
  {
    id: 3,
    title: "Booking & Scheduling Systems",
    description:
      "Simplify appointment and service scheduling for both customers and business owners.",
    icon: "Calendar",
    details: [
      "Online Appointment Booking System",
      "Calendar Integration",
      "Payment Integration",
    ],
  },
  {
    id: 4,
    title: "Business Tools & Internal Systems",
    description:
      "Digitize and streamline everyday business operations to improve efficiency.",
    icon: "Tool",
    details: [
      "Inventory Management System",
      "Sales & Invoice System",
      "Custom Business Applications",
    ],
  },
  {
    id: 5,
    title: "E-Commerce & Online Payment Solutions",
    description:
      "Help businesses sell products and services online easily and securely.",
    icon: "ShoppingCart",
    details: [
      "E-Commerce Website Setup",
      "Online Menu Ordering System",
      "Payment Gateway Integration",
    ],
  },
  {
    id: 6,
    title: "Analytics & Business Insights",
    description:
      "Turn data into actionable insights for smarter decision-making.",
    icon: "BarChart",
    details: [
      "Website Analytics Dashboard",
      "Customer Insights Dashboard",
      "Ad & Campaign Reporting",
    ],
  },
  {
    id: 7,
    title: "Maintenance & Retainer Plans",
    description:
      "Ensure continuous support and reliability while generating recurring income.",
    icon: "Settings",
    details: [
      "Website Hosting & Maintenance",
      "Monthly Analytics Reports",
      "Software Support & Bug Fixes",
    ],
  },
  {
    id: 8,
    title: "Smart Automation Solutions",
    description:
      "Innovative automation solutions beyond the basics for efficiency and growth.",
    icon: "Zap",
    details: [
      "Missed Call Auto-Response System",
      "Custom Workflow Automation",
      "AI Chat Assistant Integration",
    ],
  },
];

const Services = () => {
  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Globe,
    MessageCircle,
    Calendar,
    Shield,
    ShoppingCart,
    BarChart,
    Settings,
    Zap,
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-600"
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-orange-300 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mb-6">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="mb-4 space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-2"></div>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="text-orange-500 border-orange-500 hover:bg-orange-50"
                >
                  Learn More
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
