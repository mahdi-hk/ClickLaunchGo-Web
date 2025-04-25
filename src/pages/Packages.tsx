import { motion } from "framer-motion";

export function Packages() {
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
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Starter Package</h2>
            <p className="text-muted-foreground mb-4">Perfect for small businesses</p>
            <ul className="space-y-2 mb-6">
              <li>✓ Basic Website Design</li>
              <li>✓ Mobile Responsive</li>
              <li>✓ 5 Pages</li>
              <li>✓ Contact Form</li>
            </ul>
            <p className="text-2xl font-bold mb-4">$999</p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Professional Package */}
          <div className="bg-card p-6 rounded-lg shadow-lg border-2 border-primary">
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
            <p className="text-2xl font-bold mb-4">$2,499</p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Enterprise Package */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
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
            <p className="text-2xl font-bold mb-4">$4,999</p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}