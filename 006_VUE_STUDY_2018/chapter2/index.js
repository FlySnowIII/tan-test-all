var items = [
    {
        name:'鉛筆',
        price:300,
        quantity:0
    },
    {
        name:'ノート',
        price:400,
        quantity:0
    },
    {
        name:'消しゴム',
        price:500,
        quantity:0
    },
]

var vm = new Vue({
    el:'#app',
    data:{
        items:items,
    }
});

vm.$watch(function(){
    return this.items[0].quantity;
}, function(quantity){
    console.log("quantity is changed:",quantity);
});

var b_btn = new Vue({
    el:'#b-button',
    data:{
        loggedInButton:'ログインし済のため購入できます',
        canntBuy:false,
    }
});