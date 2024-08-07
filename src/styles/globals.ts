import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color:#000000;
	scrollbar-width: thin;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1{
	font-size: 43px;
	color: white;
	font-family: Oswald;
}
* {
	box-sizing: border-box;
}
 ::-webkit-scrollbar {
    width: 10px;
	background-color: #333333;
    border-radius: 5px;
  }


  ::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 5px;

  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #00d9ff;
	box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
  }

  .Toastify__close-button {
    color: #000000; 
	opacity: 1 !important;
  }

`;

export default GlobalStyle;
