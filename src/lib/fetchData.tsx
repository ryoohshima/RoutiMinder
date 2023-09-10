import supabase from '@/lib/supabase';

const fetchData = async () => {
  const { data, error } = await supabase
    .from('routines')
    .select('*');

  if (error) {
    console.error('error', error);
    return { props: { routines: [] }}
  }

  return { props: { routines: data }}
}

export default fetchData;