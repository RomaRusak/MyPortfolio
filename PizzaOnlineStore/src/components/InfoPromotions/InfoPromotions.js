import { AnimatePresence, motion } from 'framer-motion';
import style from './infoPromotions.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import DeliveryCondition from '../DeliveryCondition/DeliveryCondition';

const InfoPromotions = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={style.infoPromotionsWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className={style.infoPromotionsTitle}>Наши акции:</h2>
        <SliderWrapper />
        <DeliveryCondition />
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoPromotions;
