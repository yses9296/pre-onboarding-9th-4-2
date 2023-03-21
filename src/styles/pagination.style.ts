import styled from "styled-components";

export const PaginationWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`;
export const PageButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 10px;
  min-width: 30px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;

  &.active {
    background-color: #dbdbdb;
  }
`;
