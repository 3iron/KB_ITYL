async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  const td = document.querySelectorAll('#tbody1 td');

  td[0].textContent = data.userId;
  td[1].textContent = data.id;
  td[2].textContent = data.title;
}
