$("Document").ready(function(){
    

$("#btnSalvar").click(function(){
    
    var cor_fonte = $("#cor_fonte").val();
    localStorage.setItem("cor_fonte",cor_fonte);

    var cor_fundo = $("#cor_fundo").val();
    localStorage.setItem("cor_fundo",cor_fundo);
    
    var tamanho_fonte = $("#tamanho_fonte").val();
    localStorage.setItem("tamanho_fonte",tamanho_fonte);
    
    carrega_configuracoes();
})

});


var cor_fonte = "black";
var cor_fundo = "white";
var tamanho_fonte = "12px";

function carrega_configuracoes(){
    if(localStorage.getItem("cor_fonte")!=null){
        cor_fonte = localStorage.getItem("cor_fonte");
        $("#conteudo").css("color",cor_fonte);
    }
    if(localStorage.getItem("cor_fundo")!=null){
        cor_fundo = localStorage.getItem("cor_fundo");
        $("#conteudo").css("background-color",cor_fundo);
    }
    if(localStorage.getItem("tamanho_fonte")!=null){
        tamanho_fonte = localStorage.getItem("tamanho_fonte");
        $("#conteudo").css("font-size",tamanho_fonte+"px");
    }
} 
