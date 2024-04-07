import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *::before,
  *,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: background-color 0.3s, color 0.3s, scale 0.3s,
      transform 0.3s;
  }

  :root {
    font-size: clamp(0.5rem, 1vw, 0.625rem);
  }

  html {
    hanging-punctuation: first last;
  }

  body {
    height: 100vh;
    min-height: 100svh;

		background-color: ${(props) => props.theme['background']};
  }

  body,
  input,
  button {
    font-family: 'Roboto', system-ui, sans-serif;
  }

  h1,
  h2,
  h3,
  h4 {
    text-wrap: balance;
  }

  p {
    max-width: 62ch;

    text-wrap: pretty;
  }

  a,
  button,
  input,
  ol,
  li {
    all: unset;
    appearance: none;
  }

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

  button {
    cursor: pointer;

		&:disabled {
			cursor: not-allowed;
		}
  }

	#app {
		max-width: 112rem;
		width: 100%;
		margin-inline: auto;
		padding: 3.2rem;
		display: grid;
		place-content: center;
	}

	.title-xl {
		font-size: ${(props) => props.theme['title-xl-size']};
		font-weight: ${(props) => props.theme['title-xl-weight']};
		line-height: ${(props) => props.theme['title-xl-leading']};
	}

	.title-l {
		font-size: ${(props) => props.theme['title-l-size']};
		font-weight: ${(props) => props.theme['title-l-weight']};
		line-height: ${(props) => props.theme['title-l-leading']};
	}

	.title-m {
		font-size: ${(props) => props.theme['title-m-size']};
		font-weight: ${(props) => props.theme['title-m-weight']};
		line-height: ${(props) => props.theme['title-m-leading']};
	}

	.title-s {
		font-size: ${(props) => props.theme['title-s-size']};
		font-weight: ${(props) => props.theme['title-s-weight']};
		line-height: ${(props) => props.theme['title-s-leading']};
	}

	.title-xs {
		font-size: ${(props) => props.theme['title-xs-size']};
		font-weight: ${(props) => props.theme['title-xs-weight']};
		line-height: ${(props) => props.theme['title-xs-leading']};
	}

	.text-l {
		font-size: ${(props) => props.theme['text-l-size']};
		font-weight: ${(props) => props.theme['text-l-weight']};
		line-height: ${(props) => props.theme['text-l-leading']};
	}

	.text-m {
		font-size: ${(props) => props.theme['text-m-size']};
		font-weight: ${(props) => props.theme['text-m-weight']};
		line-height: ${(props) => props.theme['text-m-leading']};
	}

	.text-s {
		font-size: ${(props) => props.theme['text-s-size']};
		font-weight: ${(props) => props.theme['text-s-weight']};
		line-height: ${(props) => props.theme['text-s-leading']};
	}

	.text-xs {
		font-size: ${(props) => props.theme['text-xs-size']};
		font-weight: ${(props) => props.theme['text-xs-weight']};
		line-height: ${(props) => props.theme['text-xs-leading']};
	}

	.tag {
		font-size: ${(props) => props.theme['tag-size']};
		font-weight: ${(props) => props.theme['tag-weight']};
		line-height: ${(props) => props.theme['tag-leading']};
	}

	.button-g {
		font-size: ${(props) => props.theme['button-g-size']};
		font-weight: ${(props) => props.theme['button-g-weight']};
		line-height: ${(props) => props.theme['button-g-leading']};
	}

	.button-m {
		font-size: ${(props) => props.theme['button-m-size']};
		font-weight: ${(props) => props.theme['button-m-weight']};
		line-height: ${(props) => props.theme['button-m-leading']};
	}
`
