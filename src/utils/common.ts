import { type PromptData } from '../types/prompt';
import { type MyUser } from '../types/user';

type ResponseType = PromptData | MyUser;

//function processItems<T extends { name: string }>(items: T[]) {
function getSortedResults<MyUser>(items: MyUser[], sortDirection: string, propName: keyof MyUser, dataType: string): MyUser[]{
    // able to search chats and see what people are chatting about and getting involved
    // everyone is anonymous on twambit and when trust is built than further action is full control of the user
    // everything is erased after 24 hours
    // this sort will go through all the chats, compile them into text files
    // this sorting maching will be able to sort all the data by any text
    // example chats are talking about holy spirit or llms or politics or science 
    // the system pulls all the chats into one file separated into sections 
    // this function will sort them by category right now its Mind, Body or Soul.... mental physical or spiritual chats going on human to human only

    if(items.length === 0){
return items;
    }
if(dataType === 'number' && sortDirection === 'asc')
{

    
    return [...items].sort((a, b) => {

    const aValue = a[propName];
    const bValue = b[propName];

    // Type guard to handle number properties
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      const comparison = aValue - bValue;
      //return order === 'asc' ? comparison : -comparison;
    //}

       // const temp = a[propName];
        return  aValue - bValue;
    }
return 0;
}

);
} else if(dataType === 'string'){

    if(sortDirection === 'asc')
{
   
    return [...items].sort((a, b) => {
         const aValue = a[propName];
    const bValue = b[propName];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
       return aValue.localeCompare(bValue);
        }
    return 0;
});
   //return items[propName].sort();
}

// Reverse the array
    return [...items].sort((a, b) => {
         const aValue = a[propName];
    const bValue = b[propName];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
       return bValue.localeCompare(aValue);
        }
    return 0;
});
//return items.sort((a, b) => b[propName].localeCompare(a[propName]));
//return items[propName].reverse();
}
return items;
//return items.sort((a, b) => b[propName] - a[propName]);
}
export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) => a / b;
export const sortItems = (items: MyUser[], sortDirection: string, propName: keyof MyUser, dataType: string) =>  getSortedResults(items, sortDirection, propName, dataType);

export const dynamicSort = (arr: any, property: any, order = 'asc'): any[] => {
  // Ensure 'order' is either 'asc' or 'desc'
  const sortOrder = order.toLowerCase() === 'desc' ? -1 : 1;

  arr.sort((a: any, b: any) => {
    const valA = a[property];
    const valB = b[property];

    if (valA < valB) {
      return -1 * sortOrder;
    }
    if (valA > valB) {
      return 1 * sortOrder;
    }
    return 0; // Values are equal
  });

  return arr;
}
