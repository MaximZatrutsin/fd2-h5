export class AsyncArray extends Array {
   async serialMap(callback) {
     const result = new AsyncArray();
     for (let i = 0; i < this.length; i++) {
       const mappedItem = await callback(this[i], i, this);
       result.push(mappedItem);
     }
     return result;
   }
 }
