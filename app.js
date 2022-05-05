(function() {
    const inputArea = document.getElementById("input");
    const pushBtn = document.getElementById("push");
    const current_tasks = document.querySelectorAll(".fa-trash-can");

    pushBtn.addEventListener('click', function() {
        const inputContent = inputArea.value;
        if (inputContent === '') {
            alert('Please insert content...');
        } else {
            inputArea.value = '';
            document.getElementById("tasks__area").innerHTML += `    
                <div id ='tasks'>${inputContent}<i class='fa-solid fa-trash-can'></i></div>
            `;
        }


    });

    current_tasks.forEach((current_task) => {
        current_task.addEventListener('click', function() {
            document.getElementById("tasks").remove();
        })
    })

})();