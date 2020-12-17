import React from 'react';
import AuthPageLayout from '@layouts/AuthPageLayout';
import styled from 'styled-components';

const NotFoundPage = () => (
  <AuthPageLayout>
    <Message>Page Not Found :(</Message>
    <Message>처음 진입하셨을 경우 새로고침을 눌러주세요</Message>
  </AuthPageLayout>
);

const Message = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.xl};
`;

export default NotFoundPage;
