$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btnCancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endeImgNova = $('#endeImgNova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endeImgNova}" />`).appendTo(novoItem);
        $(`
        <div class="img-real">
            <a href="${endeImgNova}" target="_blank" title="Ver imagem em tamanho real.">Ver imagem em tamanho real.
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endeImgNova').val('');
    })

})