import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Pane, Heading, Text, Thumbnail } from "../atoms";

interface Props {
    thumbnail: string;
    name: string;
    text: string;
}

const CryptoModal:React.FC<Props> = ({
  thumbnail,
  name,
  text
}) => {
 
  return (
    <div>
      <Container>
        <Thumbnail>{thumbnail}</Thumbnail>
        <Pane>
          <Heading>{name}</Heading>
          <Text>{text}</Text>
        </Pane>
      </Container>
    </div>
  );
};

export default CryptoModal;
