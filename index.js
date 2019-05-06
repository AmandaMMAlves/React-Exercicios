import { KeepAwake, registerRootComponent } from 'expo';
// import App from './src/App';
import Menu from './src/Menu';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(Menu);
