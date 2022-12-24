import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PizzaCartInner from '../PizzaCartInner/PizzaCartInner';
import PizzaCardModal from './PizzaCardModal';
import style from './pizzaCard.module.css';

const PizzaCard = ({ data }) => {
  const [modalOpen, seModalOpen] = useState(false);
  const [modalId, semModalId] = useState('');

  const openModal = (id) => {
    semModalId(id);
    seModalOpen(true);
  };

  const closeModal = () => {
    seModalOpen(false);
  };

  return (
    <div className={style.pizzaWrapper}>
      {data.map((pizza) => (
        <motion.div
          key={pizza.id.toString()}
          className={style.pizzaCartWrapper}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        >
          {/* не удалять AnimatePresence */}
          <AnimatePresence exitBeforeEnter>
            <PizzaCartInner
              name={pizza.name}
              price={pizza.price}
              img={pizza.image}
              id={pizza.id}
              openModal={openModal}
            />
          </AnimatePresence>
        </motion.div>
      ))}
      <AnimatePresence>
        {modalOpen && (
          <PizzaCardModal modalId={modalId} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PizzaCard;
