import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:dc/services/index', 'Unit | Controller | dc/services/index', {
  // Specify the other units that are required for this test.
  needs: ['service:search'],
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
