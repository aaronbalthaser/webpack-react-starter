import checkPropTypes from 'check-prop-types';

/**
 * Returns shallow wrapper with the targeted node by data-test attribute.
 * @param {Wrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} attr - Attr identifying data-test attribute
 */
export const findByAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

export const checkProp = (component, conformingProps) => {
  return checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
};
