import styled from "styled-components";

export const Heading = styled.h3`
  color: #e5e5e5;
  font-size: 15px;
`;

export const Text = styled.p`
  color: #5e6673;
  font-size: 13px;
`;

export const Thumbnail = styled.div`
  font-size: 20px;
  color: #fcd535;
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 5;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 5;
  border-radius: 10px;
  padding: 5px;

  &:hover {
    background-color: #181a20;
  }
`;

export const HoverContainer = styled.div`
  position: relative;

  &:hover .hover-content {
    display: block;
  }
`;

export const HoverContent = styled.div`
  display: none;
  position: absolute;
  top: 25px;
  left: 0;
  background-color: #20222a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 280px;
  border-radius: 8px;
`;

export const PaymentGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Button = styled.button`
  color: #e5e5e5;
`;
