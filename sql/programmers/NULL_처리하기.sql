SELECT ANIMAL_TYPE, IFNULL(NAME, "No name") NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS;

SELECT ANIMAL_TYPE, IF(ISNULL(NAME), "No name", NAME) NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS;

SELECT ANIMAL_TYPE, IF(NAME IS NULL, "No name", NAME) NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS;