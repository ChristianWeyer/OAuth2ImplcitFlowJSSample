var dataservices = (function () {
    function beforeSend(xhr, token) {
        xhr.setRequestHeader("Authorization", createBearerHeader(token));
    }

    function createBearerHeader(token) {
        var header = "Bearer " + token;
        return header;
    }

    return {
        getTodos: function (token) {
            return $.ajax({
                url: endpoints.ServiceEndpointUrl,
                type: "get",
                dataType: "json",
                beforeSend: function (xhr) { beforeSend(xhr, token); }
            });
        }
    };
}());
