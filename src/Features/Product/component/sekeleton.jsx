import { Box, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import React from 'react';

Sekeleton.propTypes = {
   length: PropTypes.number,
};
Sekeleton.defaultProps = {
   length: 9,
};

function Sekeleton({ length }) {
   return (
      <Box>
         <Grid container>
            {Array.from(new Array(length)).map((x, index) => (
               <Grid item md={4} sm={6} key={index}>
                  <Box padding={1}>
                     <Skeleton variant="rect" width="100%" height={200} />
                     <Skeleton width="30%" />
                     <Skeleton width="50%" />
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
}

export default Sekeleton;
