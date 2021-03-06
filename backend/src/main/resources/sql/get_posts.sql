SELECT id,
       heading,
       text,
       text_color,
       background_color,
       img_src,
       post_style,
       post_type
FROM posts
WHERE del_flag = FALSE
  AND post_type = :postType
ORDER BY id DESC