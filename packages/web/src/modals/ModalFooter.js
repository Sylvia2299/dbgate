import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 15px;
  background-color: #eeffff;
`;

export default function ModalFooter({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
