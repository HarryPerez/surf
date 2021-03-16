// TODO: search alternatives to props and styles types
export function getCustomStyles(variants, props, styles, stylePrefix = '') {
  return variants
    .map(variant =>
      props[variant] ? styles[`${variant}${stylePrefix}`] : null
    )
    .filter(style => style !== null);
}
