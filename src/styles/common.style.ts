import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Header = styled.h2`
  font-weight: 800;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 12px;
`;

export const SearchBarLabel = styled.label`
  margin-right: 10px;
`;

export const SearchBarInput = styled.input`
  width: 300px;
  padding: 8px 12px;
  margin-right: 8px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;

export const SearchBarButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;
