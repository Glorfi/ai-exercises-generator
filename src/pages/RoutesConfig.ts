import { IAppRoute } from '../interfaces/app-route';
import { AuthPagesRoutes } from './authpages';
import { DashboardRoutes } from './dashboard';
import { MainRoutes } from './main';

export const AppRoutes: IAppRoute[] = [
  ...MainRoutes,
  ...AuthPagesRoutes,
  ...DashboardRoutes,
];
