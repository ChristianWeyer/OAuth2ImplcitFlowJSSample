var servicesBaseUrl = "";

var endpoints = {
    ServiceEndpointUrl: servicesBaseUrl + "api/todos/",
    IdpOauthEndpointUrl: "https://localhost/idsrv/issue/oauth2/authorize"
};

var oAuthConfig = {
    client_id: "tt_tudus",
    scope: "http://tt.com/mobile/todos",
    response_type: "token",
    redirect_uri: "http://localhost/simpletudus/oauthcallback.html"
}