import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-gray-50 px-8">
      <div className="mx-auto px-4 flex flex-col space-y-12 max-w-4xl">
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

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              At T2Solutions, we believe technology should empower businesses,
              not complicate them. Our mission is to provide cutting-edge IT
              solutions that are simple to use, secure, and scalable.
            </p>
            <p className="text-gray-600">
              Founded in Cyberjaya, we aim to help businesses transform their
              operations through digital innovation.
            </p>
          </div>

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
                className="bg-white px-4 py-2 rounded-lg shadow-sm text-center flex justify-center items-center"
              >
                <p className="text-orange-500 font-semibold w-full">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Team</h3>

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
    </section>
  );
};

export default About;
