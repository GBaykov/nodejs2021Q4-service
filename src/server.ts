import app  from './app';

const { PORT } = require('./common/config');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
