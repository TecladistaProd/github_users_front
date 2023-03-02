import React from 'react';

import { IRepo } from '@/interfaces/github';

import { Container, Table, Thead, Tr, ThOdd, ThEven, ThB, TdOdd, TdEven, Link } from './styles';

interface IProps {
  data: IRepo[];
}

const ReposTable: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <ThOdd scope="col">
              ID
            </ThOdd>
            <ThEven scope="col">
              NAME
            </ThEven>
            <ThOdd scope="col">
              URL
            </ThOdd>
          </tr>
        </Thead>
        <tbody>
          {
            data.map(i => (
              <React.Fragment key={i.id}>
                <Tr>
                  <ThB scope="row">
                    {i.id}
                  </ThB>
                  <TdOdd>
                    {i.name}
                  </TdOdd>
                  <TdEven>
                    <Link href={i.html_url} rel='nofollow' target='_blank'>{i.html_url}</Link>
                  </TdEven>
                </Tr>
              </React.Fragment>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default ReposTable;