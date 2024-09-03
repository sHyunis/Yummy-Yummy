# Yummy-Yummy!😋
![og](https://github.com/user-attachments/assets/53dfcd84-7dfe-4af7-8fa3-b8314bbf3067)

---

## 👨‍🏫 프로젝트 소개
유저들이 공유한 요리 레시피 기록을 한 눈에 볼 수 있는 뉴스피드 사이트

---

## 🚩 프로젝트 개요
- **프로젝트명** &nbsp; :&nbsp;
 **Yummy Yummy!**
- **진행 기간** &nbsp;: &nbsp;
 **24.08.28 ~ 24.09.04**

---

## 👨‍👩‍👧‍👦 팀원 소개
| 정소현 | 조아영 |  정수희 | 선채훈 | 이태연 |
| :-: | :-: | :-: | :-: | :-: |
| **팀장** | **팀원** | **팀원** | **팀원** | **팀원** |
| 로그인, 회원가입 기능 + 페이지 | 마이페이지 | 레시피 작성페이지 | 메인페이지 | 상세페이지 |

---

## 📚 STACKS
<div align=Left>
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

---

## ✔️ Code Convention
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

## ✔️ Git Commit Convention
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

## 📋 Supabase ERD 설계도
![YummyYummy](https://github.com/user-attachments/assets/14ccaee8-7148-47c9-a821-96b945caeaef)

---

## 🗂️ 기능 설명
#### 로그인
- OAuth2 소셜로그인 (Kakao, Google, Github)
- 일반 이메일 계정 로그인 (간편 회원가입 후)
#### 회원가입
- 이메일, 비밀번호, 비밀번호 확인, 닉네임 입력시 간편 회원가입이 가능
  
#### 유효성 검사 처리
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
- 간단한 레시피 소개
  - 간단한 레시피 소개글 확인 가능
- 레시피 수정 버튼
  - 해당 레시피를 작성한 작성자만 수정버튼이 활성화 되고 수정 버튼 클릭시 수정페이지로 이동
- 재료 정보 확인
  - 재료 정보를 확인 할 수 있음
- 레시피 순서 확인
  - 음식 만드는 레시피를 확인 할 수 있음
- 작성자 정보
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

#### 프로필 수정
- **프로필 정보 관리:** 사용자가 프로필 이미지, 닉네임, 이메일, 소개글을 확인하고 수정할 수 있도록 구현했습니다.
- **이미지 미리보기:** 프로필 이미지 업로드 시, 실시간 미리보기 기능을 통해 사용자 경험을 향상시켰습니다.
- **프로필 이미지 편집:** Storage API를 활용하여 이미지 업로드 및 다운로드 URL을 처리하고, 이를 통해 프로필 이미지 수정 기능을 구현했습니다.

#### 내가 작성한 게시글, 내가 작성한 댓글 페이지
- **사용자 콘텐츠 필터링:** Authentication에서 제공되는 uid를 활용해 사용자가 작성한 게시글, 댓글 및 대댓글만을 필터링하여 최신순으로 제공하는 기능을 구현했습니다.
- **무한 스크롤:** react-intersection-observer를 사용해 무한 스크롤 기능을 구현하고, useCallback을 이용해 렌더링을 최적화하여 성능을 개선했습니다. 이를 통해 사용자에게 끊김 없는 탐색 경험을 제공합니다.
- **게시글로 이동:** 클릭 시 해당 게시글 또는 댓글이 포함된 게시글로 즉시 이동할 수 있는 기능을 구현하여 편의성을 높였습니다.


#### 게시글 작성 페이지
- 사용자가 입력한 값 저장
- supabase 테이블 3개 연결 (레시피 정보 테이블의 ID 값으로 연결함)
- 저장 버튼 누르면 차례대로 insert 하며 지정된 형태로 입력값을 DB에 저장

#### 게시글 수정 페이지
- params로 받은 id값과 일치하는 레시피 정보 select
- 해당 id값과 연결된 재료, 순서 select
- value값과 연결하여 불러온 데이터를 입력창에 추가
- 작성 페이지와 사용자 입력값을 받는 부분은 동일하게 처리
- 저장 버튼 누르면 id와 연결된 재료, 순서 모두 삭제하고 입력값을 새로 insert<br/>
  (사용자가 추가하거나 삭제한 행을 추척하기 어려움)

---

## 💥 Trouble Shooting
#### Supabase
- 문제발생 : 개별 작업 진행 중 supabase Table명칭과 Column명 통일성을 부여하기 위해 변경 => 지정해 둔 table에 연결이 끊김
- 해결방법 : Table명, Column명을 하나씩 변경해보며 명칭변경으로 인한 문제인 지 API키 문제인 지 파악 후 명칭변경으로 인한 문제인 점을 확인.
 SQL 문을 입력해 연결이 되어있었던 Table명과 Column명을 변경

#### 프로필 수정 시 비밀번호 확인 기능 삭제
- 문제 발생 : 마이페이지에서 프로필을 수정하기 전에 비밀번호를 확인하도록 설정했으나, 로그인된 상태에서만 마이페이지에 접근할 수 있도록 변경한 후, 비밀번호를 확인하는 과정에서 로그인되지 않은 사용자로 인식되어 로그아웃되는 문제가 발생함.
- 해결 방법 : 현재 Supabase 환경에서는 비밀번호 확인 기능을 구현하기 어렵다고 판단되어, 해당 기능을 삭제하기로 결정.

---

## 📄 관련 문서 (클릭시 페이지 이동)
### <img width="50" src="https://img.shields.io/badge/FIGMA-pink?style=for-the-badge&logo=FIGMA&logoColor=white"> [화면 정의서](<https://www.figma.com/design/Ne9k4MrKWqWg4XVQzBg0sn/%EC%95%BC%EB%AF%B8%EC%95%BC%EB%AF%B8(Yummy-Yummy!)-(Copy)?node-id=0-1&t=KcM51G4n7FhF6llr-1>)

### [배포 vercel : https://yummy-yummy-pi.vercel.app/](https://yummy-yummy-pi.vercel.app/)
### [배포 도메인적용 : https://www.yummy-yummy.shop/](https://www.yummy-yummy.shop/)

<br /><br />
ⓒ 2024. Yummy Yummy All rights reserved. 1등하조
