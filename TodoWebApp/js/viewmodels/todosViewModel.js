var todosViewModel = kendo.observable({
    todosSource: new kendo.data.DataSource({ sort: { field: "title", dir: "asc" } }),
    
    loadTodos: function () {
        var self = this;

        dataservices.getTodos(oauth2ViewModel.token)
            .done(function (data) {
                self.todosSource.data(data);
            });
    }
});
