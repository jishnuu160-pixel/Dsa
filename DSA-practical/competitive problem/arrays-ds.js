function reverseArray(a) {
    let res=[];
    for(let i=a.length-1,j=0;i>=0;i--,j++){
        res[j]=a[i];
    }
  return res;
}

