# Yummy-Yummy!😋

## ![og](https://github.com/user-attachments/assets/53dfcd84-7dfe-4af7-8fa3-b8314bbf3067)

## 프로젝트 소개

## 유저들이 공유한 요리 레시피 기록을 한 눈에 볼 수 있는 뉴스피드 사이트

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
<h1>📚</h1>
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
<img src="https://img.shields.io/badge/SUPABASE-007ACC?style=for-the-badge&logo=SUPABASE&logoColor=white">
<img src="https://img.shields.io/badge/FIGMA-pink?style=for-the-badge&logo=FIGMA&logoColor=white">
<img src="https://img.shields.io/badge/VERCEL-007ACC?style=for-the-badge&logo=VERCEL&logoColor=white">
<img src="https://img.shields.io/badge/SLACK-green?style=for-the-badge&logo=SLACK&logoColor=white">
</div>

## Code Convention

- ES Lint , prettier 사용
- 컴포넌트일 경우에만 .jsx확장자 사용
- customHook을 사용하는 경우 : use + 함수명
- Props의 경우: on (onClick 등등)
- 함수인 경우: handle (handleClick 등등)
- 상수 : 모두 대문자 스네이크 케이스(snake_case) 예시) SNAKE_CASE
- js(변수, 함수, 인스턴스) : 카멜 케이스(camelCase) 예시) const createMovie = [];
- css, html : 케밥 케이스(kebab**_-_**case) 예시) `<div class=”movie-items”></div>`
- image 명 : 케밥 케이스(kebab**_-_**case) 예시) movie-img.jpg
- 주석 최대한 활용하기 : 해당 코드 제목, 설명 간단하게 적어놓기
- 약칭은 되도록 사용하지 않기

---

## Git Commit Convention

- init: 프로젝트 최초 생성 시 사용
- feat: 새로운 기능을 추가하거나 기존 기능을 요구사항에 맞게 수정함.
- fix: 기능과 관련된 버그를 수정함.
- build: 빌드 프로세스와 관련된 변경 사항을 적용함.
- chore: 패키지 관리자 설정 변경이나 기타 잡다한 변경을 수행함.
- ci: CI(지속적 통합) 관련 설정을 수정함.
- docs: 문서나 주석을 수정함.
- style: UI, 레이아웃 등 디자인 관련 사항 변경함.
- refactor: 기능의 변경 없이 코드 구조를 리팩토링함 (예: 변수 이름 변경).
- test: 테스트 코드를 추가하거나 수정함.
- release: 새로운 버전을 릴리스함.
- merge : 브렌치 병합할때 사용
- dep : 의존성 추가,제거 또는 업데이트
- perf : 성능 개선하기위해 코드변경

---

## Supabase ERD 설계도

![YummyYummy](https://github.com/user-attachments/assets/14ccaee8-7148-47c9-a821-96b945caeaef)

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

#### 레시피 상세정보

- 카테고리
  - 한식 , 양식 , 중식 , 일식 , 디저트 , 퓨전 확인 가능
- 음식 메인 사진
  - 음식 사진을 확인 할 수 있음

* 간단한 레시피 소개
  - 간단한 레시피 소개글 확인 가능
* 레시피 수정 버튼
  - 해당 레시피를 작성한 작성자만 수정버튼이 활성화 되고 수정 버튼 클릭시 수정페이지로 이동

- 재료 정보 확인
  - 재료 정보를 확인 할 수 있음

* 레시피 순서 확인
  - 음식 만드는 레시피를 확인 할 수 있음
* 작성자 정보
  - 작성자의 프로필 이미지 확인 가능
  - 작성자 닉네임 확인 가능
  - 작성자 소개글 확인 가능

- 댓글
  - 최신순(작성일순) 으로 댓글 확인 가능
  - 로그인시 댓글 작성 가능
  - 작성한 댓글 수정 / 삭제 가능
  - 댓글에 대댓글 가능
  - 댓글 작성자만 수정/삭제 버튼 활성화
  - 로그인한 사람만 대댓글 버튼 활성화

#### 프로필

- 수정 전 비밀번호 확인, 일치하지 않을 시 피드백
- 프로필이미지, 닉네임, 이메일, 자기소개 확인 가능
- 프로필이미지 등록 전 미리보기 가능
- 프로필이미지, 자기소개 수정

#### 내가 작성한 게시글

- 내가 작성한 게시글 리스트 확인
- 무한스크롤 적용(react-intersection-observer 사용)
- 최신순 정렬
- 클릭 시 해당 게시글로 이동

#### 내가 작성한 댓글

- 내가 작성한 댓글, 대댓글 리스트 확인
- 무한스크롤 적용(react-intersection-observer 사용)
- 최신순 정렬
- 클릭 시 해당 댓글이 있는 게시글로 이동

---

### 💥 Trouble Shooting

1. Supabase

- 문제발생 : 개별 작업 진행 중 supabase Table명칭과 Column명 통일성을 부여하기 위해 변경 => 지정해 둔 table에 연결이 끊김
- 해결방법 : Table명, Column명을 하나씩 변경해보며 명칭변경으로 인한 문제인 지 API키 문제인 지 파악 후 명칭변경으로 인한 문제인 점을 확인.
  SQL 문을 입력해 연결이 되어있었던 Table명과 Column명을 변경

## :책갈피\_탭: 관련 문서 (클릭시 페이지 이동)

### <img width="50" src="https://img.shields.io/badge/FIGMA-pink?style=for-the-badge&logo=FIGMA&logoColor=white"> [화면 정의서](<https://www.figma.com/design/Y2U8SPO7gYk7EDoo6OQitd/야미야미(Yummy-Yummy!)?node-id=0-1&t=Zroo2t8re0QloTdr-1>)

ⓒ 2024. Yummy Yummy All rights reserved. 1등하조
