k=int(input())
n=list(map(int,input().split()))
l=[]
for i in range(0,k):
    s=1
    for j in range(0,k):
        if i!=j: s=s*n[j]
    l.append(s)
print(*l)
