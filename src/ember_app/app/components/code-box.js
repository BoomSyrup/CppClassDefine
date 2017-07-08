import Ember from 'ember';
import config from '../config/environment';
const {Component} = Ember;

export default Component.extend({
<<<<<<< HEAD

=======
  codePlaceholder: config.classStruct,
<<<<<<< HEAD

  actions: {
    textChanged(event) {
      let text = event.target.value;
      this.sendAction('action', text);
    }
  }
=======
>>>>>>> ae69555b658c6254a2c1df407f7f7a12816805ab
>>>>>>> 66f24ca80eec11c86976b83f7785b0fb7ef756d9
});
