import { IAppRoute } from '../interfaces/app-route';
import { AuthPagesRoutes } from './authpages';
import { MainRoutes } from './main';

export const AppRoutes: IAppRoute[] = [...MainRoutes, ...AuthPagesRoutes];
