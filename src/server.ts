import app  from './app';
import {LOG_LVL, PORT} from './common/config';
import cors from 'cors';
import { connectToDB } from './db/db';


connectToDB(()=>{
  app.listen(PORT, () => {
    console.log( "LOG-LVL",  LOG_LVL)
    console.log(`App is running on http://localhost:${PORT}`)
  }
  );
})

