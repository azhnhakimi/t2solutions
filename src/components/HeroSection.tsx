import { motion } from "framer-motion";
import heroVideo from "@/assets/videos/hero-section.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-var(--header-height))] flex justify-center items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Empowering Your{" "}
            <span className="text-orange-500">Digital Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg mx-auto"
          >
            Malaysia's premier IT solutions provider delivering innovative
            technology services to drive your business forward.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
