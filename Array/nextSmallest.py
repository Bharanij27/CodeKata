n=int(input())
l=list(map(int, input ().split()))
x=[]
r=[]
for i in range(0,n):
  m=0
  for j in range(i+1,n):
    if l[i]>l[j]:
      r.append(l[j])
      m=1
      break
  if m==0: r.append(-1)
print (*r)