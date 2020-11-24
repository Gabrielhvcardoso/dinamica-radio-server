export interface ScheduleProgram {
  scheduleProgramId: number,
  programId: number, // ref: program
  weekday: 1 | 2 | 3 | 4 | 5 | 6 | 7,
  startAt: string,
  duration: number
}
