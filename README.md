# Perfect Night
르세라핌 신곡 발표 홈페이지
- 신곡 Perfect Night 공개
- 응원 메시지 작성

# 기간
2023.11.10 ~ 2023.11.20

# 주요 기능
- React
- JavaScript
- HTML
- CSS
- Styled-Components (CSS)
- React Router Dom (Multiple Pages Building) (SPA)
- uuid

# 데이터 관리
- Props-drilling
- (context)
- (redux)

# 페이지 소개
- Home : 신곡 공개, 각 멤버별 응원 메시지 작성
- Letter : 응원 메시지 수정 및 삭제

# Home page
- BGM 적용
  - 초기상태, Play, Pause
  - click 시 음악 재생
  - pause 시 현재 재생 시간 저장
  - 초기상태 볼륨 조절(0.25)
  - 볼륨 조절 버튼
    - 최저, 최고 음량 도달 시 색 변화
- Header 신곡 정보 제공 및 멤버별 버튼 할당
  - 멤버 버튼 선택 시 앨범 정보가 사라지고 멤버의 모습이 하이라이트
  - 각 멤버 포지션에 버튼 위치 설정
  - 버튼 호버 시 트랜지션효과
  - 버튼 클릭 시 해당 멤버의 응원 메시지로 이동
  - 버튼 클릭 시 누구를 응원하실 건가요 slect도 자동으로 변경
  - 가독성을 위해 배경 조절
- 응원 메시지 작성
  - 닉네임(1글자 이상 20글자 이하), 내용(1글자 이상 100글자 이하) 유효성 검사
  - 메시지 작성 및 저장
  - slect를 다른 멤버로 설정 후 응원 메시지를 보내면 자동으로 해당 멤버 메시지를 볼 수 있도록 이동
- 응원 메시지가 없으면, 멤버별 "첫 응원 메시지를 남겨주세요!" 문구 출력
- 각 요소 입체감을 주기위해서 그림자 적용

# Letter page
- 상세페이지로 이동해도 BGM 재생 상태 유지
- Home, 수정(수정완료), 삭제 버튼
- 수정 모드로 진입시 해당 textarea 하이하이트
- 수정완료, 삭제완료 후 Home으로 자동으로 이동. 이때 해당 멤버값을 기억하여 이동
- 수정 내용이 없으면 페이지 그대로 유지

# 페이지 구현 스크린샷
## Home page
### 초기화면
![Screenshot1](/src/assets/Screenshot/Screenshot1.jpg)

### Header 버튼 선택
![Screenshot2](/src/assets/Screenshot/Screenshot2.jpg)

### Header 버튼 선택 시 멤버 하이라이트
![Screenshot3](/src/assets/Screenshot/Screenshot3.jpg)

### 응원 메시지 작성 후
![Screenshot4](/src/assets/Screenshot/Screenshot4.jpg)

## Letter page
### 초기화면
![Screenshot5](/src/assets/Screenshot/Screenshot5.jpg)

### 수정 모드
![Screenshot6](/src/assets/Screenshot/Screenshot6.jpg)

## 음악 플레이어
### 초기화면
![Screenshot7](/src/assets/Screenshot/Screenshot7.jpg)

### paly
![Screenshot8](/src/assets/Screenshot/Screenshot8.jpg)

### pause
![Screenshot9](/src/assets/Screenshot/Screenshot9.jpg)
