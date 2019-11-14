export const theme = {
  paddings: {
    main: 16,
    half: 8,
    quarter: 4,
    threeQuarters: 12,
    mainAndHalf: 24,
    double: 32
  },
  pallete: {
    main: {
      white: '#ffffff',
      radicalRed: '#ff3f6e',
      turquoise: '#34dfb8',
      error: '#e50202'
    },
    nero: {
      nero: '#222222',
      silver: '#bdbdbd',
      darkWhite: '#f4f4f4',
      lightGray: '#a7a7a7',
      gray: '#7a7a7a'
    }
  },
  fontFamily: {
    primaryRegular: 'montserrat',
    primaryMedium: 'montserrat-medium',
    primarySemibold: 'montserrat-semibold',
    primaryBold: 'montserrat-bold'
  }
}

export type Theme = typeof theme
