var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        style:'color:red;'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
})

function myclick() {
    var mytext = document.getElementById('my_text');

    app.style = app.style + mytext.value;

    console.log(mytext.value);
}