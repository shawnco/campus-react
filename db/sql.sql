User
-id
-username
-password
-type ("Student", "Professor", "Admin")

INSERT INTO User (username, password, type) VALUES
('shawntc', 'password', 'Admin'),
('johndoe', 'password', 'Student'),
('janesmith', 'password', 'Student'),
('thedoctor', 'password', 'Professor');

Class
-id
-code
-name

INSERT INTO Class (code, name) VALUES
('CIS 101', 'Intro to Computer Science'),
('CIS 300', 'Data and Program Structures'),
('CIS 520', 'Operating Systems'),
('PHILO 101', 'Intro to Philosophy'),
('PHILO 200', 'Philosophy of Ethics')

Major
-id
-name
-code

INSERT INTO Major (name, code) VALUES
('Computer Science', 'CIS'),
('Philosophy', 'PHILO')

Section
-id
-classId
-room
-professorId

INSERT INTO section (class_id, room, professor_id) VALUES
(1, 2, 4),
(1, 2, 4),
(2, 1, 4)

Building
-id
-name

INSERT Into building (name) VALUES
('Hopper'), ('Descartes');

Room
-id
-number
-capacity
-buildingId

INSERT INTO room (number, capacity, building_id) VALUES
('101', 15, 1),
('102', 30, 1),
('The Horse Room', 100, 2); -- Putting Descartes before the horse



Student_Section
-studentId
-sectionId



-- For the flowchart (later)
Class_Dependency
-firstClassId
-secondClassId
-gradeNeeded
-major_id

INSERT INTO Class_Dependency (first_class, second_class, grade_needed) VALUES
(2, 1, 'C'),
(3, 2, 'C')

Major_Dependency
-class_id
-major_id, 
-grade_needed

INSERT INTO Major_Dependency (class_id, major_id, grade_needed) VALUES
(3, 1, 'C')

-- For determining which pages a user is allowed to see
Pages
-id
-name
-route
-userLevel

INSERT INTO pages (name, route, user_level) VALUES
('Home', '/home', 100),
('Buildings', '/buildings', 100),
('Classes', '/classes', 100),
('Majors', '/majors', 100),
('Building', '/building', 300);

User Levels
-level
-name

INSERT INTO user_levels (level, name) VALUES
(100, 'Student'),
(200, 'Professor'),
(300, 'Admin')

-- Get all classes happening in a building
create view v_class_building as
select distinct c.name, b.id from class as c
left join section as s on c.id = s.class_id
left join room as r on r.id = s.room
left join building as b on r.building_id = b.id

-- Get all sections taught by a professor

create view v_professor_section as
select
s.id as section_id,
s.professor_id as professor_id,
code,
name
from section as s
left join class as c
on s.class_id = c.id

UPDATE section
SET section_letter = 'A'
WHERE id = 1

-- VIEW FOR FLOWCHART
* needs to include the name of the class
CREATE VIEW v_flowchart AS



-- ROUTE STRUCTURE
/home
/buildings
/building
/room
/classes
/class
/section
/majors
/major
/transcript
/admin
/flowchart
/student
/professor

Home
* No requirements yet

Buildings
* Lists buildings on the campus, with a link to each building - DONE

Building
* Show main info about the building
* Show the list of classrooms and their capacities, with a link to each room - 
* Show the sections that are held in that building, the room they're held in, with a link to the CLASS (not the section)

Room
* Show main info about the room
* Show the list of sections that are held in the room, with a link to the section

Classes
* Show a list of all classes, with a link to each class

Class
* Show main info about the class
* Show a list of sections for the class, with a link to each section
* Show the professors for the class, with a link to each professor

Section
* Show main info about the section
* Show the professor for the section, with a link to the professor
* Include a link to the class it is for
* Show the students in the section

Majors
* Show a list of majors

Major
* Show main info about the major

Student
* Show main info about the student
* Show the classes the student has taken, with a link to each class. Include their letter grade
* Show the classes the student is currently enrolled in

Professor
* Show main info about the professor
* Show the sections the professor teaches, with a link to each section

Transcript
* Shows what major(s) the student is currently in
* Shows a list of all classes the student has completed, with a link to each class and the grade earned
* Shows a list of all classes the student is currently in, with a link to each class