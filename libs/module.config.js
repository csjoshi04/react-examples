const path = require("path");

const moduleConfig = {
    getEntries : function (appBasePath, projectBasePath) {
        return [
            {
                generatedIndexJSName : "gen.reactapp.index",
                indexJSLocation : path.join(appBasePath, "reactapp", "reactapp.index.js"),

                generatedIndexCSSName : "gen.reactapp.style",
                cssFiles : [path.join(appBasePath, "reactapp", "styles", "reactapp.style.css")],

                generatedVendorJSName : "gen.reactapp.jsvendor",
                jsVendors : ['react','react-dom'],

                generatedVendorCSSName : "gen.reactapp.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.reactapp.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "reactapp", "reactapp.index.html")
            },
            {
                generatedIndexJSName : "gen.youtubesearch.index",
                indexJSLocation : path.join(appBasePath, "youtubesearch", "youtubesearch.index.js"),

                generatedIndexCSSName : "gen.youtubesearch.style",
                cssFiles : [path.join(appBasePath, "youtubesearch", "styles", "youtubesearch.style.css")],

                generatedVendorJSName : "gen.youtubesearch.jsvendor",
                jsVendors : path.join(appBasePath, "youtubesearch", "youtubesearch.jsvendor.js"),

                generatedVendorCSSName : "gen.youtubesearch.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.youtubesearch.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "youtubesearch", "youtubesearch.index.html")
            },
            {
                generatedIndexJSName : "gen.reduxapp.index",
                indexJSLocation : path.join(appBasePath, "reduxapp", "reduxapp.index.js"),

                generatedIndexCSSName : "gen.reduxapp.style",
                cssFiles : [path.join(appBasePath, "reduxapp", "styles", "reduxapp.style.css")],

                generatedVendorJSName : "gen.reduxapp.jsvendor",
                jsVendors : ['react','react-dom','redux','react-redux'],

                generatedVendorCSSName : "gen.reduxapp.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.reduxapp.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "reduxapp", "reduxapp.index.html")
            },
            {
                generatedIndexJSName : "gen.redux-middleware-weather.index",
                indexJSLocation : path.join(appBasePath, "redux-middleware-weather", "redux-middleware-weather.index.js"),

                generatedIndexCSSName : "gen.redux-middleware-weather.style",
                cssFiles : [path.join(appBasePath, "redux-middleware-weather", "styles", "redux-middleware-weather.style.css")],

                generatedVendorJSName : "gen.redux-middleware-weather.jsvendor",
                jsVendors : ['react','react-dom','redux','react-redux'],

                generatedVendorCSSName : "gen.redux-middleware-weather.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.redux-middleware-weather.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "redux-middleware-weather", "redux-middleware-weather.index.html")
            },
            {
                generatedIndexJSName : "gen.router-form.index",
                indexJSLocation : path.join(appBasePath, "router-form", "router-form.index.js"),

                generatedIndexCSSName : "gen.router-form.style",
                cssFiles : [path.join(appBasePath, "router-form", "styles", "router-form.style.css")],

                generatedVendorJSName : "gen.router-form.jsvendor",
                jsVendors : ['react','react-dom'],

                generatedVendorCSSName : "gen.router-form.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.router-form.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "router-form", "router-form.index.html")
            },
            {
                generatedIndexJSName : "gen.bookapp.index",
                indexJSLocation : path.join(appBasePath, "bookapp", "bookapp.index.js"),

                generatedIndexCSSName : "gen.bookapp.style",
                cssFiles : [path.join(appBasePath, "bookapp", "styles", "bookapp.style.css")],

                generatedVendorJSName : "gen.bookapp.jsvendor",
                jsVendors : ['react','react-dom','redux','react-redux'],

                generatedVendorCSSName : "gen.bookapp.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.bookapp.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "bookapp", "bookapp.index.html")
            }

        ]
    }
}

module.exports = moduleConfig;