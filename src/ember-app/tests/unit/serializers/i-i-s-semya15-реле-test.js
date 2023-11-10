import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-semya15-реле', 'Unit | Serializer | i-i-s-semya15-реле', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-semya15-реле',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-semya15-датчик',
    'model:i-i-s-semya15-контроллер',
    'model:i-i-s-semya15-реле',
    'model:i-i-s-semya15-темпа-устан',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
