$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/todos",
        dataType: 'JSON',
        success: function(response) {
            JSON.stringify(response);
            var count; 
            for (var i = 0; i < response.length; i++) {
                count = i + 1;
                const markup = "<tr id='" + response[i].id + "'><td>" + count + "</td><td class='word-wrap'>" + response[i].id + "</td><td class='word-wrap'>" + response[i].userId + "</td><td>" + response[i].title + "</td></tr>";
                $("table tbody").append(markup);
               
            }
            // console.table(response)
        }
    });

    $('#submit').click(function() {
        const value = $('#filter-id').val();
        
        $("table tbody").empty();

        $.ajax({
            type: 'GET',
            url: "https://jsonplaceholder.typicode.com/todos/"+value,
            dataType: 'JSON',
            success: function(response) {
                JSON.stringify(response);
                var count; 
                
                count = 1;
                const markup = "<tr id='" + response.id + "'><td>" + count + "</td><td class='word-wrap'>" + response.id + "</td><td class='word-wrap'>" + response.userId + "</td><td>" + response.title + "</td></tr>";
                $("table tbody").append(markup);
                   
                
                console.log(response.userId)
            }
        });
    })
});

