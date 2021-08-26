import React, { useEffect, useCallback, useMemo } from "react";
import useMouseTrap from "react-hook-mousetrap";

import { Index, Numbers } from "typings";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Block from "./Block";
import { Container, Row } from "./styles";

const Grid: React.FC = () => {
  const { createGrid, selectBlock, fillBlock } = useActions();
  const { selectedBlock, workingGrid, solvedGrid } = useTypedSelector(
    (state) => state
  );
  const selectedValue = useMemo(
    () =>
      workingGrid && selectedBlock
        ? workingGrid[selectedBlock[0]][selectedBlock[1]]
        : 0,
    [selectedBlock, workingGrid]
  );

  const createSudokuGrid = useCallback(() => createGrid(), [createGrid]);

  useEffect(() => {
    if (!solvedGrid) {
      createSudokuGrid();
    }
  }, [createSudokuGrid, solvedGrid]);

  const fill = useCallback(
    (blockNumber: Numbers) => {
      if (selectedBlock && selectedValue === 0) {
        fillBlock(blockNumber, selectedBlock);
      }
    },
    [selectedBlock, selectedValue, fillBlock]
  );

  const moveDown = useCallback(() => {
    if (selectedBlock && selectedBlock[0] < 8) {
      selectBlock([(selectedBlock[0] + 1) as Index, selectedBlock[1]]);
    }
  }, [selectedBlock, selectBlock]);

  const moveLeft = useCallback(() => {
    if (selectedBlock && selectedBlock[1] > 0) {
      selectBlock([selectedBlock[0], (selectedBlock[1] - 1) as Index]);
    }
  }, [selectedBlock, selectBlock]);

  const moveRight = useCallback(() => {
    if (selectedBlock && selectedBlock[1] < 8) {
      selectBlock([selectedBlock[0], (selectedBlock[1] + 1) as Index]);
    }
  }, [selectedBlock, selectBlock]);

  const moveUp = useCallback(() => {
    if (selectedBlock && selectedBlock[0] > 0) {
      selectBlock([(selectedBlock[0] - 1) as Index, selectedBlock[1]]);
    }
  }, [selectedBlock, selectBlock]);

  useMouseTrap("1", () => fill(1));
  useMouseTrap("2", () => fill(2));
  useMouseTrap("3", () => fill(3));
  useMouseTrap("4", () => fill(4));
  useMouseTrap("5", () => fill(5));
  useMouseTrap("6", () => fill(6));
  useMouseTrap("7", () => fill(7));
  useMouseTrap("8", () => fill(8));
  useMouseTrap("9", () => fill(9));
  useMouseTrap("down", moveDown);
  useMouseTrap("up", moveUp);
  useMouseTrap("left", moveLeft);
  useMouseTrap("right", moveRight);

  return (
    <Container data-cy='grid-container'>
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy='grid-row-container'>
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as Index}
                  rowIndex={rowIndex as Index}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
