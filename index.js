
import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from 'routes\BookRoutes.js';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/books', bookRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Book API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

