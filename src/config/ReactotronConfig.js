import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';


if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux()) //  <- here i am!
    .use(reactotronSaga())
    .connect(); // Don't forget about me!

  console.tron = tron;
}
