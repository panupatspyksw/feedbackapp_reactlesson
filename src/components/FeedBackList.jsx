import FeedBackItem from './FeedBackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';
import Spinner from './shared/Spinner';

function FeedBackList() {

  const {feedback, isLoading} = useContext(FeedBackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback.</p>;
  }
  return isLoading ? <Spinner /> : (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div key={item.id} 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0}}
        layout>
        <FeedBackItem
          key={item.id}
          item={item}
        />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
}


export default FeedBackList;
