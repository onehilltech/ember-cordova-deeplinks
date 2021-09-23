import decorator from '@onehilltech/decorator';
import override from '@onehilltech/override';

// @deepLink ('auth.password')
function deepLink (target, name, descriptor, options) {
  override (target, 'activate', function () {
    this._super.call (this, ...arguments);
    this.deeplinks.subscribe (options, target[name].bind (this));

    override (target, 'deactivate', function () {
      this._super.call (this, ...arguments);
      this.deeplinks.unsubscribe (options);
    });
  });
}

export default decorator (deepLink);
