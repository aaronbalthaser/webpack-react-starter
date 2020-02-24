import checkPropTypes from 'check-prop-types';

/**
 * Returns shallow wrapper with the targeted node by data-test attribute.
 * @param {object} wrapper - Enzyme shallow wrapper to search within
 * @param {string} value - Attr identifying data-test attribute
 */
export const findByAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test-id='${value}']`);
};

export const checkProp = (component, conformingProps, getStack = null) => {
  return checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
    getStack
  );
};
