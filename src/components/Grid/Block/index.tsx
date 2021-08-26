import React, { useCallback, useMemo } from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { Container } from "./styles";
import { Index } from "typings";

interface BlockProps {
  colIndex: Index;
  rowIndex: Index;
}

const Block: React.FC<BlockProps> = ({ colIndex, rowIndex }) => {
  const { selectBlock } = useActions();
  const { workingGrid, selectedBlock, challengeGrid } = useTypedSelector(
    (state) => state
  );
  const isActive = useMemo(
    () =>
      selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
    [selectedBlock, rowIndex, colIndex]
  );
  const isPuzzle = useMemo(
    () =>
      challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
    [challengeGrid, rowIndex, colIndex]
  );

  const selectBlockHandler = useCallback(() => {
    if (!isActive) {
      selectBlock([rowIndex, colIndex]);
    }
  }, [isActive, selectBlock, rowIndex, colIndex]);

  return (
    <Container
      puzzle={isPuzzle}
      active={isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={selectBlockHandler}>
      {workingGrid &&
        (workingGrid[rowIndex][colIndex] === 0
          ? ""
          : workingGrid[rowIndex][colIndex])}
    </Container>
  );
};

export default Block;
