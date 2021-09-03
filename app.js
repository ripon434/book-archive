const searchBook = () => {
    const searchInput = document.getElementById('searchInput');
    const search = searchInput.value;
    searchInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${search}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.docs));
}


const displayResult = books => {
    const bookContainer = document.getElementById('book-container');
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
          <div
            class=" py-2 d-flex justify-content-between align-items-center d-md-block  text-md-center " >

                     <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${book.title}</li>
    <li class="list-group-item">${book.author_name}</li>
    <li class="list-group-item">${book.first_publish_year}</li>
  </ul>
 
</div>
            
           
          </div>
        
        `
        bookContainer.appendChild(div);
    
});
    
}



