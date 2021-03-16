import Reactotron, { asyncStorage, overlay, trackGlobalErrors } from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import { NativeModules } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

// If you want to use a physical device and connect it to reactotron, execute first `adb reverse tcp:9090 tcp:9090`
if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({ name: 'bootstrap', host: scriptHostname })
    .use(trackGlobalErrors({}))
    .use(apisaucePlugin())
    .use(reactotronRedux())
    .use(asyncStorage({}))
    .use(overlay())
    .connect();

  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}

/* Here is an example of how to use customCommand

const selfRemoving = console.tron.customCommand({
  command: "remove",
  handler: () => {
    selfRemoving() // Calling it unregisters the command
  },
})

This will display a button in Reactotron which will execute the whole handler
block when clicked.

Is important to know that a customCommand can't be declared/registered twice
So we have to unregister it if we are going to run the same block again.
If you use this pattern the customCommand will be unregistered when executed
to avoid conflics in the future. A good way to register a customCommand is in the
ComponentDidMount life cycle method of the desired component

*/

export default Reactotron;
