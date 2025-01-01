import PropTypes from 'prop-types';

export const TeaItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export const TeaItemPropType = PropTypes.shape(TeaItemShape); 