import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';


function FeedBackItem({item}) {
  var { rating, text, id } = item;
  const {deleteFeedback, editFeedback} = useContext(FeedBackContext)
  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => {
          deleteFeedback(id);
        }}>
        <FaTimes color='purple' />
      </button>
      <button className="edit" onClick={()=>editFeedback(item)}>
        <FaEdit color='purple'/>
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedBackItem;
