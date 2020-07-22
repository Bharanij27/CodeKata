n=int(input ())
l=list(map(int, input ().split()))
x=[]
for i in l:
  if l.count(i)==1: x.append(i)
x=sorted(x)
x=x[::-1]
print(*x)