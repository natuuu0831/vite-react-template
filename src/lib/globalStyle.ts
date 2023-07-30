import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const bodyStyle = css`
  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans',
      'ヒラギノ角ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3',
      Roboto, 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
    font-size: 14px;
    line-height: 16px;
    background: ${({ theme }) => theme.palette.bg.all};
  }
`

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${bodyStyle}
  html{
    font-size: 14px;
    color:  ${({ theme }) => theme.palette.text.highEmphasis}
  }

  *, *::after, *::before {
    box-sizing: border-box;
    word-break: break-all;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }

  li {
    list-style: none;
  }
`
