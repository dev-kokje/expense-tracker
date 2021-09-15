import React, { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import ExpenseItem from "./ExpenseItem";
import { Grid } from "@material-ui/core";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const styles = makeStyles({
  root: {
    display: "block",
    backgroundColor: "#222",
    border: "1px solid #bbb",
    margin: "10px",
  },
  whiteText: {
    color: "#fff",
  },
});

const Expenses = (props) => {
  const classes = styles();

  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = props.expenses;

  if (filteredYear !== "") {
    filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }

  let expensesContent = <p className={classes.whiteText}>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem key={expense.id} data={expense} />;
    });
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <ExpenseFilter filterChangeHandler={filterChangeHandler} />
          </Grid>
          <Grid item xs={12}>
            {expensesContent}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Expenses;
