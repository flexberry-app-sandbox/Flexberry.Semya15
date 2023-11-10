import { Serializer as ДатчикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-semya15-датчик';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДатчикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
