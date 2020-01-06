new Vue({
    el: '.projeto',
    data: {
        nome: ''
    },
    methods:{
      alterarTexto(event){
        this.nome=event.target.value
      }
    }
})
