input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]
input2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
# output [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]


def spiralOrder(matrix):
    result = []

    top = 0
    bottom = len(matrix)
    left = 0
    right = len(matrix[0])

    d = 0

    while top < bottom and left < right:
        if d == 0:
            for i in range(left, right):
                result.append(matrix[top][i])
            top += 1
        elif d == 1:
            for i in range(top, bottom):
                result.append(matrix[i][right-1])
            right -= 1
        elif d == 2:
            for i in range(right, left, -1):
                result.append(matrix[bottom-1][i-1])
            bottom -= 1
        elif d == 3:
            for i in range(bottom, top, -1):
                result.append(matrix[i-1][left])
            left += 1
        d = (d+1) % 4
    return result


print(spiralOrder(input))
print(spiralOrder(input2))
