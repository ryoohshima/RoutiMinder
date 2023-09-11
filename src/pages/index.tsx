import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import RoutineList from '@/components/organisms/RoutineList';
import { HomeProps } from '@/types/index';
import fetchData from '@/lib/fetchData';
import withAuth from '@/hocs/withAuth';

export const getServerSideProps = async (context) => {
  const data = await fetchData('user_id', 'c01e9a7b-f3a0-4951-8058-0e0782a1f4ad');
  return data;
}

const Home = ({ routines }: HomeProps) => {
  return (
    <DefaultLayout>
      <RoutineList routines={routines}/>
    </DefaultLayout>
  )
}

export default withAuth(Home);