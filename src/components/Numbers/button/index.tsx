import React, { useMemo, useCallback } from "react";
import { Button } from "components";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Numbers } from "typings";

interface NumberButtonProps {
  value: Numbers;
}

const NumberButton: React.FC<NumberButtonProps> = ({ value }) => {
  const { selectedBlock, workingGrid } = useTypedSelector((state) => state);
  const selectedValue = useMemo(
    () =>
      workingGrid && selectedBlock
        ? workingGrid[selectedBlock[0]][selectedBlock[1]]
        : 0,
    [selectedBlock, workingGrid]
  );
  const { fillBlock } = useActions();
  const fill = useCallback(() => {
    if (selectedBlock && selectedValue === 0) {
      fillBlock(value, selectedBlock);
    }
  }, [selectedBlock, selectedValue, value, fillBlock]);

  return <Button onClick={fill}>{value}</Button>;
};

export default NumberButton;
