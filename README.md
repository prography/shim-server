# Main

'홈' 탭에서 id, 음악 파일의 url, 사진의 url, 음악 제목을 제공한다.

- **URL**

  /main

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status : 200,`

  `arr : [{ main_id : 1, main_name : "BachGavotte", main_music : "BachGavotte.mp3", main_picture : "4.jpg"},`

  `{ main_id : 2, main_name : "HarrisLilliburlero", main_music : "HarrisLilliburlero.mp3", main_picture : "3.jpg" },`

  `{ main_id : 3, main_name : "PurcellSongMus", main_music : "PurcellSongMus.mp3",  main_picture : "2.jpg" },`

  `{ main_id : 4, main_name : "WalloonLilli", main_music : "WalloonLilli.mp3", main_picture : "1.jpg" }] }`

  `main_music`이  음악 URL, `main_picture`이 사진 URL이다.

  실제 URL 주소는

  - 음악 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-main/(main_music_값)>
  - 사진 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-main/(main_picture_값)>







# Sleep

'수면' 탭에서 asmr 파일의 id, url과 asmr 제목을 제공한다.

- **URL**

  /sleep

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, `

  `arr: [{ sleep_id: 1, sleep_music: "BachGavotte.mp3", sleep_name: "BachGavotte" }, `

  `{ sleep_id: 2, sleep_music: "HarrisLilliburlero.mp3", sleep_name: "HarrisLilliburlero" }, `

  `{ sleep_id: 3, sleep_music: "PurcellSongMus.mp3", sleep_name: "PurcellSongMus" }, `

  `{ sleep_id: 4, sleep_music : "WalloonLilli.mp3", sleep_name: "WalloonLilli" }] }`

  여기서 sleep_music이 URL인데, 실제 URL 주소는

  <https://s3.ap-northeast-2.amazonaws.com/shim-sleep/(sleep_music_값)>  형식이다.

  ​	EX. <https://s3.ap-northeast-2.amazonaws.com/shim-sleep/BachGavotte.mp3>







# Video

'영상' 탭에서 영상 id, 영상 url, 영상 제목, 영상 제작자 정보를 제공한다.

- **URL**

  /video/:category

  - category에는 all / baby / animal이 있다.

    ​	( EX. /video/all )

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `/video/baby`에 대한 결과 :

  `{ status : 200,`

  `arr : [{ video_id : 2, video_url : "w-N8FWyNZzk", video_title : "[60초 에디터Pick] 댕댕이보다 더 댕댕이 같은 건후ㅋㅋㅋㅋ", video_creator : "KBS 한국방송 (MyloveKBS)" },`

  `{ video_id : 4, video_url : "VDc3kb14YsU", video_title : "[HIT] 설특집 슈퍼맨이 돌아왔다 - 다시보는 '성균관 삼둥이' 귀여움 폭발 2. 20150219", video_creator : "KBSEntertain" }] }`

  video_url이 유튜브 링크이며, 실제 주소는 https://youtu.be/(video_url_값) 형식이다.

  EX. https://youtu.be/w-N8FWyNZzk








# Music

'음악' 탭에서 음악 id, 음악 파일의 url, 사진의 url, 음악 제목을 제공한다.

- **URL**

  /music/:category

  * category에는 all / sleep / instrument / nature이 있다.

    ​	( EX. /music/all )

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `/music/all`에 대한 결과 :

  `{ status :200,`

  `arr :[{ music_id : 1, music_name : "BachGavotte", music_music : "BachGavotte.mp3" , music_picture : "1.jpg" },`

  `{ music_id : 2, music_name : "HarrisLilliburlero", music_music : "HarrisLilliburlero.mp3", music_picture : "2.jpg" },`

  `{ music_id : 3, music_name : "PurcellSongMus", music_music : "PurcellSongMus.mp3", music_picture : "3.jpg" },`

  `{ music_id : 4, music_name : "WalloonLilli", music_music : "WalloonLilli.mp3", music_picture : "4.jpg" }] }`

  `music_music`이  음악 URL, `music_picture`이 사진 URL이다.

  실제 URL 주소는

  * 음악 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-music/(music_music_값)>
  * 사진 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-music/(music_picture_값)>



---

# 참고

IP주소: 52.78.106.14

​	EX. 52.78.106.14/sleep/instrument