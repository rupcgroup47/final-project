import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function createData(userId, firstName, lastName, userEmail, userGender, userDepartment) {
    return { userId, firstName, lastName, userEmail, userGender, userDepartment };
}

const usersData = [
    createData(84564564, 'אבי', 'לוי', 'avi@job.com', 'זכר', 'לוגיסטיקה'),
    createData(84564533, 'יהל', 'שבח', 'yahel@job.com', 'נקבה', 'משאבי אנוש'),
    createData(84564522, 'שיר', 'זיו', 'shir@job.com', 'נקבה', 'לוגיסטיקה')
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'תעודת זהות',
        align: 'right',
        disablePadding: false,
        label: 'תעודת זהות'
    },
    {
        id: 'שם פרטי',
        align: 'right',
        disablePadding: true,
        label: 'שם פרטי'
    },
    {
        id: 'שם משפחה',
        align: 'right',
        disablePadding: false,
        label: 'שם משפחה'
    },
    {
        id: 'אימייל',
        align: 'right',
        disablePadding: false,
        label: 'אימייל'
    },
    {
        id: 'מגדר',
        align: 'right',
        disablePadding: false,
        label: 'מגדר'
    },
    {
        id: 'מחלקה',
        align: 'right',
        disablePadding: false,
        label: 'מחלקה'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('trackingNo');
    const [selected] = useState([]);

    const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

    return (
        <Box>
            <TableContainer
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
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <OrderTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(usersData, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.userId);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.userId}
                                    selected={isItemSelected}
                                >
                                    <TableCell component="th" id={labelId} scope="row" align="right">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.userId}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">{row.firstName}</TableCell>
                                    <TableCell align="right">{row.lastName}</TableCell>
                                    <TableCell align="right">{row.userEmail}</TableCell>
                                    <TableCell align="right">{row.userGender}</TableCell>
                                    <TableCell align="right">{row.userDepartment}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
