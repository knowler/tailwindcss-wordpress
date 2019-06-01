module.exports = ({ addUtilities, config }) => {
  const { colors, fontSize, margin, screens } = config('theme');

  addUtilities({
    /** Alignment utilities */
    '.alignnone': {
      marginLeft: 0,
      marginRight: 0,
      maxWidth: '100%',
      height: 'auto',
    },
    '.aligncenter': {
      display: 'block',
      margin: `${margin[2] || '0.5rem'} auto`,
    },
    [`@media (min-width: ${screens.sm || '640px'})`]: {
      '.alignleft': {
        float: 'left',
        marginRight: margin[2] || '0.5rem',
      },
      '.alignright': {
        float: 'right',
        marginLeft: margin[2] || '0.5rem',
      },
    },

    /** Captions */
    '.wp-caption': {
      display: 'inline-block',
      '& img': {
        marginBottom: margin[2] || '0.5rem',
        lineHeight: 1,
      },
    },
    '.wp-caption-text': {
      fontSize: fontSize.sm || '0.9rem',
      color: (colors.gray && colors.gray[600]) || '#718096',
    },

    /** Screen reader text */
    '.screen-reader-text': {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      whiteSpace: 'nowrap',
      '&:focus, &:active': {
        clip: 'auto',
        height: 'auto',
        margin: 0,
        overflow: 'visible',
        position: 'static',
        whiteSpace: 'inherit',
        width: 'auto',
      },
    },
  });
};
