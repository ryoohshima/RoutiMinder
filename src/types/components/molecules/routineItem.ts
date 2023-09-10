export type Routine = {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  start_time: string;
  end_time: string;
  frequency: ("everyday" | "weekly" | "monthly")[];
  days_of_week: ("sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | null)[];
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
};