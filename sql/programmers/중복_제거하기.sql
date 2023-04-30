SELECT COUNT(DISTINCT NAME)
FROM ANIMAL_INS;

/*
NULL 값도 포함하여 계산해줄까?

1. 포함되는 경우: COUNT(*)
2. 포함되지 않는 경우: COUNT(컬럼명)
*/