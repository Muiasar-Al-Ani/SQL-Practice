SELECT * FROM department;
SELECT * FROM course_names;
SELECT *
FROM course_names
JOIN department ON course_names.department = department.id;
