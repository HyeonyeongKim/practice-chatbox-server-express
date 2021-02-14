const app = {
    server : `http://localhost:3000/messages`,
    //초기화
    init :() => {
        app.clickOnBtn();
        app.fetch().then(data => {
            return data.forEach(app.renderMessage)
        })
    },
    //fetch
    fetch : () => {
        return fetch(app.server)
        .then(response => response.json())
        .then(data => {return data.results})
    },
    //새로운 메세지 post하기
    send : (message) =>{
        fetch(app.server, {
            method : 'POST',
            body : JSON.stringify(message),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => {
            return response.json()
        })
    },
    //렌더링되는 메세지 내용 지우기
    clearMessages :() => {
        document.querySelector("#chats").innerHTML = '';
    },
    //메세지 입력칸 내용 지우기
    clearForm : () => {
        document.querySelector('#username').value = '';
        document.querySelector('#text').value = '';
    },
    //메세지 렌더하기
    renderMessage : (message) => {
        let chat = document.querySelector('#chats')
        let liEl = document.createElement('li');
        liEl.classList.add('chat');

        let roomnameTag = document.createElement('div');
        roomnameTag.textContent = message.roomname;

        let userTag = document.createElement('div');
        userTag.textContent = message.username;

        let textTag = document.createElement('div');
        textTag.textContent = message.text;

        chat.prepend(liEl);
        liEl.appendChild(roomnameTag)
        liEl.appendChild(userTag)
        liEl.appendChild(textTag);

    },
    //버튼 클릭 시 submitForm 함수를 실행하도록 하기
    clickOnBtn : () => {
        let submit = document.querySelector('#submitBtn');
        if(submit){
            submit.addEventListener('click', app.submitForm);
        }
    },
    //폼을 제출하기
    submitForm : (event) => {
        event.preventDefault();
        let newChat = {
            username : document.querySelector('#username').value,
            text : document.querySelector('#text').value,
            roomname : document.querySelector('#roomname').value
        }
        app.send(newChat)
        app.renderMessage(newChat)
        app.clearForm();
    }

}
app.init();