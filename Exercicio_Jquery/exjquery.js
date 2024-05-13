$(document).ready(function(){
    $('header button').click(function() {

    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefasList = $('#inputTarefas').val();
        const novaTarefa = $('<li></li>');
        $(`<p>${tarefasList}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul')
        $('#inputTarefas').val('');

    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('completa');
    })
})

