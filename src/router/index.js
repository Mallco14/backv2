import { TestRouter } from "../components";

const listRoutes = [["/products", TestRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
