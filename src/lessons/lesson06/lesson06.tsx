export default function Lesson06() {
    // * typescript
  
    // * 1.string
  
    let username: string = 'Frodo';
    // username = 100 // присвоить число переменной с типом string не получится
    username = 'Pipin';
    console.log(username);
  
    // * 2.number
  
    let number: number = 42;
    number = 2 + 2;
    console.log(number);
  
    // * 3. boolean
  
    let isAdmin: boolean = true;
    isAdmin = 2 > 3; //переприсвоили результат логического выражения
    console.log(isAdmin);
  
    // * 4. null / undefined
  
    let emptyValue: null = null;
    console.log(emptyValue);
  
    let empty: undefined = undefined;
    console.log(empty);
  
    // * 5. arrays
    // пишем из чего состоит массив и квадратные скобки
  
    const rgb: string[] = ['red', 'green', 'blue'];
    console.log(rgb);
    // rgb.push(42) в массив из строк не получится добавить число
  
    const numbers: number[] = [1, 1, 2, 3, 5];
    numbers.push(8)
    console.log(numbers)
  
    // частный случай типизации для двух элементов в массиве
    const myArray:[string, number] = ["apple", 42]
    console.log(myArray)
  
    return (
      <div>
        <h2>Lesson 06</h2>
        <p>React TypeScript</p>
        <p>Самое важное на этом уроке происходит внутри компонента в теле функции и в консоли браузера ⚡️</p>
      </div>
    );
  }