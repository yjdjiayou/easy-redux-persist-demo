// 保存数据的方式有很多种：可以保存在 localStorage 中，也可以用接口保存：ajax
let storage = {
 set(key,value){
     localStorage.setItem(key,value);
 },
 get(key){
     return localStorage.getItem(key);
 }
};
export default storage;