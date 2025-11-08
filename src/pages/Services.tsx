import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Calendar,
  Columns3Cog,
  Monitor,
  Construction,
  Phone,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Smart Call & Messaging Automation",
    description:
      "Stay connected even when you miss a call with instant automated replies and scheduling options.",
    icon: "Phone",
    details: [
      "Sends personalized SMS or WhatsApp messages for missed calls.",
      "Lets customers schedule callbacks or consultations easily.",
      "Integrates with CRM or booking tools to track responses",
      "Boosts customer engagement and reduces lost leads",
    ],
  },
  {
    id: 2,
    title: "Online Booking & Scheduling Systems",
    description:
      "Streamline appointments with easy online booking, reminders, and admin control.",
    icon: "Calendar",
    details: [
      "Custom booking portals for services or consultations",
      "Automated reminders and confirmations for clients",
      "Centralized dashboard to manage schedules",
      "Optional to sync with Google Calendar",
    ],
  },
  {
    id: 3,
    title: "Custom Business Applications",
    description:
      "Optimize your operations with software built specifically for your business.",
    icon: "Columns3Cog",
    details: [
      "Tailor-made solutions for inventory, orders, or staff management",
      "Streamlines workflows and daily operations",
      "Includes analytics dashboards for better insights",
      "Scalable and secure for future growth",
    ],
  },
  {
    id: 4,
    title: "Website Development & Integration",
    description:
      "Build a modern, responsive website that drives customers and integrates key tools.",
    icon: "Monitor",
    details: [
      "Fast, SEO-friendly websites tailored to your brand",
      "Built using secure, modern frameworks",
      "Integration with booking forms, WhatsApp, and Google Maps",
      "Custom designs that fit your business identity",
    ],
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description:
      "Keep your systems running smoothly with reliable updates and technical care.",
    icon: "Construction",
    details: [
      "Regular updates and bug fixes.",
      "Fast response to technical issues",
      "Continuous performance and security monitoring",
      "Flexible support plans based on your needs",
    ],
  },
];

const Services = () => {
  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Phone,
    Calendar,
    Columns3Cog,
    Monitor,
    Construction,
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-600"
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                {/* <Button
                  variant="outline"
                  className="text-orange-500 border-orange-500 hover:bg-orange-50"
                >
                  Learn More
                </Button> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
