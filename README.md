# Yummy-Yummy!😋

![og](https://github.com/user-attachments/assets/53dfcd84-7dfe-4af7-8fa3-b8314bbf3067)

---

## 프로젝트 소개

유저들이 공유한 요리 레시피 기록을 한 눈에 볼 수 있는 뉴스피드 사이트

---

## 🚩 프로젝트 개요

- **프로젝트명** &nbsp; :&nbsp;
  **Yummy Yummy!**

- **진행 기간** &nbsp;: &nbsp;
  **24.08.28 ~ 24.09.04**

---

## 👨‍👩‍👧‍👦 팀원 소개

|             정소현             |   조아영   |      정수희       |   선채훈   |   이태연   |
| :----------------------------: | :--------: | :---------------: | :--------: | :--------: |
|            **팀장**            |  **팀원**  |     **팀원**      |  **팀원**  |  **팀원**  |
| 로그인, 회원가입 기능 + 페이지 | 마이페이지 | 레시피 작성페이지 | 메인페이지 | 상세페이지 |

---

</br>
<div align=Left>
<h1>📚 STACKS</h1>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/styled Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/git actions-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
<img src="https://img.shields.io/badge/VSCODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
</div>

#### 개발환경

- yarn vite
- React
- styled-component

#### Code Convention

- ES Lint , prettier 사용
- 컴포넌트일 경우에만 .jsx확장자 사용
- customHook을 사용하는 경우 : use + 함수명
- Props의 경우: on (onClick 등등)
- 함수인 경우: handle (handleClick 등등)
- 상수 : 모두 대문자 스네이크 케이스(snake_case) 예시) SNAKE_CASE
- js(변수, 함수, 인스턴스) : 카멜 케이스(camelCase) 예시) const createMovie = [];
- css, html : 케밥 케이스(kebab**_-_**case) 예시) <div class=”movie-items”></div>
- image 명 : 케밥 케이스(kebab**_-_**case) 예시) movie-img.jpg
- 주석 최대한 활용하기 : 해당 코드 제목, 설명 간단하게 적어놓기
- 약칭은 되도록 사용하지 않기

---

## 🗂️ 기능 설명

#### 로그인

- OAuth2 소셜로그인 (Kakao, Google, Github)
- 일반 이메일 계정 로그인 (간편 회원가입 후)

#### 회원가입

- 이메일, 비밀번호, 비밀번호 확인, 닉네임 입력시 간편 회원가입이 가능

##### 유효성 검사 처리

- 비밀번호가 일치하지 않을 시 에러 메세지 발생
- 이미 존재하는 아이디와 동일 아이디로 가입시도시 에러 메세지 발생

#### 로그인 전 후 Header 메뉴 변경 처리

- (로그인 시) 게시글 작성과, 로그아웃, 마이페이지 메뉴
- (로그아웃 시) 로그인, 회원가입 메뉴

---

### 💥 Trouble Shooting

1. Supabase

- 문제발생 : 개별 작업 진행 중 supabase Table명칭과 Column명 통일성을 부여하기 위해 변경 => 지정해 둔 table에 연결이 끊김
- 해결방법 : Table명, Column명을 하나씩 변경해보며 명칭변경으로 인한 문제인 지 API키 문제인 지 파악 후 명칭변경으로 인한 문제인 점을 확인.
  SQL 문을 입력해 연결이 되어있었던 Table명과 Column명을 변경

#### Technologies & Tools

JAVASCRIPT, REACT, FIGMA, SUPABASE, , VERCEL, GIT, GITHUB, SLACK, NOTION

ⓒ 2024. Yummy Yummy All rights reserved. 1등하조
