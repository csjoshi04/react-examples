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
            }

        ]
    }
}

module.exports = moduleConfig;