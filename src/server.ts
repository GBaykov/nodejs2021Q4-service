import app  from './app';

// const { PORT } = require('./common/config');
import {PORT} from './common/config'

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
