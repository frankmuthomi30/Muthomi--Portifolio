import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Profile from '/FRANK.jpg'
import BackgroundImg from '/back.jpg'

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 z-10" />
        <img
          src={BackgroundImg}
          alt="Code and Tech"
          className="object-cover w-full h-full"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-primary overflow-hidden">
            <img
              src={Profile}
              alt="Frank Muthomi"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground drop-shadow-lg">
            Frank Muthomi Mbauni
          </h1>
        </motion.div>

        <div className="h-16 mb-8">
          <TypeAnimation
            sequence={[
              'Aspiring ICT Professional',
              1200,
              'AI-Powered Frontend Developer',
              1200,
              'Software Innovator',
              1200,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-4xl text-primary"
            repeat={Infinity}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild size="lg" className="bg-background text-foreground border-2 border-primary hover:bg-primary/10 transition-colors duration-300 shadow-lg hover:shadow-xl">
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

