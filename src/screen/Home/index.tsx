import React, { useCallback, useEffect, useState } from 'react';

import UserCard from '@/components/UserCard';

import { IUser, IUsersRes } from '@/interfaces/github';

import Api from '@/services/api';

import { Container, Title, UsersContent, ShowMoreBtn } from './styles';

const Home: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [nextLink, setNextLink] = useState('');
  const loadData = useCallback(async () => {
    try {
      const data = await Api.getUsers();
      setNextLink(data.nextLink || '');
      setUsers(data.users || []);
    } catch(err) {}
  }, []);

  useEffect(() => {
    loadData()
  }, [loadData]);

  const handleShowMore = useCallback(async () => {
    if(!nextLink) return;
    try {
      const data = await Api.get<IUsersRes>(nextLink);
      setNextLink(data.nextLink || '');
      setUsers(users => [...users, ...(data.users || [])]);
    } catch(err) {}
  }, [nextLink]);
  
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title>
        Github Users
      </Title>
      <UsersContent>
        {
          users.map((i, k) => (
            <UserCard
              key={`${k}-${i.id}`}
              {...i}
            />
          ))
        }
      </UsersContent>
      { nextLink && (
        <ShowMoreBtn onClick={handleShowMore}>
          Show More Users
        </ShowMoreBtn>
      )}
    </Container>
  );
}

export default Home;