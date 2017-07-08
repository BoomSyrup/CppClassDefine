import Ember from 'ember';
const {Component} = Ember;
<%= importTemplate %>
export default Component.extend({<%= contents %>
    disabled: false,
    actions: {
        close() {
            this.sendAction('close');
        },
        okClicked() {
            this.sendAction('close');
        }
    }
});
