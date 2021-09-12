import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box, Button } from '@material-ui/core';

const styles = makeStyles({
    root: {
        display: 'block',
        backgroundColor: '#eee',
        border: '1px solid #bbb',
    },
    price_block: {
        display: 'inline-block',
        backgroundColor: '#4d0099',
        color: '#ffffff',
        border: '1px solid #ffffff',
        borderRadius: '20%'
    }
});

function ExpenseItem() {

    const classes = styles();
    const expenseDate = new Date(2021, 11, 1);
    const expenseTitle = "Luggage Bags";
    const expensePrice = 200.45;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Box display="flex" flexDirection="Cols">
                    <Box flexGrow={1}>
                        <Box fontSize={20} fontWeight="fontWeightBold">{expenseTitle}</Box>
                        <Box>{expenseDate.toLocaleDateString()}</Box>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary">$ {expensePrice}</Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ExpenseItem;