import { css } from 'styled-components'

export type UnitType =
  | `${number}${'px' | 'rem' | '%'}`
  | `calc(${number}${'px' | 'rem' | '%'} ${string} ${number}px)`
  | 'auto'
  | 'max-content'
  | 'fit-content'
  | 0

export type UtilColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'disabled'
  | 'highEmphasis'
  | 'midEmphasis'
  | 'secondaryDark'
  | 'lowEmphasis'
  | 'inherit'
  | 'white'

export type UtilBgType =
  | 'all'
  | 'form'
  | 'grayEmphasis'
  | 'error'
  | 'greenEmphasis'
  | 'warning'
  | 'selected'

export type UtilityStyleType = {
  m?: UnitType
  mt?: UnitType
  mb?: UnitType
  ml?: UnitType
  mr?: UnitType
  mx?: UnitType
  my?: UnitType
  p?: UnitType
  pt?: UnitType
  pb?: UnitType
  pl?: UnitType
  pr?: UnitType
  px?: UnitType
  py?: UnitType
  width?: UnitType
  height?: UnitType
  align?: 'right' | 'center' | 'left'
  color?: UtilColorType
  bg?: UtilBgType
}

const utilStyle = ({
  m = 0,
  mx = m,
  my = m,
  mt = my,
  mr = mx,
  mb = my,
  ml = mx,
  p = 0,
  px = p,
  py = p,
  pt = py,
  pr = px,
  pb = py,
  pl = px,
  width = 'auto',
  height = 'auto',
  align = 'left',
  color = 'inherit',
  bg,
}: UtilityStyleType) => css`
  width: ${width};
  height: ${height};
  padding: ${pt} ${pr} ${pb} ${pl};
  margin: ${mt} ${mr} ${mb} ${ml};
  color: ${color === 'inherit' ? color : styledTheme.palette.text[color]};
  text-align: ${align};
  ${bg &&
  css`
    background: ${styledTheme.palette.bg[bg]};
  `};
`

export const themeColors = {
  gray: {
    100: '#1C1C13',
    60: 'rgb(28 28 51 / 0.6)',
    40: 'rgb(28 28 51 / 0.38)',
    20: 'rgb(210 210 214)',
    12: 'rgb(228 228 231)',
    6: 'rgb(241 241 243)',
    3: 'rgb(247 247 249)',
    1: 'rgb(250 250 250)',
  },
  navy: {
    90: 'rgba(41, 46, 65, 1)',
    1: '#F3F4FA',
  },
  violet: {
    80: 'rgb(28 16 192)',
    40: 'rgb(87 90 234)',
    3: 'rgb(240 242 255)',
  },
  green: {
    90: '#005E46',
    80: '#3E8E0D',
    50: '#00A47C',
    40: '#78C62C',
    10: 'rgb(233 246 221)',
    1: '#F1F8F5',
  },
  red: {
    50: 'rgb(234 67 53)',
    5: 'rgb(253 236 239)',
  },
  orange: {
    90: '#FF7422',
    5: '#FFF8E6',
  },
  yellow: {
    90: '#FFAC00',
  },
  white: '#fff',
} as const

export const device = {
  mobile: '(max-width: 426px)',
  tablet: '(max-width: 769px)',
  laptop: '(max-width: 1025px)',
} as const

export const styledTheme = {
  palette: {
    primary: {
      main: themeColors.violet[40],
      dark: themeColors.violet[80],
      light: themeColors.violet[3],
    },
    secondary: {
      main: themeColors.gray[100],
      light: themeColors.gray[3],
    },
    error: {
      main: themeColors.red[50],
      light: themeColors.red[5],
    },
    warning: {
      main: themeColors.orange[90],
      light: themeColors.orange[5],
    },
    myrefer: {
      main: themeColors.green[40],
      dark: themeColors.green[80],
      light: themeColors.green[10],
      gradient: 'linear-gradient(45.97deg, #81C577 2.38%, #7DC9B0 99.32%)',
    },
    mytalent: {
      main: themeColors.violet[40],
      light: themeColors.violet[3],
      gradient: 'linear-gradient(125.82deg, #1DC1C1 14%, #7B80F2 85.4%)',
    },
    text: {
      primary: themeColors.violet[40],
      error: themeColors.red[50],
      warning: themeColors.orange[90],
      highEmphasis: themeColors.gray[100],
      midEmphasis: themeColors.gray[60],
      lowEmphasis: themeColors.gray[20],
      disabled: themeColors.gray[40],
      secondary: themeColors.green[50],
      secondaryDark: themeColors.green[90],
      white: themeColors.white,
    },
    bg: {
      all: themeColors.navy[1],
      tableHeader: themeColors.gray[1],
      hover: 'rgb(32 20 192 / 0.04)',
      selected: themeColors.violet[3],
      form: themeColors.gray[6],
      error: themeColors.red[5],
      warning: themeColors.orange[5],
      grayEmphasis: themeColors.gray[3],
      navyEmphasis: themeColors.navy[90],
      greenEmphasis: themeColors.green[1],
      disabled: themeColors.gray[12],
      white: themeColors.white,
    },
    border: {
      horizontal: 'rgba(228 228 231 / 1)',
      border: themeColors.gray[20],
    },
  },
  transition: {
    basic: '0.3s',
    fast: '0.2s',
  },
  elevation: {
    1: '0px 2px 1px -1px rgba(240, 240, 250, 0.2), 0px 1px 1px rgba(60, 64, 67, 0.14), 0px 1px 3px rgba(60, 64, 67, 0.12);',
    8: '0px 3px 5px -1px rgba(240, 240, 250, 0.2), 0px 6px 10px rgba(60, 64, 67, 0.14), 0px 1px 18px rgba(60, 64, 67, 0.12);',
  },
  device,
  utilStyle,
  themeColors,
} as const
