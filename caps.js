const str = 'hi i am visual studio code' ; 
const log = console.log;
const splitArr = str.split(' ');

const capsArr = splitArr.map((str)=>{
    let capStr = str[0].toUpperCase() + str.slice(1 , str.length)
   return capStr;
});

log(capsArr);
log(capsArr.join(' '))

let obj = {
    data: 'hello',
    name: 'hello',
    add : [1202 , 3490, 8934]
}

let {data: data1 , name:name1 ,add:add1} = obj

log(data1)
log(name1)
add1.data = ()=>{
 add1.forEach((val)=>{
    log(val)
 })
};
log(add1)

add1.data();
