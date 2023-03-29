import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PersonnalScores from "./PersonnalScores";

export default function TablesScores({ scores }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Found</TableCell>
              <TableCell align="center">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scores.map((score, index) => (
              <TableRow
                key={score.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className="table-cell"
                  component="th"
                  scope="row"
                  align="center"
                >
                  {index + 1}
                </TableCell>
                <TableCell align="center">{score.username}</TableCell>
                <TableCell align="center">{score.count}</TableCell>
                <TableCell align="center">{score.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <PersonnalScores scores={scores} />
    </>
  );
}
