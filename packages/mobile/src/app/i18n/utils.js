import i18next from 'i18next';

const withOverWrites = ({ lng, defaultTranslations, overWrites }) => namespace => {
  const translations = overWrites?.[namespace]
    ? { ...defaultTranslations[namespace], ...overWrites[namespace] }
    : defaultTranslations[namespace];
  return i18next.addResources(lng, namespace, translations);
};

const noOverWrites = ({ lng, defaultTranslations }) => namespace =>
  i18next.addResources(lng, namespace, defaultTranslations[namespace]);

const addResources = props => {
  const { defaultTranslations, overWrites } = props;
  const namespaces = Object.keys(defaultTranslations);
  return namespaces.forEach(overWrites ? withOverWrites({ ...props }) : noOverWrites({ ...props }));
};

export default addResources;
