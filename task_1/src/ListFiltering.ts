export function filter_list(list:Array<any>):Array<number> {
  
  const newList = list.filter((item) => typeof item === 'number');
  
  return newList
}

console.log(filter_list([1,2,'aasf','1','123',123]))

