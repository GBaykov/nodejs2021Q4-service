import app  from './app';
import {LOG_LVL, PORT} from './common/config';

app.listen(PORT, () => {
  console.log( "LOG-LVL",  LOG_LVL)
  console.log(`App is running on http://localhost:${PORT}`)
}
);
