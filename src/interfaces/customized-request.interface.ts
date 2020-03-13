import { IAuthPayload } from './auth-payload.interface';

export interface ICustomizedRequest extends Request {
  payload: IAuthPayload;
}
