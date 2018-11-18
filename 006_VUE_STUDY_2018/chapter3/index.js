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