import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import ExpenseForm from './ExpenseForm';

const styles = makeStyles({
    root: {
        backgroundColor: '#555',
        border: '1px solid #bbb',
        margin: '10px',
    }
});

const NewExpense = (props) => {

    const classes = styles();

    const addNewExpense = (expense) => {
        props.addNewExpense(expense);
    }

    return (
    <Card className={classes.root}>
        <CardContent>
            <ExpenseForm addNewExpense={addNewExpense} />
        </CardContent>
    </Card>
    );
}

export default NewExpense;