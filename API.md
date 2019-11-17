# API

## Users

**모든 사용자 정보를 가져오는 API는 제공하지 않습니다.**

### POST /users/

새로운 사용자를 생성합니다.

Input:

```js
{ token }
```

### POST /users/auth

로그인합니다.

Headers:

```js
{ Authorization: googleToken }
```

Output:

```js
{ token } // JWT
```

### GET /me

사용자 정보를 가져옵니다.

Headers:

```js
{ Authorization: uid }
```

Output:

```js
{ email, name, status, deviceId }
```

### PATCH /me

사용자 정보를 수정합니다.

Headers:

```js
{ Authorization: uid }
```

Output:

```js
{ email, name, deviceId }
```

### DELETE /me

회원 탈퇴합니다.

Headers:

```js
{ Authorization: uid }
```

### POST /me/subscription

상품을 구독합니다.

Headers:

```js
{ Authorization: uid }
```

Input:

```js
{ planId }
```

### GET /me/subscription

구독 정보를 확인합니다.

Headers:

```js
{ Authorization: uid }
```

Output:

```js
{ name, cost, duration, startedAt, endedAt } || {}
```

### DELETE /me/subscription

상품 구독을 해지합니다.

Headers:

```js
{ Authorization: uid }
```

## Authors

### GET /authors

모든 제공자 정보를 가져옵니다.

Output:

```js
[{ id, email, name, profile, about }]
```

### GET /authors/{id}

제공자 정보를 가져옵니다.

Output:

```js
{ id, email, name, profile, about }
```

## Plans

### GET /plans

모든 구독 상품 정보를 가져옵니다.

Output:

```js
[{ id, name, cost, duration }]
```

### GET /plans/{id}

구독 상품 정보를 가져옵니다.

Output:

```js
{ id, name, cost, duration }
```

## Musics

### GET /musics

모든 음악 정보를 가져옵니다.

Output:

```js
[{ id, authorId, title, category, thumbnail, duration, createdAt }]
```

### GET /musics/{id}

음악 정보를 가져옵니다.

Output:

```js
{ id, authorId, title, category, thumbnail, duration, createdAt }
```

## Shims

### GET /shims

모든 쉼 정보를 가져옵니다.

Output:

```js
[{ id, authorId, title, category, description, thumbnail, duration, createdAt }]
```

### GET /shims/{id}

쉼 정보를 가져옵니다.

Output:

```js
{ id, authorId, title, category, description, thumbnail, duration, createdAt }
```

## Logs

### POST /logs/music

음악 로그을 저장합니다.

Headers:

```js
{ Authorization: uid }
```

Input:

```js
{ musicId, action, createdAt }
```

### POST /logs/shim

쉼 로그을 저장합니다.

Headers:

```js
{ Authorization: uid }
```

Input:

```js
{ shimId, action, createdAt }
```

### POST /logs/ui

UI 로그을 저장합니다.

Headers:

```js
{ Authorization: uid }
```

Input:

```js
{ action, createdAt }
```

## Feedback

### POST /feedback

피드백을 저장합니다.

Headers:

```js
{ Authorization: uid }
```

Input:

```js
{ title, content, createdAt }
```
