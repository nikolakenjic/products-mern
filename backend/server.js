import app from './app.js';
import { connectDB } from './mongoDB/connect.js';

const DB = process.env.MONGODB_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Start server
const port = process.env.PORT;

try {
  await connectDB(DB);
  app.listen(port, () => {
    console.log(`Server is running on a port ${port}...`);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}
