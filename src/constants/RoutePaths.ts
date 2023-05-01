export enum RouteName {
  HOME = "HOME",
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
}

export const RoutePaths: { [x in RouteName]: string } = {
  HOME: "/",
  REGISTER: "/register",
  LOGIN: "/login",
};

export const RouteTexts: { [x in RouteName]: string } = {
  HOME: "Home",
  REGISTER: "Register",
  LOGIN: "Login"
};

export const RouteMaps: { [x in (typeof RoutePaths)[RouteName]]: string } = {
  ...Object.keys(RoutePaths).reduce((v: any, k) => {
    v[RoutePaths[k as RouteName]] = RouteTexts[k as RouteName];
    return v;
  }, {}),
};

export const headerLessRoutes = [
    //RoutePaths.Home
    RoutePaths.REGISTER,
    RoutePaths.LOGIN
];
