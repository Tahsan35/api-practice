/* function loadData() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => loadUsers(data));
  
}
function loadUsers(data) {
  const ul = document.getElementById('users');
  for(const user of data) {
    const li = document.createElement('li');
    li.innerText = `name: ${user.name}`;
    ul.appendChild(li);
  }
  /* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then (data => console.log(data)) 
};  */
function loadPosts () {
  fetch ('https://jsonplaceholder.typicode.com/posts')
  .then (response => response.json())
  .then (data => displayPosts(data))
};
loadPosts();

function displayPosts (posts) {
  const postsContainer = document.getElementById('posts');
    for (const post of posts) {
      const div = document.createElement('div');
      div.classList.add('post')
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      ` ;
      postsContainer.appendChild(div)
    }
}
