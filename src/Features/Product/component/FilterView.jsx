import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
// props nhan vao
FilterView.propTypes = {
   filter: PropTypes.object,
   onChange: PropTypes.func,
};

function FilterView({ filter = {}, onChange }) {
   // style css material-ui
   const useStyles = makeStyles((theme) => ({
      root: {
         display: 'flex',
         flexFlow: ' row wrap',
         alignItems: 'center',

         margin: theme.spacing(2, 0),
         listStyleType: 'none',
         '& >li': {
            margin: 0,
            padding: theme.spacing(1),
         },
      },
   }));
   const FILTER_LIST = [
      {
         id: uuidv4(),
         getlLabel: () => 'Free Ship',
         isActive: (filter) => filter.isFreeShip === true,
         isVisible: () => true,
         isRemoved: false,
         onRemove: () => {},
         onToggle: (filter) => {
            const newFilter = { ...filter };
            if (newFilter.isFreeShip) {
               delete newFilter.isFreeShip;
            } else {
               newFilter.isFreeShip = true;
            }
            return newFilter;
         },
      },
      {
         id: uuidv4(),
         getlLabel: (filter) => 'Sale OFF',
         isActive: () => true,
         isVisible: (filter) => filter.isPromotion === true,
         isRemoved: true,
         onRemove: (filter) => {
            const newFilter = { ...filter };
            delete newFilter.isPromotion;
            return newFilter;
         },
         onToggle: () => {},
      },
      {
         id: uuidv4(),
         getlLabel: (filter) => `Từ ${filter.salePrice_gte} đến ${filter.salePrice_lte}`,
         isActive: () => true,

         isVisible: (filter) =>
            Object.keys(filter).includes('salePrice_lte') &&
            Object.keys(filter).includes('salePrice_gte'),
         isRemoved: true,
         onRemove: (filter) => {
            const newFilter = { ...filter };
            delete newFilter.salePrice_gte;
            delete newFilter.salePrice_lte;
            return newFilter;
         },
         onToggle: () => {},
      },
      {
         id: uuidv4(),
         getlLabel: (filter) => `Danh mục sản phẩm ${filter['category.id']}`,
         isActive: () => true,
         isVisible: (filter) => Boolean(filter['category.id']),
         isRemoved: true,
         onRemove: (filter) => {
            const newFilter = { ...filter };
            delete newFilter['category.id'];
            return newFilter;
         },
         onToggle: () => {},
      },
   ];
   const classes = useStyles();
   return (
      <Box component="ul" className={classes.root}>
         {FILTER_LIST.filter((x) => x.isVisible(filter)).map((x) => (
            <li key={x.id}>
               <Chip
                  label={x.getlLabel(filter)}
                  color={x.isActive(filter) ? 'primary' : 'default'}
                  clickable={!x.isRemoved}
                  onClick={
                     x.isRemoved
                        ? null
                        : () => {
                             if (!onChange) return;
                             const newFilter = x.onToggle(filter);
                             onChange(newFilter);
                          }
                  }
                  onDelete={
                     x.isRemoved
                        ? () => {
                             if (!onChange) return;
                             const newFilter = x.onRemove(filter);
                             onChange(newFilter);
                          }
                        : null
                  }
               />
            </li>
         ))}
      </Box>
   );
}

export default FilterView;
