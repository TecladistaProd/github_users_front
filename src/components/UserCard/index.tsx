import React from 'react';
import { useLinkClickHandler } from 'react-router-dom';

import { Container, Id, Login, Button } from './styles';

interface IProps {
  id: string | number;
  login: string;
}

const UserCard: React.FC<IProps> = ({ id, login }) => {
  const handleKnowMore = useLinkClickHandler(`/user/${login}`);
  return (
    <Container>
      <Id>User ID: {id}</Id>
      <Login>Login: {login}</Login>
      <Button onClick={handleKnowMore} href={`/user/${login}`}>
        Know more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
        </svg>
      </Button>
    </Container>
  );
}

export default UserCard;