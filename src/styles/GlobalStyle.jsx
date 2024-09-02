import { createGlobalStyle } from "styled-components";
import PretendardLightWoff2 from "../assets/fonts/Pretendard-Light.subset.woff2";
import PretendardLightWoff from "../assets/fonts/Pretendard-Light.subset.woff";
import PretendardRegularWoff2 from "../assets/fonts/Pretendard-Regular.subset.woff2";
import PretendardRegularWoff from "../assets/fonts/Pretendard-Regular.subset.woff";
import PretendardMediumWoff2 from "../assets/fonts/Pretendard-Medium.subset.woff2";
import PretendardMediumWoff from "../assets/fonts/Pretendard-Medium.subset.woff";
import PretendardSemiBoldWoff2 from "../assets/fonts/Pretendard-SemiBold.subset.woff2";
import PretendardSemiBoldWoff from "../assets/fonts/Pretendard-SemiBold.subset.woff";
import PretendardBoldWoff2 from "../assets/fonts/Pretendard-Bold.subset.woff2";
import PretendardBoldWoff from "../assets/fonts/Pretendard-Bold.subset.woff";

const GlobalStyle = createGlobalStyle`
/* Pretendard */
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Light), url(${PretendardLightWoff2}) format("woff2"), url(${PretendardLightWoff}) format("woff");
    font-weight: 300;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Regular), url(${PretendardRegularWoff2}) format("woff2"), url(${PretendardRegularWoff}) format("woff");
    font-weight: 400;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Medium), url(${PretendardMediumWoff2}) format("woff2"), url(${PretendardMediumWoff}) format("woff");
    font-weight: 500;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-SemiBold), url(${PretendardSemiBoldWoff2}) format("woff2"), url(${PretendardSemiBoldWoff}) format("woff");
    font-weight: 600;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Bold), url(${PretendardBoldWoff2}) format("woff2"), url(${PretendardBoldWoff}) format("woff");
    font-weight: 700;
}

:root {
    --font-family: "Pretendard", "Nanum Gothic", "Apple SD Gothic Neo", Helvetica, Arial, sans-serif;
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

*,
*:before,
*:after {
  box-sizing: border-box;
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
*{
    box-sizing: border-box;
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
    background: rgba(0, 0, 0, 0.3); /* 스크롤바 색상 */
    border-radius: 12px; /* 스크롤바 둥근 테두리 */
    background-clip: padding-box;
    border: 5px solid transparent;
}
::-webkit-scrollbar-track {
    background: var(--beige-color); /* 스크롤바 뒷 배경 색상 */
}
::placeholder {
    color: rgba(0, 0, 0, 0.5);
}
input,
textarea,
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
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip-path: inset(50%);
	border: 0;
	clip: rect(0 0 0 0);
}
`;

export default GlobalStyle;
