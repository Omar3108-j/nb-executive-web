import { motion } from "framer-motion"

function Reveal({ children, delay = 0, y = 50 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal