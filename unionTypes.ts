// using union types
/*
The advantage of using a union type is that a function or method
can accept more than one type of value for example function combined
should be able to accept numbers or strings type checking with type of is required
to avoid pre runtime errors
*/
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }

combine("one", "three");