n=int(input())
l=list(map(int, input ().split()))
x=[]
for i in l:
  if l.count(i)>1: x.append(i)
x=list(set(x))
if len(x)>0: print(*x)
else: print (-1)