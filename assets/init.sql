CREATE TABLE users (
    `id`          BIGINT        NOT NULL AUTO_INCREMENT,
    `uid`         VARCHAR(45)   NOT NULL,
    `email`       VARCHAR(254)  NULL,
    `name`        VARCHAR(45)   NULL,
    `status`      TINYINT       NOT NULL,
    `device_id`   CHAR(16)      NULL,
    `created_at`  DATETIME      NOT NULL,
    `updated_at`  DATETIME      NULL,
    `deleted_at`  DATETIME      NULL,
    `login_at`    DATETIME      NULL,
    PRIMARY KEY (id)
);

CREATE TABLE authors (
    `id`       BIGINT        NOT NULL AUTO_INCREMENT,
    `email`    VARCHAR(254)  NULL,
    `name`     VARCHAR(45)   NOT NULL,
    `profile`  VARCHAR(45)   NULL,
    `about`    TEXT          NULL,
    PRIMARY KEY (id)
);

CREATE TABLE musics (
    `id`          BIGINT       NOT NULL AUTO_INCREMENT,
    `author_id`   BIGINT       NOT NULL,
    `title`       VARCHAR(45)  NOT NULL,
    `category`    TINYINT      NOT NULL,
    `thumbnail`   VARCHAR(45)  NULL,
    `duration`    INT          NOT NULL,
    `created_at`  DATETIME     NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES authors (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE TABLE shims (
    `id`           BIGINT       NOT NULL AUTO_INCREMENT,
    `author_id`    BIGINT       NOT NULL,
    `title`        VARCHAR(45)  NOT NULL,
    `category`     TINYINT      NOT NULL,
    `description`  TEXT         NULL,
    `thumbnail`    VARCHAR(45)  NULL,
    `duration`     INT          NOT NULL,
    `created_at`   DATETIME     NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES authors (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE TABLE plans (
    `id`        BIGINT       NOT NULL AUTO_INCREMENT,
    `name`      VARCHAR(45)  NOT NULL,
    `cost`      INT          NOT NULL,
    `duration`  INT          NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE subscriptions (
    `id`           BIGINT      NOT NULL AUTO_INCREMENT,
    `plan_id`      BIGINT      NOT NULL,
    `user_id`      BIGINT      NOT NULL,
    `valid`        TINYINT(1)  NOT NULL,
    `started_at`   DATE        NOT NULL,
    `ended_at`     DATE        NOT NULL,
    `canceled_at`  DATE        NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (plan_id) REFERENCES plans (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE TABLE music_logs (
    `id`          BIGINT       NOT NULL AUTO_INCREMENT,
    `music_id`    BIGINT       NOT NULL,
    `user_id`     BIGINT       NOT NULL,
    `action`      VARCHAR(45)  NOT NULL,
    `created_at`  DATETIME     NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (music_id) REFERENCES musics (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE TABLE shim_logs (
    `id`          BIGINT       NOT NULL AUTO_INCREMENT,
    `shim_id`     BIGINT       NOT NULL,
    `user_id`     BIGINT       NOT NULL,
    `action`      VARCHAR(45)  NOT NULL,
    `created_at`  DATETIME     NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (shim_id) REFERENCES shims (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE TABLE ui_logs(
    `id`          BIGINT       NOT NULL AUTO_INCREMENT,
    `user_id`     BIGINT       NOT NULL,
    `action`      VARCHAR(45)  NOT NULL,
    `created_at`  DATETIME     NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE TABLE feedbacks (
    `id`          BIGINT       NOT NULL AUTO_INCREMENT,
    `user_id`     BIGINT       NOT NULL,
    `title`       VARCHAR(45)  NULL,
    `content`     VARCHAR(45)  NOT NULL,
    `created_at`  DATETIME     NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);
