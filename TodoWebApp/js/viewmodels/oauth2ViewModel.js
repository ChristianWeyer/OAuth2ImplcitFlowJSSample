var oauth2ViewModel = kendo.observable({
    token: "",
    
    openAuthWindow: function (url) {
        window.open(url, "Login", "height=400,width=250");
    },
    
    loginCallback: function (params) {
        this.token = params["access_token"];
        window.kendoMobileApplication.navigate("#todosPage");
    }
});
