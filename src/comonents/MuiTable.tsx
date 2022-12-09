import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import * as React from 'react';
import {
    TableContainer,
    Table,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    tableCellClasses,
} from "@mui/material"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name: string,description: string) {
  return { name,description };
}

const rows = [
  createData('Frozen yoghurt','Cold'),
  createData('Ice cream sandwich','Warm'),
  createData('Eclair','Melts'),
  createData('Cupcake','Hot'),
];

export const MuiTable = () => {
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                  {row.name}
                  <StyledTableCell align="justify">
                      {row.description}
                  </StyledTableCell>
              </StyledTableCell>
                  <StyledTableCell align="right">
                      <Button href="">Read More</Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                      <Button href="">Delete</Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                      <Button href="">Set as Read</Button>
                  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}