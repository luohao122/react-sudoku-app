export type Grid = [Row, Row, Row, Row, Row, Row, Row, Row, Row];

export type BlockCoords = [Index, Index];

export type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Cell = 0 | Numbers;

export type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

export type Square = [SquareRow, SquareRow, SquareRow];

export type SquareRow = [Cell, Cell, Cell];
