import { IBase } from './base.interface';
import { IUser } from './user.interface';

export interface ITheme extends IBase {
        subscribers: string[];
        posts: string[];
        themeName: string;
        userId: IUser; 
}
