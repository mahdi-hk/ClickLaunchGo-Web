import { motion } from "framer-motion";
import { Code2, Search, Share2, Palette, Smartphone, Globe } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-background py-20 px-4 md:px-8"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-6">
          Crafting Digital Excellence
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We transform ideas into exceptional digital experiences through innovative design, strategic SEO, and engaging social media content.
        </p>
      </motion.div>

      {/* Website Design Section */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Modern Website Design</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Code2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Custom Development</h3>
                  <p className="text-muted-foreground">Tailored solutions built with cutting-edge technologies for optimal performance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Palette className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Unique Design</h3>
                  <p className="text-muted-foreground">Stunning visuals that capture your brand's essence and engage your audience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Smartphone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Responsive Design</h3>
                  <p className="text-muted-foreground">Seamless experience across all devices and screen sizes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
              alt="Web Design Process"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      {/* SEO Section */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto mb-32 bg-card rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Search Engine Optimization</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-xl">
            <Search className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Keyword Strategy</h3>
            <p className="text-muted-foreground">Data-driven keyword research and implementation for maximum visibility.</p>
          </div>
          <div className="bg-background p-6 rounded-xl">
            <Globe className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Technical SEO</h3>
            <p className="text-muted-foreground">Optimization of website structure, speed, and performance for better rankings.</p>
          </div>
          <div className="bg-background p-6 rounded-xl">
            <Share2 className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Link Building</h3>
            <p className="text-muted-foreground">Strategic partnerships and quality backlinks to boost domain authority.</p>
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Social Media Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engage your audience with compelling content that drives growth and builds lasting connections.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1974",
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1974",
            "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=1974"
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-xl overflow-hidden aspect-square"
            >
              <img src={src} alt={`Social Media Example ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}