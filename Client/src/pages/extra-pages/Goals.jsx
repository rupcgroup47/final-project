import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextField } from '../../../node_modules/@mui/material/index';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState, useEffect } from 'react';

function createData(goalId, goalName) {
    return { goalId, goalName };
}

const goalsData = [createData(1, 'קורס הנהלת חשבונות מתקדם'), createData(2, 'השתלמות לוגיסטיקה')];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function Goals() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [goalsArr, setGoals] = useState(goalsData);
    const [goalName, setGoalName] = useState('');
    const [goalId, seGoalId] = useState('');
    const [validationsMsg, setMsg] = useState('');
    // const [editRows, setEditRows] = useState({});

    // const handleEditRow = (id) => {
    //     setEditRows({ ...editRows, [id]: true });
    //   };

    //   const handleUpdateRow = (id, newData) => {
    //     setUsers(goalsArr.map((row) => (row.index === id ? { ...row, ...newData } : row)));
    //     setEditRows({ ...editRows, [id]: false });
    //   };

    useEffect(() => {
        setGoals(goalsArr);
        console.log('myArray has been updated: ', goalsArr);
    }, [goalsArr]);

    const handleSubmit = (e) => {
        setMsg('');
        e.preventDefault();
        console.log(goalsArr);
        const newGoal = {
            goalId: goalsArr.length + 1,
            goalName: goalName
        };
        if (goalsArr.some((goal) => goal.goalName === goalName)) {
            setMsg('היעד כבר קיים במערכת');
            setGoalName('');
        } else {
            setGoals([...goalsArr, newGoal]);
            setMsg('');
            setGoalName('');

            console.log(goalsArr);
        }
    };

    return (
        <>
            <Button onClick={handleOpen}>צור יעד חדש</Button>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form align="right" float="right" direction="rtl">
                        <Typography align="center" variant="h3">
                            יצירת יעד חדש
                        </Typography>
                        <br />
                        <Typography align="right">שם היעד</Typography>
                        <TextField
                            style={{ width: '300px', margin: '5px', direction: 'rtl' }}
                            type="text"
                            variant="outlined"
                            value={goalName}
                            onChange={(event) => setGoalName(event.target.value)}
                        />
                        <br />

                        <Typography align="center">
                            <Button color="primary" size="large" type="submit" variant="contained" onClick={handleSubmit}>
                                צור{' '}
                            </Button>
                        </Typography>
                        <Typography variant="h6">{validationsMsg}</Typography>
                    </form>
                </Box>
            </Modal>
            <TableContainer
                component={Paper}
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' },
                    direction: 'rtl'
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">יעד</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {goalsArr.map((row, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" align="right">
                                    {row.goalName}
                                </TableCell>

                                <TableCell>
                                    {/* <Button onClick={() => deleteUser(index)}>מחיקה </Button> */}
                                    <Button>עריכה </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
