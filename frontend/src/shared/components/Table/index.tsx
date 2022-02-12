import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';

function createData(id: string, title: string, description: string, category: string) {
    return { id, title, description, category };
}
  
const rows = [
createData('asfa', 'Frozen yoghurt', 'fsfafa asfsafdaa fas', 'fiction'),
createData('afasfa', 'Frozen yoghurt', 'fsfafa asfsafdaa fas', 'fiction'),
createData('afas', 'Frozen yoghurt', 'fsfafa asfsafdaa fas', 'fiction'),
createData('aefasf', 'Frozen yoghurt', 'fsfafa asfsafdaa fas', 'fiction'),
createData('afsaf', 'Frozen yoghurt', 'fsfafa asfsafdaa fas', 'fiction'),
];

export function AppTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>  
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Category</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}