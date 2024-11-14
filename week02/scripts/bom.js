
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 


//click event listener
button.addEventListener('click', function() { 
    
    //make sure the input is not blank
    if (input.value.trim() !== '') {

        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';


        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            //input.focus();
        });

        input.value = '';


    }
    input.focus();
});

