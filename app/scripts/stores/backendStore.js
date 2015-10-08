import Reflux from 'reflux';
import BackendActions from '../actions/backendActions';

let BackendStore = Reflux.createStore({
  listenables: [BackendActions],
  url: null,

  setUrl: function(url) {
    //Add slash if missing
    if (url.substr(url.length - 1) !== '/') {
      this.url = url + '/';
    } else {
      this.url = url;
    }
    this.trigger(this.url);
  }
});

export default BackendStore;
