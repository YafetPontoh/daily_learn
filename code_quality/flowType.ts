
/**  Static type annotations */
const myName: string = 'Flow';

function greet(name: string){
    console.log(`Hello, ${name}. My name is ${myName}`);
}

// greet(123);  // Harus String

/**
 * Output:
 * (base) PS C:\Users\USER\downloads\for_study\js_dicoding\code_quality> tsc flowType.ts
 * flowType.ts:9:7 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
 * 
 * 9 greet(123);
        ~~~
 * 
 * 
 * Found 1 error in flowType.ts:9
 */
export {greet};

// Di file flow.ts yang benernya