import React from "react";
import Link from "next/link";
import Paragraph from "@/components/atoms/Paragraph";
import { Routine } from "@/types/components/molecules/routineItem";
import { getBackgroundColor } from "@/utils/getClass";
import { formatShortTime } from "@/utils/formatText";

const RoutineItem = ({ routine }: { routine: Routine}) => {
  const bgColor = getBackgroundColor('white');
  const startTime = formatShortTime(routine.start_time);
  return (
    <Link className={`flex gap-2 w-full p-4 shadow-lg ${bgColor}`} href={`/detail/${routine.id}`}>
      <Paragraph text={startTime} size="medium" color="black" />
      <Paragraph text={routine.title} size="medium" color="black" />
    </Link>
  )
}

export default RoutineItem;