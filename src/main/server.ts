import { app, sequelize } from './config/app';

const port = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected successfully');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(error => {
  console.error('Database connection failed:', error);
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// })