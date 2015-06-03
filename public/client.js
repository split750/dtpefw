$(function(){
    
    $.get('/addBU', appendToList);

    function appendToList(BUs) {
        var list = [];
        for (var i in BUs){
            list.push($('<li>', { text: BUs[i] }));
        }
        $('.block-list').append(list);
    };

    $('form').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var Data = form.serialize();

        $.ajax({
        type: 'POST', url: '/addBU', data: Data
        })
    });
});