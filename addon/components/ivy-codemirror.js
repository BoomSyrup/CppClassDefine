import Component from 'ember-component';
import injectService from 'ember-service/inject';
import observer from 'ember-metal/observer';
import { bind, once, scheduleOnce } from 'ember-runloop';

export default Component.extend({
  tagName: 'textarea',

  codeMirror: injectService(),

  didInsertElement() {
    this._super(...arguments);

    this._codeMirror = this.get('codeMirror').fromTextArea(this.get('elementId'), this.get('element'));

    // Send a "valueUpdated" action when CodeMirror triggers a "change" event.
    this.setupCodeMirrorEventHandler('change', this, this.scheduleValueUpdatedAction);
  },

  didRender() {
    this._super(...arguments);

    this.updateCodeMirrorOptions();
    this.updateCodeMirrorValue();
  },

  isVisibleDidChange: observer('isVisible', function() {
    if (this._wasVisible === this.get('isVisible')) {
      return;
    }

    scheduleOnce('render', this, this.toggleVisibility);
  }),

  scheduleValueUpdatedAction(codeMirror, changeObj) {
    once(this, this.sendValueUpdatedAction, codeMirror.getValue(), codeMirror, changeObj);
  },

  setupCodeMirrorEventHandler(event, target, method) {
    const callback = bind(target, method);

    this._codeMirror.on(event, callback);

    this.one('willDestroyElement', this, function() {
      this._codeMirror.off(event, callback);
    });
  },

  sendValueUpdatedAction(...args) {
    this.sendAction('valueUpdated', ...args);
  },

  toggleVisibility() {
    const isVisible = this.get('isVisible');

    if (this._wasVisible === isVisible) {
      return;
    }

    this._wasVisible = isVisible;

    if (isVisible) {
      // Force a refresh when becoming visible, since CodeMirror won't render
      // itself onto a hidden element.
      this._codeMirror.refresh();
    }
  },

  updateCodeMirrorOption(option, value) {
    if (this._codeMirror.getOption(option) !== value) {
      this._codeMirror.setOption(option, value);
    }
  },

  updateCodeMirrorOptions() {
    const options = this.get('options');

    if (options) {
      Object.keys(options).forEach(function(option) {
        this.updateCodeMirrorOption(option, options[option]);
      }, this);
    }
  },

  updateCodeMirrorValue() {
    const value = this.get('value');

    if (value !== this._codeMirror.getValue()) {
      this._codeMirror.setValue(value || '');
    }
  },

  willDestroyElement() {
    this._super(...arguments);

    // Remove the editor and restore the original textarea.
    this._codeMirror.toTextArea();

    this.get('codeMirror').unregisterInstance(this.get('elementId'));

    delete this._codeMirror;
  }
});
