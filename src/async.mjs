export function _async(generatorFunc) {
   return async function (...args) {
     const generator = generatorFunc(...args);
     let result = generator.next();
 
     while (!result.done) {
       result = await result.value;
       result = generator.next(result);
     }
 
     return result.value;
   };
 }
