import Reflux from 'reflux';
import UserActions from '../actions/userActions';

let UserStore = Reflux.createStore({
  listenables: [UserActions],
  userId: null,

  setUserId: function(userId) {
    this.userId = userId;
    this.trigger(this.userId);
  }
});

export default UserStore;
