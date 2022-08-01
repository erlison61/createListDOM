 function createList(num=0,text='text'){
     const res=document.getElementById('result')

     let i=1
     while(i<=num){
        item=document.createElement('li')
        item.textContent=`${text} ${i}`
        res.appendChild(item)
        i++
     }
 }

 createList(3,'item')
