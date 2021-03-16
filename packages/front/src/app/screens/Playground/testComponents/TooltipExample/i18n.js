import i18next from 'i18next';

i18next.addResources('es', 'TooltipExample', {
  tooltip: 'Tooltip',
  plainContent: 'Simplemente usar un componente de texto',
  styledContent:
    'Se puede customizar el tooltip pasando un className. Cuidado con cambiar colores, no olvidar cambiar el border-top::before',
  imageContent: 'Usar una imagen es simple como pasarla como child!',
  textTooltip: 'Tooltip de texto',
  styledTooltip: 'Tooltip estilado',
  imageTooltip: 'Tooltip de imagen'
});

i18next.addResources('en', 'TooltipExample', {
  tooltip: 'Tooltip',
  plainContent: 'Simply use a text component',
  styledContent:
    "You can customize the tooltip by passing it a className. Be careful when changing colors, don't forget to change border-top::before",
  imageContent: 'Using an image is as simple as passing it as a child!',
  textTooltip: 'Text Tooltip',
  styledTooltip: 'Styled Tooltip',
  imageTooltip: 'Image Tooltip'
});
