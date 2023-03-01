import React from 'react';
import { useState } from 'react';
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export default function Departments() {
    const departments = [
        { depName: 'לוגיסטיקה', depManager: 'משה לוי' },
        { depName: 'הנהלת חשבונות', depManager: 'מאיה  לוי' },
        { depName: 'משאבי אנוש', depManager: 'אלי כהן' }
    ];

    const headCells = [
        {
            id: 'מחלקה',
            align: 'right',
            disablePadding: false,
            label: 'מחלקה'
        },
        {
            id: 'מנהל מחלקה',
            align: 'right',
            disablePadding: true,
            label: 'מנהל מחלקה'
        }
    ];
    const [sortedData, setSortedData] = useState([...departments]);

    return (
        <>
            <Box>
                <TableHead>
                    <TableRow>
                        {headCells.map((headCell) => (
                            <TableCell key={headCell.id} align={headCell.align} padding={headCell.disablePadding ? 'none' : 'normal'}>
                                {headCell.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
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
                        <TableBody>
                            {sortedData.map((item, index) => {
                                return (
                                    <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="right">{item.depName}</TableCell>
                                        <TableCell align="right">{item.depManager}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}
