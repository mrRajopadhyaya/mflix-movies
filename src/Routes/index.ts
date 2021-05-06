import PollRoutes from './poll';
import AuthRoutes from './auth';

const routes = (app: any) => {
  app.use('/api/poll', PollRoutes);
  app.use('/api/auth', AuthRoutes);
};

export default routes;
