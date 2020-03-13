export interface IAuthPayload {
  type: 'user' | 'admin' | '3rdParty';
  id: number;
}
