import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ExpenseItem from './ExpenseItem';

const styles = makeStyles({
    root: {
        display: 'block',
        backgroundColor: '#555',
        border: '1px solid #bbb',
        margin: '10px',
    }
});

const Expenses = (props) => {

    const classes = styles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <ExpenseItem data={props.expenses[0]} />
                <ExpenseItem data={props.expenses[1]} />
                <ExpenseItem data={props.expenses[2]} />
                <ExpenseItem data={props.expenses[3]} />
            </CardContent>
        </Card>
    );
};

export default Expenses;