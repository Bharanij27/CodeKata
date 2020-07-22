k=int(input())
n=list(map(int,input().split()))
for i in range(0,k,2):
    if k%2!=0 and i!=k-1: n[i],n[i+1]=n[i+1],n[i]
print(*n)
