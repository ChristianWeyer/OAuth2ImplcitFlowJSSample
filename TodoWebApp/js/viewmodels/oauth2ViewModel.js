var oauth2ViewModel = kendo.observable({
    token: "",
    
    openAuthWindow: function () {
        var url = endpoints.IdpOauthEndpointUrl + "?" + $.param(oAuthConfig);
        window.open(url, "Login", "height=500,width=350");
    },
    
    loginCallback: function (params) {
        this.token = params["access_token"];
        window.kendoMobileApplication.navigate("#todosPage");
    }
});
