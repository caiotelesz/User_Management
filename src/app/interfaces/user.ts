export interface User {
  name: string,
  email: string,
  sector: string,
  role: string,
  firebaseId?: string, // ? optional
  healthPlan?: string,
  dentalPlan?: string
}
