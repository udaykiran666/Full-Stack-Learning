x = 2.00000
n = 10
ans = 1.0

def power(x,n):
    if n ==0:
        return 1.0
    if n < 0:
        return 1 / power(x, -n)

    if n%2 == 0:
        return power(x*x, n//2)
    else:
        return x*power(x,n-1)
print(power(x,n))