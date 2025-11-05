import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            About T2Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-600"
          >
            We're a Malaysian IT startup passionate about transforming
            businesses through innovative technology solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              At T2Solutions, we believe technology should empower businesses,
              not complicate them. Our mission is to provide cutting-edge IT
              solutions that are simple to use, secure, and scalable.
            </p>
            <p className="text-gray-600">
              Founded in Kuala Lumpur, we've helped over 200 Malaysian
              businesses transform their operations through digital innovation.
              Our team of certified experts brings global experience with a
              local touch.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                "Automation",
                "Cloud",
                "Analytics",
                "Support",
                "Security",
                "AI",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  <div className="text-orange-500 font-semibold">{item}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">
                    Team Member {item}
                  </h4>
                  <p className="text-sm text-gray-600">Specialist</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
