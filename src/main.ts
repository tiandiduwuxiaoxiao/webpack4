import '../index.html';
import './style.scss';
let arr = [1, 2, 3, 4, 5];
arr = arr.map(item => {
    return item*item;
});
console.log(arr);