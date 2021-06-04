import React from 'react';
import PropTypes from 'prop-types';

ProductDes.propTypes = {
   product: PropTypes.object,
};

function ProductDes({ product }) {
   return <div dangerouslySetInnerHTML={{ __html: product.description }} />;
}

export default ProductDes;
