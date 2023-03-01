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
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState, useEffect } from 'react';

function createData(userId, firstName, lastName, userEmail, userGender, userDepartment, userJob) {
    return { userId, firstName, lastName, userEmail, userGender, userDepartment, userJob };
}

const usersData = [
    createData(84564564, 'אבי', 'לוי', 'avi@job.com', 'זכר', 'לוגיסטיקה', 'מחסנאי'),
    createData(84564533, 'יהל', 'שבח', 'yahel@job.com', 'נקבה', 'משאבי אנוש', 'מנהלת משרד'),
    createData(84564522, 'שיר', 'זיו', 'shir@job.com', 'נקבה', 'לוגיסטיקה', 'אפסנאית')
];

const departments = ['לוגיסטיקה', 'הנהלת חשבונות'];
const gender = ['זכר', 'נקבה ', 'אחר'];
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

export default function BasicTable() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userArr, setUsers] = useState(usersData);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setId] = useState('');
    const [userGender, setGender] = useState('');
    const [userDepartment, setDepartment] = useState('');
    const [userJob, setJob] = useState('');
    const [validationsMsg, setMsg] = useState('');

    console.log(userArr);

    useEffect(() => {
        setUsers(userArr);
        console.log('myArray has been updated: ', userArr);
    }, [userArr]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userArr);
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            userId: userId,
            userEmail: userEmail,
            password: password,
            userGender: userGender,
            userDepartment: userDepartment,
            userJob: userJob
        };
        if (userArr.some((user) => user.userEmail === userEmail)) {
            setMsg('האימייל כבר קיים במערכת');
        } else {
            setUsers([...userArr, newUser]);
            setMsg('');
            setFirstName('');
            setLastName(''), setEmail('');
            setPassword(''), setId('');
            setJob('');
            console.log(userArr);
        }
    };

    return (
        <>
            <Button onClick={handleOpen}>צור משתמש חדש</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form align="right" float="right" direction="rtl">
                        <Typography align="center" variant="h3">
                            יצירת משתמש חדש
                        </Typography>
                        <br />
                        <Typography align="right">שם פרטי</Typography>
                        <TextField
                            style={{ width: '300px', margin: '5px', direction: 'rtl' }}
                            type="text"
                            variant="outlined"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <br />
                        <Typography align="right">שם משפחה </Typography>
                        <TextField
                            style={{ width: '300px', margin: '5px', direction: 'rtl' }}
                            type="text"
                            variant="outlined"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <br />
                        <Typography align="right">תעודת זהות </Typography>
                        <TextField
                            style={{ width: '300px', margin: '5px', direction: 'rtl' }}
                            type="number"
                            variant="outlined"
                            value={userId}
                            onChange={(event) => setId(event.target.value)}
                        />
                        <br />
                        <Typography align="right">אימייל </Typography>
                        <TextField
                            style={{ width: '300px', margin: '5px' }}
                            type="email"
                            variant="outlined"
                            value={userEmail}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <br />
                        <Typography align="right">סיסמה </Typography>
                        <TextField
                            style={{ width: '300px', margin: '5px', direction: 'rtl' }}
                            type="text"
                            variant="outlined"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <br />
                        {/* <FormControl>
                            <Typography align="right">מגדר </Typography>
                            <Select
                                style={{ width: '300px', margin: '5px' }}
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={userGender}
                                onChange={(event) => setGender(event.target.value)}
                                autoWidth
                            >
                                {gender.map((gen) => (
                                    <MenuItem direction="rtl">{gen}</MenuItem>
                                ))}
                            </Select>{' '}
                        </FormControl>

                        <br />
                        <FormControl>
                            <Typography align="right">מחלקה </Typography>
                            <Select
                                style={{ width: '300px', margin: '5px' }}
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={userDepartment}
                                onChange={(event) => setDepartment(event.target.value)}
                                autoWidth
                            >
                                {departments.map((dep) => (
                                    <MenuItem direction="rtl">{dep}</MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}

                        <br />
                        <Typography align="right">תפקיד </Typography>
                        <TextField
                            style={{ width: '300px', margin: '5px', direction: 'rtl' }}
                            type="text"
                            variant="outlined"
                            value={userJob}
                            onChange={(event) => setJob(event.target.value)}
                        />
                        <br />
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
                            <TableCell align="right">תעודת זהות</TableCell>
                            <TableCell align="right">שם פרטי</TableCell>
                            <TableCell align="right">שם משפחה</TableCell>
                            <TableCell align="right">אימייל</TableCell>
                            <TableCell align="right">מגדר</TableCell>
                            <TableCell align="right">מחלקה</TableCell>
                            <TableCell align="right">תפקיד</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userArr.map((row) => (
                            <TableRow key={row.userId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" align="right">
                                    {row.userId}
                                </TableCell>
                                <TableCell align="right">{row.firstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.userEmail}</TableCell>
                                <TableCell align="right">{row.userGender}</TableCell>
                                <TableCell align="right">{row.userDepartment}</TableCell>
                                <TableCell align="right">{row.userJob}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
