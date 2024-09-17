
let backupButton = document.getElementById('backup');
let contentDiv = document.getElementById('content-div');

document.body.onscroll = function(){
if(scrollY >= 400){
    backupButton.style.display = 'block';
} else{
    backupButton.style.display = 'none';
};

};

backupButton.onclick = function() {
    window.scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
};


function createContent(count){


    let content = '';

    for(let i = 0; i < count; i++){

    content += 
    `   <div id="image">
            <img src="Buy_Plants_Online_Cheap_Prices.png" alt=":/" class="content-image">
            <h3 style="margin-left:200px; margin-right:0px; width:150px;">العنوان</h3>
        </div>`

    contentDiv.innerHTML = content;

    };
};

createContent(4)
