# Web62 - Homework 1

## Task 1

### Review ES6

1. Sự khác biệt nhé giữa let, const và var

    - scope (Phạm vị)
      var -> global
      const, let: function, block

    - assignment
      const: không thể re-assign
      let và var là có thể

    - hoisting
      var có thể sử dụng trước khi khai báo
      let, const

2. es6

-   map: tạo 1 array mới bằng cách thực hiện 1 function lên tất cả các phần tử của array cũ
-   filter: tạo 1 array mới với các phần tử thỏa mãn điều kiện ở callback function
-   reduce: trả về 1 giá trị duy nhất bằng cách chạy reducer function trên mảng ban đầu
-   some: trả về true nếu có ít nhất 1 phần tử trong mảng thỏa mãn điều kiện ở callback function
-   every: trả về true nếu tất cả phần tử trong mảng thỏa mãn điều kiện ở callback function
-   find: trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện ở callback function, trả về undefined nếu không phần tử nào thỏa mãn
-   findIndex: trả về index của phần tử đầu tiên thỏa mãn điều kiện ở callback function, -1 nếu không tìm thấy

3. Spread operator (...)  
   Cho phép 1 iterable như array/string có thể trải phẳng ra thành các phần tử. Có thể dùng spread operator để copy array:

    ````javascript
    	let arr = [3, 5, 1];

    	let arr2 = [8, 9, 15];

    	let merged = [0, ...arr, 2, ...arr2];

    	```
    ````

4. String template (literals string)  
   Cú pháp:  
    `` javascript let arg1 = "hello"; let arg2 = "world"; let s = `${arg1} ${arg2}`; // => s = "hello world"  ``
5. Arrow function

-   Các loại function: function declaration, function expression, arrow function
-   Sự khác biệt lớn nhất giữa arrow function với regular function là nằm ở syntax và execution context (this)
-   Về syntax:

    -   Function declaration:

    ```javascript
    function add(a, b) {
        console.log(a + b);
    }

    // Calling a function
    add(2, 3);
    ```

    -   Function express:

    ```javascript
    const add = function (a, b) {
        console.log(a + b);
    };

    // Calling function
    add(2, 3);
    ```

    -   Arrow function:

    ```javascript
    const add = (a, b) => a + b;

    // Calling function
    add(2, 3);
    ```

-   Về execution context:

    -   Với các regular functions, execution context (this) trỏ về object invoke function đó. Nếu không có 1 object cụ thể invoke, this sẽ trỏ đến window object. Ví dụ:

    ```javascript
    function sayThis() {
        console.log(this);
    }
    const amy = {
        name: "Amy",
        age: 25,
        sayThis: sayThis,
        sayThisExpr: sayThisExpr,
    };
    amy.sayThis();
    // => amy object
    sayThis();
    // => Window object
    ```

    -   Arrow function không tạo ra execution context riêng của nó, thay vì đó, nó sẽ được bind đến nơi nó gần nhất, tức là this sẽ là object nơi mà arrow function được tạo. Vì không có this, Arrow function không phù hợp làm method của object.

    ```javascript
    function sayThis() {
        console.log(this);
    }

    let sayThisArrow = () => console.log(this);

    const amy = {
        name: "Amy",
        age: 25,
        sayThis: sayThis,
        sayThisExpr: sayThisExpr,
    };
    amy.sayThis();
    // => amy object
    amy.sayThisArrow();
    // => Window object (logged to console)
    ```

-   Bind và Call:

    -   bind() giúp đặt lại this cho một function. Ở ví dụ dưới đây, bind giúp ta gán lại this của của unboundGetX từ Window object về module.

    ```javascript
    const module = {
        x: 42,
        getX: function () {
            return this.x;
        },
    };

    const unboundGetX = module.getX;
    console.log(unboundGetX());
    // expected output: undefined

    const boundGetX = unboundGetX.bind(module);
    console.log(boundGetX());
    // expected output: 42
    ```

    -   call() giúp set lại this của một hàm và thực thi hàm đó với các arguments được truyền vào. Ví dụ:

    ```javascript
    function Animal(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    function Chicken(name, weight, legs) {
        Animal.call(this, name, weight);
        this.legs = legs;
    }

    const a = new Chicken("AbC", 66, 2);
    console.log(a); // Chicken {name: 'AbC', weight: 66, legs: 2}
    ```

6. Destructuring: giúp unpack các giá trị trong arrays, hoặc thuộc tính của object thành các biến khác nhau.

    - Object destructuring:

    ```javascript
    const vehicleOne = {
        brand: "Ford",
        model: "Mustang",
        type: "car",
        year: 2021,
        color: "red",
    };
    // khi destructure object có thể không cần phải theo thứ tự
    const { type, color, brand, model } = vehicleOne;
    ```

    - Array destructuring:

    ```javascript
    const vehicles = ["mustang", "f-150", "expedition"];

    const [car, truck, suv] = vehicles;
    // hoặc nếu muốn bỏ 1 giá trị ở giữa
    const [car, , suv] = vehicles;
    ```

7. Promise: cách tự tạo 1 cái promise, mỗi cái promise có state, cách handle promise => async/await, event-loop

-   Promise:
    -   Cú pháp:
    ```javascript
    	var promise = new Promise ((resolve, reject) => {
    		//logic
    		//resolve
    		resolve(...);
    		//reject
    		reject(...);
    	})
    	promise
    		.then() //resolve
    		.catch() //reject
    		.finally()
    ```
    -   Promise có 3 trạng thái:
        -   pending: khi promise vừa được tạo, khi đó result sẽ là undefined
        -   fulfilled, khi promise được resolved, khi đó result sẽ là giá trị được trả về trong resolve
        -   rejected, khi promise bị rejected, khi đó result sẽ là lỗi
    -   Promise có 3 method:
        -   ._then()_, khi promise _fulfilled_, nhận vào 1 callback function. Nếu trong ._then()_ trả về 1 promise, thì .then tiếp theo phải đợi promise đó resolve xong mới chạy tiếp.
        -   ._catch()_, khi promise _rejected_
        -   ._finally()_, chạy trong mọi trường hợp, khi này promise state là _settled_

8. Class

## Task 2

Click vào [đây](https://tranquil-licorice-185c75.netlify.app/) để xem demo
