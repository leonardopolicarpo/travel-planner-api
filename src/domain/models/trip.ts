export interface TripModel {
  id: string,
  destination: string,
  startDate: Date,
  endDate: Date,
  activities: string[]
}

export interface CreateTripModel {
  destination: string,
  startDate: Date,
  endDate: Date,
  activities: string[]
}