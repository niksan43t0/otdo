SELECT id, heading, text, text_color, background_color, img_src, post_type
FROM posts
WHERE del_flag = FALSE
ORDER BY id DESC