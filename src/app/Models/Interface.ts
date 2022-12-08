export interface Interface {}

export interface Individual {
  FirstName: string;
  LastName: string;
}

export interface UpdateClassModel {
  ScheduleID: string;
  StartTime: string;
  EndTime: string;
  MeetingDays: string;
  RoomName: string;
  InstructorName: string;
  Course: string;
  CrossListedClssId: string;
  Section: string;
  ClassId: string;
}