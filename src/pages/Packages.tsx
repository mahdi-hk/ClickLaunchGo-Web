import { motion } from "framer-motion";

export function Packages() {
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background p-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Our Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Package */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="bg-card p-6 rounded-lg shadow-lg backdrop-blur-sm border border-primary/10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-2xl font-semibold mb-4">Starter Package</h2>
            <p className="text-muted-foreground mb-4">Perfect for small businesses</p>
            <ul className="space-y-2 mb-6">
              <li>✓ Basic Website Design</li>
              <li>✓ Mobile Responsive</li>
              <li>✓ 5 Pages</li>
              <li>✓ Contact Form</li>
            </ul>
            <p className="text-2xl font-bold mb-4">£ Enquire Now</p>
            <motion.button
              variants={buttonVariants}
              className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </motion.button>
          </motion.div>

          {/* Professional Package */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="bg-card p-6 rounded-lg shadow-lg backdrop-blur-sm border-2 border-primary relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-2xl font-semibold mb-4">Professional Package</h2>
            <p className="text-muted-foreground mb-4">For growing businesses</p>
            <ul className="space-y-2 mb-6">
              <li>✓ Custom Website Design</li>
              <li>✓ Mobile Responsive</li>
              <li>✓ 10 Pages</li>
              <li>✓ Advanced Contact Forms</li>
              <li>✓ Basic SEO Setup</li>
              <li>✓ Social Media Integration</li>
            </ul>
            <p className="text-2xl font-bold mb-4">$ Enquire Now</p>
            <motion.button
              variants={buttonVariants}
              className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </motion.button>
          </motion.div>

          {/* Enterprise Package */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="bg-card p-6 rounded-lg shadow-lg backdrop-blur-sm border border-primary/10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-2xl font-semibold mb-4">Enterprise Package</h2>
            <p className="text-muted-foreground mb-4">Full-scale solutions</p>
            <ul className="space-y-2 mb-6">
              <li>✓ Premium Website Design</li>
              <li>✓ Mobile Responsive</li>
              <li>✓ Unlimited Pages</li>
              <li>✓ Advanced Features</li>
              <li>✓ Full SEO Package</li>
              <li>✓ E-commerce Integration</li>
              <li>✓ Custom Analytics</li>
            </ul>
            <p className="text-2xl font-bold mb-4">$ Enquire Now</p>
            <motion.button
              variants={buttonVariants}
              className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}