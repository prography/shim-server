# API

## Users

**모든 사용자 정보를 가져오는 API는 제공하지 않습니다.**

### POST /users/

새로운 사용자를 생성합니다.

Input:

```text
{ token } // string
```

### POST /users/auth

로그인합니다.

Headers:

```text
{ Authorization: Bearer idToken }
```

Output:

```text
{ status : 200,
  token : ... } // JWT
```

### GET /me

사용자 정보를 가져옵니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Output:

```text
{
    status : 200,
    user : {
        id : 2, // int 
        uid : ..., // string
        email : null, // string
        name : null, // string
        status : 1 // int
    }
}
```

### PATCH /me

사용자 정보를 수정합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Input:

```text
{ email, 			// string 
	name,				// string
	deviceId }	// int
```

### DELETE /me

회원 탈퇴합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Output:

```text
{ status : 200, message : "success" }
```

### POST /me/subscription

상품을 구독합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Input:

```text
{ planId } // int
```

Output:

```text
{ status : 200, message : "success" }
```

### GET /me/subscription

구독 정보를 확인합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Output:

```text
{ name,cost, duration, startedAt, endedAt } || {}
```

### DELETE /me/subscription

상품 구독을 해지합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

## Authors

### GET /authors

모든 제공자 정보를 가져옵니다.

Output:

```text
[{ id, email, name, profile, about }]
```

### GET /authors/{id}

제공자 정보를 가져옵니다.

Output:

```text
{
    "status": 200,
    "authors": [
        {
            "id": 1,
            "email": "email",
            "name": "name",
            "profile": "profile",
            "about": "about"
        }
    ]
}
```

## Plans

### GET /plans

모든 구독 상품 정보를 가져옵니다.

Output:

```text
{
    "status": 200,
    "plans": [
        {
            "id": 1,
            "name": "ddd",
            "cost": 333,
            "duration": 222
        }
    ]
}
```

### GET /plans/{id}

구독 상품 정보를 가져옵니다.

Output:

```text
{
    "status": 200,
    "plan": {
        "id": 1,
        "name": "ddd",
        "cost": 333,
        "duration": 222
    }
}
```

## Musics

### GET /musics

모든 음악 정보를 가져옵니다.

Output:

```text
{
    "status": 200,
    "musics": [
        {
            "id": 3,
            "title": "Minyo San Kyoku",
            "category": 0,
            "thumbnail": "3.jpg",
            "src": "Minyo_San_Kyoku.mp3",
            "duration": 100000
        },
        {
            "id": 4,
            "title": "Minyo San Kyoku",
            "category": 0,
            "thumbnail": "3.jpg",
            "src": "Minyo_San_Kyoku.mp3",
            "duration": 100000
        }
    ]
}
```

### GET /musics/{id}

음악 정보를 가져옵니다.

Output:

```text
{
    "status": 200,
    "music": {
        "id": 3,
        "title": "Minyo San Kyoku",
        "category": 0,
        "thumbnail": "3.jpg",
        "src": "Minyo_San_Kyoku.mp3",
        "duration": 100000
    }
}
```

## Shims

### GET /shims

모든 쉼 정보를 가져옵니다.

Output:

```text
{
    "status": 200,
    "shims": [
        {
            "id": 1,
            "title": "shim",
            "category": 1,
            "description": "description",
            "src": "src.mp4",
            "thumbnail": "thumb.jpg",
            "duration": 100000
        }
    ]
}
```

### GET /shims/{id}

쉼 정보를 가져옵니다.

Output:

```text
{
    "status": 200,
    "shim": {
        "id": 1,
        "title": "shim",
        "category": 1,
        "description": "description",
        "src": "src.mp4",
        "thumbnail": "thumb.jpg",
        "duration": 100000
    }
}
```

## Logs

### POST /logs/music

음악 로그을 저장합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Input:

```text
{ musicId, action, createdAt }
```

### POST /logs/shim

쉼 로그을 저장합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Input:

```text
{ shimId, action, createdAt }
```

### POST /logs/ui

UI 로그을 저장합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Input:

```text
{ action, createdAt }
```

## Feedback

### POST /feedback

피드백을 저장합니다.

Headers:

```text
{ Authorization: Bearer JWT }
```

Input:

```text
{ title, // strint
content // string ㄴ}
```

