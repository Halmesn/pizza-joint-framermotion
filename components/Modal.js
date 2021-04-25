import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  visible: { y: 200, opacity: 1 },
  hidden: { y: '-110vh ', opacity: 0, transition: { delay: 0.5 } },
};

export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza?</p>
            <Link href="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
