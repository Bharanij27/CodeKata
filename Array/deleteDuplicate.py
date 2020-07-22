n=int(input ())
x=[]
l=list(map(str, input ().split()))
for i in l:
  if i not in x: x.append(i)
print(*x)	