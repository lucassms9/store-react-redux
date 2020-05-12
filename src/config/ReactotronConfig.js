import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux()) //  <- here i am!
    .connect(); // Don't forget about me!

  console.tron = tron;
}
