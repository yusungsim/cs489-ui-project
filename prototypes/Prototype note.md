# Notes on Prototyping

## Initial idea

메신저 앱
톡방 ~5개, 그 중 3개 정도 만들기
카톡방을 누르면 톡방 내용이 카드뉴스처럼 전환되어서 나온다
화면을 세로로, 2/3 정도에 카드가 나온다
input box를 클릭했을 때 키보드에 맞춰 모양 변화

## 채팅방 목록 및 친구 목록

채팅 목록에도 채팅방의 색깔을 적용해서 보여준다
    너무 화려해지지 않을까?
        목록의 끝부분에만 적용 / 그라데이션 같은 효과
        여러 색을 써도 괜찮은 색깔 (파스텔톤 등)

## 기본채팅방

채팅방의 이름을 잘 정해주는 UX적인 기능도 필요
    강제로 정하게 하는건 유저가 싫어한다
    이름을 자동으로 지정하는 규칙?

채팅방의 탭을 넘기면서 사용할 수 있도록
    채팅방의 제목이 작아질 수 있다

채팅방의 배경 색을 다르게 지정해줌
    분류에 따른 배경색?
    html로 보여주기만 할거니까 상관없다
    존댓말을 자주 보낼수록 경고되는 색깔로
        무거울 수 있다 / 분석에 대한 거부감
메시지를 보내는 빈도수가 적으면 크게 영향이 없을까?
    케바케

색깔 외에 다른 방법?
    청각/폰트/스타일
    색깔이 제일 좋은 것 같다
    색깔이 바뀌려면 말풍선 등 다같이 바꿔야한다

채팅 목록, 채팅방 내부 화면 등 채팅방의 구분을 색을 통해서 도와주는 UI
    컬러 팔레트도 사용 가능
    투명도가 중요할 것 같다 - 테스트 하면서 조절 가능

## 채팅방 카드뉴스

카드뉴스를 들어가는 거랑 나오는 버튼

자기가 보낸건 하얀색 / 남이 보낸건 연노란색 등 색깔 구분

자기가 보낸 메시지를 카드로 보여줘야하는가?
    간단하게 하려면 ㅇㅇ  
    전부다 카드로 보여주는 것으로

한 카드 안에 메시지 + 보낸 사람 정보 모두 보여줌
![Example](http://www.sketchappsources.com/resources/source-image/ogiogi-news-card.png)

다른 사람이 보낸 메시지 카드 사이에 구분을 주자
    카드가 넘어가는 사이에 구분선을 그어준다
    또 색깔을 쓰는거는 아닌 것 같다
    진동이 온다던가
    애니메이션으로 구현하는 것이 최선인 것 같다

카드 화면에서 바로 답장을 쓸 수 있게

카드를 세로로 슬라이드
    html 안에서는 스크롤로 구현

## 메시지를 파싱하는 코드

우선 \n과 . 으로 파싱
    카톡에서는 .이나 \n을 덜 쓰는 것 같다

어르신들이 어떤 문장을 쓰실까다
    ..... ~~~~ ^^

최소와 최대 보여주는 글자수를 정해보자

긴 문장을 어디서 잘라서 보여줄 지 생각해보자
    스페이스바 기준, 띄어쓰기 없을 때는
    "~고" "~나" 뒤를 자르면 될 것 같다

간단하게 파싱 해도 될 것 같다

## 첫 프로토타입에 해야할 것

심유성
채팅방 목록
친구 목록

오민석
채팅방 기본 모드

조재건
채팅방 카드 모드

백현주
메시지 파싱 코드
예제로 사용할 카톡 예문