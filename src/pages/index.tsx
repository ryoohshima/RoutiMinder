import React from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import RoutineList from '@/components/organisms/RoutineList';
import { HomeProps } from '@/types/index';
import fetchData from '@/lib/fetchData';

export const getServerSideProps = async (context) => {
  const data = await fetchData();
  return data;
}

const Home = ({ routines }: HomeProps) => {
  return (
    <DefaultLayout>
      <RoutineList routines={routines}/>
    </DefaultLayout>
  )
}

export default Home;