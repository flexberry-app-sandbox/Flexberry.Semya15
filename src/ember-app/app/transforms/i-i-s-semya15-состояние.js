import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеEnum from '../enums/i-i-s-semya15-состояние';

export default FlexberryEnum.extend({
  enum: СостояниеEnum,
  sourceType: 'IIS.Semya15.Состояние'
});
