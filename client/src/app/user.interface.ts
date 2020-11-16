import { IBase } from './base.interface';

export interface IUser extends IBase {
    themes: string[];
    posts: string[];
    tel: string;
    email: string;
    username: string;
    password: string;
}
