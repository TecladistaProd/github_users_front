import React, { useCallback, useEffect, useState } from 'react';

import Api from '@/services/api';

import { IRepo, IUser } from '@/interfaces/github';

import DetailsCard from '@/components/DetailsCard';

import { Container, Title, DetailsContainer } from './styles';
import { useParams } from 'react-router-dom';
import ReposTable from '@/components/ReposTable';

const Details: React.FC = () => {
  const [userDetails, setUserDetails] = useState<IUser | null>(null);
  const [repos, setRepos] = useState<IRepo[]>([]);
  const {username} = useParams();

  const loadData = useCallback(async () => {
    if(username) {
      try {
        const data = await Api.getDetails(username)
        setUserDetails(data)
      } catch(err) {}

      try {
        const data = await Api.getRepos(username)
        setRepos(data)
      } catch(err) {}
    }
  }, []);

  useEffect(() => {
    loadData()
  }, [loadData])
 
  return (
    <Container
      initial={{ opacity: 0, height: 0  }}
      animate={{ opacity: 1, height: '100%' }}
      exit={{ opacity: 0, height: 0 }}
    >
      <Title>
        User Details
      </Title>
      {
        userDetails && (
          <DetailsContainer
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <DetailsCard
              {...userDetails}
            />
            <ReposTable
              data={repos}
            />
          </DetailsContainer>
        )
      }
    </Container>
  );
}

export default Details;