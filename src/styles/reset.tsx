import { createGlobalStyles } from 'goober/global'

export const ResetStyles = createGlobalStyles`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd,
ul,
li,
pre {
  margin: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

body {
  min-height: 100vh;
}

#__next {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

button {
  appearance: none;
}

img,
picture {
  width: 100%;
  height: auto;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}


@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0 !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0ms !important;
    scroll-behavior: auto !important;
  }
}

`
