Vue.component('list-item',{
    template:'<li>{{contents}}</li>',
    data:function(){
        return {
            contents:'bar'
        };
    }
});

Vue.component('firsttitle',{
    template:'#firsttitle'
});

Vue.component('input-date-with-today',{
    render:function (createElement){
        return createElement('input',{
            attrs:{
                type:'date',
                value:new Date().toISOString().substring(0,10)
            }
        });
    }
});

var exampleVue = new Vue({
    el:'#example'
});

Vue.component("fruits-item-name", {
    props:{
        frutisitem:{
            type:Object,
            required:true
        }
    },
    template:'<li>{{frutisitem.name}}</li>'
});

new Vue({
    el:'#fruits-componet',
    data:{
        frutisItems:[
            {name:'梨'},
            {name:'ライチ'},
        ]
    }
})

var counterButton = Vue.extend({
    template:'<span>{{counter}}個 <button v-on:click="addToCart">追加</button></span>',
    data:function(){
        return {
            counter:0
        }
    },
    methods:{
        addToCart: function(){
            this.counter += 1;
            this.$emit('mycustemorevent');
        }
    }
})

new Vue({
    el:'#frtuis-counter',
    components:{
        'counter-button':counterButton
    },
    data:{
        total:0,
        fruits:[
            {name:'梨SX'},
            {name:'ライチXX'},
        ]
    },
    methods:{
        fatherMethodOnClick:function(){
            this.total += 1;
        }
    }
})