interface democlass1{
    name(a:number,b:number):any;
}
class democlass111 implements democlass1{
    name(a:number,b:number){
        console.log("sum:",a+b);
    }
}
let object2:democlass111=new democlass111();
object2.name(10,20);