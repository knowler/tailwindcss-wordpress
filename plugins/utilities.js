module.exports = ({ addUtilities, config }) => {
  const { colors, fontSize, margin, screens } = config('theme')

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
      margin: `${margin[2]} auto`,
    },
    [`@media (min-width: ${screens.sm})`]: {
      '.alignleft': {
        float: 'left',
        marginRight: margin[2],
      },
      '.alignright': {
        float: 'right',
        marginLeft: margin[2],
      },
    },

    /** Captions */
    '.wp-caption': {
      display: 'inline-block',
      '& img': {
        marginBottom: margin[2],
        lineHeight: 1,
      },
    },
    '.wp-caption-text': {
      fontSize: fontSize.sm,
      color: colors.gray[600],
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
