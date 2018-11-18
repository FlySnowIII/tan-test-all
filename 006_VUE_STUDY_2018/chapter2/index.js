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
];

function numberWithDelimiter(value){
    if(!value){
        return 0+"円";
    }
    return "￥"+value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')+"円";
}

var vm = new Vue({
    el:'#app',
    data:{
        items:items,
    },
    filters:{
        numberWithDelimiter:numberWithDelimiter
    },
    computed:{
        totalPrice:function(){
            return this.items.reduce(function(sum,item){
                return sum + (item.price * item.quantity);
            },0);
        },
        totalPriceWithTax:function(){
            return Math.floor(this.totalPrice * 1.08);
        },
        canBuy:function(){
            return this.totalPrice>=1000;
        },
        errorMessageClass:function(){
            return {
                error:!this.canBuy
            };
        }
    },
    methods:{
        doBuy:function(event){
            alert(numberWithDelimiter(this.totalPriceWithTax)+"のお買い上げです(税込)。");
            this.items.forEach(function (item) {
                item.quantity = 0;
            });
        }
    }
    
});

vm.$watch(function(){
    return this.items[0].quantity;
}, function(quantity){
    console.log("quantity is changed:",quantity);
});

