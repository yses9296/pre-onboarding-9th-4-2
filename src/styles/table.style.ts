import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-radius: 5px;
`;
export const Thead = styled.thead`
  background-color: #ffc107;
`;

export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th`
  width: auto;
  padding: 5px 0;

  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    width: 30%;
  }
  &:nth-child(3) {
    width: 10%;
  }
  &:nth-child(4) {
    width: 10%;
  }
  &:nth-child(5) {
    width: 25%;
  }
  &:nth-child(6) {
    width: 15%;
  }
`;
export const Td = styled.td`
  padding: 3px 0;
  text-align: center;
`;

export const StatusButton = styled.button`
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  margin: 2px 4px;

  &.active {
    background-color: #000;
  }
`;
