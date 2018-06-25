import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | messenger', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show messenger as the index route', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/messenger', 'redirect before model render')
  });

  test('should list current messages.', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.post').length, 2, 'show 2 mock posts');
  });
});
