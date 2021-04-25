import 'styles/globals.css';
import Layout from 'components/Layout';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps, router }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout showModal={showModal} setShowModal={setShowModal}>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          setShowModal(false);
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
