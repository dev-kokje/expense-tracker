import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = makeStyles({
  root: {
    display: "block",
    backgroundColor: "#eee",
    border: "1px solid #bbb",
    margin: "10px",
    padding: "10px",
  },
  inputBox: {
    width: "80%",
  },
});

const ExpenseForm = (props) => {
  const classes = styles();

  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const titleInputHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const dateInputHandler = (event) => {
    setInputDate(event.target.value);
  };

  const amountInputHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const formSubmitHandler = () => {
    const expense = {
      id: Math.random(),
      title: inputTitle,
      date: new Date(inputDate),
      amount: inputAmount,
    };
    console.log(expense);
    props.addNewExpense(expense);
    setInputTitle("");
    setInputDate("");
    setInputAmount("");
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={3}>
              <TextField
                label="Expense Title"
                variant="outlined"
                value={inputTitle}
                className={classes.inputBox}
                onChange={titleInputHandler}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Expense Date"
                variant="outlined"
                type="date"
                value={inputDate}
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.inputBox}
                onChange={dateInputHandler}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Expense Amount ($)"
                variant="outlined"
                type="number"
                value={inputAmount}
                className={classes.inputBox}
                onChange={amountInputHandler}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
                fullWidth
                onClick={formSubmitHandler}
              >
                Add New Expense
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
