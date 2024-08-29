import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --font-family: "NEXONLv1Gothic", "Nanum Gothic", "Apple SD Gothic Neo", Helvetica, Arial, sans-serif;
    --yellow-color: #FFC565;
    --yellow-hover-color: #E7B158;
    --green-color: #143021;
    --green-hover-color: #0F2318;
    --beige-color: #F6EED7;
    --beige-hover-color: #DED5BC;
    --gray1-color : #111111;
    --gray2-color : #333333;
    --gray3-color : #CCCCCC;
    --gray4-color : #F6F6F6;
    --container-width: 1200px;
    --gutter: 12px;
    --spacing: 12px;
    --spacing-lg: 24px;
    --border-radius: 8px;
    --border-radius-sm: 4px;
}

/* NEXONLv1Gothic */
@font-face {
    font-family: "NEXONLv1Gothic";
    src: local(NEXONLv1GothicLight), url("../assets/fonts/NEXONLv1GothicLight.woff2") format("font-woff2"), url("../assets/fonts/NEXONLv1GothicLight.woff") format("font-woff");
    font-weight: 300;
}
@font-face {
    font-family: "NEXONLv1Gothic";
    src: local(NEXONLv1GothicRegular), url("../assets/fonts/NEXONLv1GothicRegular.woff2") format("font-woff2"), url("../assets/fonts/NEXONLv1GothicRegular.woff") format("font-woff");
    font-weight: 400;
}
@font-face {
    font-family: "NEXONLv1Gothic";
    src: local(NEXONLv1GothicBold), url("../assets/fonts/NEXONLv1GothicBold.woff2") format("font-woff2"), url("../assets/fonts/NEXONLv1GothicBold.woff") format("font-woff");
    font-weight: 700;
}
   html {
    font-size: 62.5% !important;
    font-family: var(--font-family); 
    overflow-x: hidden;
    overflow-y: scroll;
}
@media screen and (min-width: 0\0) {
    /* IE 9, IE 10, IE 11 */
    :root,
    html {
        font-size: 10px;
    }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    /* IE 10, IE 11 */
    :root,
    html {
        font-size: 10px;
    }
}
body {
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--gray1-color);
}
::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}
::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5); /* 스크롤바 색상 */
    border-radius: 12px; /* 스크롤바 둥근 테두리 */
    background-clip: padding-box;
    border: 5px solid transparent;
}
::-webkit-scrollbar-track {
    background: transparent; /* 스크롤바 뒷 배경 색상 */
}
::placeholder {
    color: rgba(0, 0, 0, 0.5);
}
input,
button {
    font-family: var(--font-family);
}
a, button{
    outline: none;
    border: none;
    cursor: pointer;
    transition: all ease 0.3s;
}
a{
    text-decoration: none;
    color: var(--gray1-color);
}
#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
}
.container {
    width: 100%;
    max-width: calc(var(--container-width) + var(--gutter) * 2);
    padding: 0 var(--gutter);
    margin: 0 auto;
}

`;

export default GlobalStyle;
