import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | messenger/messenger', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:messenger/messenger');
    assert.ok(route);
  });
});
