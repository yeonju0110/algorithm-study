# 성적이 낮은 순서로 학생 출력하기

n = int(input())

arr = []
for i in range(n):
    x, y = input().split()
    y = int(y)
    arr.append([x,y])

# def setting(line):
#     return line[1]

# arr.sort(key=setting)
arr = sorted(arr, key=lambda student: student[1])

for student in arr:
    print(student[0], end=' ')