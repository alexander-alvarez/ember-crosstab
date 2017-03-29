/*  */

export function initialize(application) {
  application.register('crosstab:id', crosstab.id, {instantiate: false});
}

export default {
  name: 'crosstab',
  initialize
};
