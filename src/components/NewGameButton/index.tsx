import React, { useCallback } from "react";

import { Button } from "components";
import { useActions } from "hooks/useActions";

const NewGameButton: React.FC = () => {
  const { createGrid } = useActions();

  const newGameHandler = useCallback(() => {
    if (window.confirm("Are you sure you want to start a new game?")) {
      createGrid();
    }
  }, [createGrid]);

  return <Button onClick={newGameHandler}>New Game</Button>;
};

export default NewGameButton;
