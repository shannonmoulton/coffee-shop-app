//contributors: Samekh, Alexa, Miriam, David, Shannon, Roxana
var completed = document.getElementsByClassName("completed");
const deleteText = document.getElementsByClassName('fa-trash')

Array.from(completed).forEach(function(element) {
      element.addEventListener('click', function(e){
        let id = e.target.parentNode.parentNode.children[1].value
        console.log(id)

        fetch('coffeeOrders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'id': id
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(deleteText).forEach(function(element) {
      element.addEventListener('click', function(){
        let id = e.target.parentNode.parentNode.children[1].value
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id': id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


