import supabase from '@/lib/supabase';

const fetchData = async (column: string, value: string) => {
  const { data, error } = await supabase
    .from('routines')
    .select('*')
    .eq(column, value);

  if (error) {
    console.error('error', error);
    return { props: { routines: [] }}
  }

  return { props: { routines: data }}
}

export default fetchData;