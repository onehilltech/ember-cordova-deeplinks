import decorator from '@onehilltech/decorator';
import override from '@onehilltech/override';

/**
 * The deeplink decorator.
 *
 * Usage: @deeplink ('password.reset')
 *
 * @param target
 * @param name
 * @param descriptor
 * @param deepLinkName
 */
function deepLink (target, name, descriptor, deepLinkName) {
  override (target, 'activate', function () {
    this._super.call (this, ...arguments);
    this.deeplinks.subscribe (deepLinkName, target[name].bind (this));

    override (target, 'deactivate', function () {
      this._super.call (this, ...arguments);
      this.deeplinks.unsubscribe (deepLinkName);
    });
  });
}

export default decorator (deepLink);
