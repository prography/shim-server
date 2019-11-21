# Shim Server

> Healing Music Player App Server

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Main

'홈' 탭에서 랜덤으로 3개의 main id, 음악 파일의 url, 사진의 url, 음악 제목, 음악 제작자를 제공한다.

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

  `{ status: 200,`

  `arr: [{ main_id: 3, main_name: "Clouds", main_music: "Clouds.mp3", main_author: "Huma-Huma", main_picture: "7.jpg", music_category: "relax" },`

  `{ main_id: 6, main_name: "Go to Sleep My Little One", main_music: "Go_to_Sleep_My_Little_One.mp3", main_author: "Doug Maxwell/Media Right Productions", main_picture: "11.jpg", music_category: "relax" },`

  `{ main_id: 11, main_name: "Pachabelly", main_music: "Pachabelly.mp3", main_author: "Aakash Gandhi", main_picture: "16.jpg", music_category: "focus" }] }`

  `main_music`이  음악 URL, `main_picture`이 사진 URL이다.

  실제 URL 주소는

  - 음악 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-main/(main_music_값)>
- 사진 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-main/(main_picture_값)>

---



# Sleep

'수면' 탭에서 asmr 파일의 id, url, asmr 제목, 사진과 asmr 재생 시간을 제공한다.

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

  `{ status : 200,`

  `arr : [{ sleep_id : 1, sleep_music : "fall1.mp3", sleep_name : "새와 밤벌레 울음소리 1", sleep_msec : 153000, sleep_picture : "33.jpg" },`

  `{ sleep_id : 2, sleep_music : "fall2.mp3", sleep_name : "새와 밤벌레 울음소리 2", sleep_msec : 198000, sleep_picture : "28.jpg" }] }` 

  * ASMR URL: sleep_music

    실제 주소: <https://s3.ap-northeast-2.amazonaws.com/shim-sleep/(sleep_music_값)>

  * Picture URL: sleep_picture
  
    실제 주소: <https://s3.ap-northeast-2.amazonaws.com/shim-sleep/(sleep_picture_값)> 
  
  ​	EX. <https://s3.ap-northeast-2.amazonaws.com/shim-sleep/fall1.mp3>



---




# Music

'음악' 탭에서 음악 id, 음악 파일의 url, 사진의 url, 음악 제작자, 음악 제목, 음악 재생 시간과 해당 음악이 my에 추가 되었는지 아닌지 여부를 제공한다.

- **URL**

  /music/:category

  * category에는 all / my / relax / focus / classic 가 있다.  (* 수정됨)

    ​	( EX. /music/all )

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  `id` : STRING

  (EX. /music/all?id='a')

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status : 200,`

  `arr : [{ music_id : 2, music_name : "White River", music_music : "White_River.mp3", music_author : "Aakash Gandhi", music_picture : "11.jpg", music_msec : 15300, my : false},`

  `{ music_id : 4, music_name : "Simple Sonata", music_music : "Simple_Sonata.mp3", music_author : "Sir Cubworth", music_picture : "15.jpg", music_msec : 189000, my : false }] }`

  `music_music`이  음악 URL, `music_picture`이 사진 URL이다.

  실제 URL 주소는

  * 음악 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-music/(music_music_값)>
* 사진 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-music/(music_picture_값)>



---



# My

'음악' 탭에서 `my`에 음악을 추가하거나 삭제한다.

- **URL**

  /music

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  `user_id` : STRING

  `music_id` : INT

  `my` : BOOLEAN (해당 곡이 my에 이미 추가되어 있으면 `true`, 아니면 `false`)

- **Success Response**

  **Code**: 200

  **Content**:

  `{
      status : 200,
      msg : "ok!"
  }`





---



# log

log를 저장한다.

- **URL**

  /log

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

   `user`: STRING

   `event`: STRING

   `params`: STRING

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, msg: "ok" }`



---





# etc/feedback

사용자로부터 feedback을 받는다.

- **URL**

  /etc/feedback

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  `feedback_userid` : VARCHAR

  `feedback_contact` : VARCHAR

  `feedback_title` : VARCHAR

  `feedback_contents` : TEXT

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, msg: "ok" }`





---



# Login

google token을 받아와 user id를 유효한 토큰으로 바꿔서 보내준다.

- **URL**

  /login

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  `googleToken` : VARCHAR

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status : 200,
      arr : "eyJhbGciOiJIUzI1NiIsInR~~UxNDgsImV4cCI6MTYwNTE2MTE0OH0.r5kbvalNvh1SZiZNsgK1PwqK5As6NzoS4drYR3WWixE"
  }`





------

