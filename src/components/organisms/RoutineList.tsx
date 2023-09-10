import React from "react";
import RoutineItem from "../molecules/RoutineItem";
import { RoutineListProps } from "@/types/components/organisms/routineList";

const RoutineList = ({ routines }: {routines: RoutineListProps}) => {
  return (
    <div className="flex flex-col gap-2">
      {routines.map((routine) => (
        <RoutineItem key={routine.id} routine={routine}/>
      ))}
    </div>
  )
}

export default RoutineList;