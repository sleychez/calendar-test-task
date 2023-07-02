import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const publicRoutes: IRoute[] = [
  { path: "/login", exact: true, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: "/", exact: true, component: Event },
];
