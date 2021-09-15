import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    date: new Date(2021, 11, 10),
    amount: 150,
  },
  {
    id: 2,
    title: "Petrol",
    date: new Date(2021, 11, 24),
    amount: 100.5,
  },
  {
    id: 3,
    title: "Ganpati Decoration",
    date: new Date(2021, 10, 10),
    amount: 60.55,
  },
  {
    id: 4,
    title: "Bike Repair",
    date: new Date(2021, 10, 8),
    amount: 200,
  },
];

const styles = makeStyles({
  root: {
    backgroundColor: "#555",
  },
});

function App() {
  const classes = styles();
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <NewExpense addNewExpense={addNewExpense} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Expenses expenses={expenses} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
