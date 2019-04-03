# Show ID

name에 상응하는 id 값을 돌려준다.

- **URL**

  /users/:name

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

  **Content**: `{ status: 200, arr: [{ main_id: 1 }] }`

  

# Show Name

id에 상응하는 name 값을 돌려준다.

* **URL**

  /users

* **Method**

  `POST`

* **Header Params**

  None

* **URL Params**

  None

* **Data Params**

  **Required:**

  `id=[integer]`

* **Success Response**

  **Code**: 201

  **Content**: `{ status: 500, msg: "error!" }`

  

  

  

  