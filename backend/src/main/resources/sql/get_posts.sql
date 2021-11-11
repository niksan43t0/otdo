SELECT id, text, background_color, img_src
FROM posts
WHERE del_flag = FALSE
ORDER BY id DESC