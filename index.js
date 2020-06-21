var arr=[]
var cnt=0,pairs=0;
var n=prompt("Enter the size");
for(var i=0;i<n;i++)
{
  var x=Number(prompt("enter the number"));
  arr.push(x);
}
for(var i=0;i<n;i++)
{
  var cnt=0;
        var c=arr[i];
        for(j=i;j<n;j++)
        {
            if(arr[j]===c){cnt++;}
            else{break;}
        }
        i=j-1;
        pairs+=Math.floor(cnt/2)
}
window.alert(pairs)