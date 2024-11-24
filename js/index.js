fetch('../db/index.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').textContent = data.system;
  })
  .catch(error => {
    console.error('Error:', error);
  });
