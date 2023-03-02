import React from 'react';
import format from 'date-fns/format';

import { IUser } from '@/interfaces/github';

import { Container, Avatar, Infos, Name, Id, DateInfo } from './styles';

const DetailsCard: React.FC<IUser> = ({
  id, avatar_url, login, created_at
}) => {
  return (
    <Container>
      <Avatar src={avatar_url} alt={`User: ${login} & Id: ${id}`} />
      <Infos>
        <Name>Login: {login}</Name>
        <Id>Id: {id}</Id>
        {
          created_at && 
            <DateInfo>
              Creation date: {format(new Date(created_at), "MMMM dd',' yyyy")}
            </DateInfo>
        }
      </Infos>
    </Container>
  );
}

export default DetailsCard;