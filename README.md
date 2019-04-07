# Sleep

'수면' 탭에서 asmr 파일의 url과 asmr 제목을 제공한다.

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
