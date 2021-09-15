import React, { useState } from "react";
import { FormControl, Grid, makeStyles, Select, Typography } from "@material-ui/core";

const style = makeStyles((theme) => ({
  textFilter: {
    color: "white",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  formSelect: {
      backgroundColor: '#fff'
  }
}));

const ExpenseFilter = (props) => {
  const classes = style();

  const [filterYear, setFilterYear] = useState(0);

  const changeFilterHandler = (event) => {
    setFilterYear(event.target.value);
    props.filterChangeHandler(event.target.value);
  } 

  return (
    <Grid container justifyContent="center" alignItems="center">
        <Typography  variant="h5" className={classes.textFilter}>
          Filter By Year: 
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={filterYear}
          native
          inputProps={{ 'aria-label': 'age' }}
          className={classes.formSelect}
          onChange={changeFilterHandler}
        >
          <option aria-label="None" value="" />
          <option value={2018}>2018</option>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default ExpenseFilter;
