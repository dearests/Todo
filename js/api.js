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
        
    }
});