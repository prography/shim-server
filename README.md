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

  `{ status :200,`

  `arr :[{ music_id : 1, music_name : BachGavotte, music_music : BachGavotte.mp3 , music_picture : 1.jpg },`

  `{ music_id : 2, music_name : HarrisLilliburlero, music_music : HarrisLilliburlero.mp3, music_picture : 2.jpg },`

  `{ music_id : 3, music_name : PurcellSongMus, music_music : PurcellSongMus.mp3, music_picture : 3.jpg },`

  `{ music_id : 4, music_name : WalloonLilli, music_music : WalloonLilli.mp3, music_picture : 4.jpg }] }`

  `music_music`이  음악 URL, `music_picture`이 사진 URL이다.

  실제 URL 주소는

  * 음악 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-music/(music_music_값)> 

  * 사진 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-music/(music_picture_값)> 