import React from "react";

import { Numbers as NumbersType } from "typings";
import Button from "./button";
import { Container } from "./styles";

const Numbers: React.FC = () => {
  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NumbersType[]).map((value) => (
        <Button key={value} value={value} />
      ))}
    </Container>
  );
};

export default Numbers;
