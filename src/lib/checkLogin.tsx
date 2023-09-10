import supabase from "@/lib/supabase";

const checkLogin = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    return false;
  } else {
    return true;
  }
}

export default checkLogin;