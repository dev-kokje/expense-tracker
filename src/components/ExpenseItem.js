import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box, Button } from '@material-ui/core';

const styles = makeStyles({
    root: {
        display: 'block',
        backgroundColor: '#eee',
        border: '1px solid #bbb',
        margin: '10px',
    },
    price_block: {
        display: 'inline-block',
        backgroundColor: '#4d0099',
        color: '#ffffff',
        border: '1px solid #ffffff',
        borderRadius: '20%'
    }
});

const ExpenseItem = (props) => {

    const classes = styles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Box display="flex" flexDirection="Cols">
                    <Box flexGrow={1}>
                        <Box fontSize={20} fontWeight="fontWeightBold">{props.data.title}</Box>
                        <Box>{props.data.date.toLocaleDateString()}</Box>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary" size="large">$ {props.data.amount}</Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ExpenseItem;