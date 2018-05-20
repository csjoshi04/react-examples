export function addNewBookAction(book){
    console.log(book.title);
    return {
        type:"ADD_BOOK",
        payload : book
    }
}