function book(title,author,pages){ 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.displayInfo = function() { 
        alert(`Title: ` + this.title + `\nAuthor: ` + this.author + `\nPages: `+ this.pages); 
    } 
} 
 
function createBook(){ 
    let myBook = new book("Think and grow rich", "Napolean hill", 257); 
    myBook.displayInfo(); 
}