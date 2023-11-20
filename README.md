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
  - pause시 현재 재생 시간 저장
- Header 신곡 정보 제공 및 멤버별 버튼 할당
  - 멤버 버튼 선택 시 앨범 정보가 사라지고 멤버의 모습이 하이라이트
  - 각 멤버 포지션에 버튼 위치 설정
  - 버튼 호버 시 트랜지션효과
  - 버튼 클릭 시 해당 멤버의 응원 메시지로 이동
  - 버튼 클릭 시 누구를 응원하실 건가요 slect도 자동으로 변경
  - 가독성을 위해 배경 조절
- 응원 메시지 작성
  - 닉네임, 내용 유효성 검사
  - 메시지 작성 및 저장
  - slect를 다른 멤버로 설정 후 응원 메시지를 보내면 자동으로 해당 멤버 메시지를 볼 수 있도록 이동
- 각 요소 입체감을 주기위해서 그림자 적용

# Letter page
- 상세페이지로 이동해도 BGM 재생 상태 유지
- Home, 수정(수정완료), 삭제 버튼
- 수정 모드로 진입시 해당 textarea 하이하이트
- 수정완료, 삭제완료 후 Home으로 자동으로 이동. 이때 해당 멤버값을 기억하여 이동
- 수정 내용이 없으면 페이지 그대로 유지

# 페이지 구현 스크린샷
