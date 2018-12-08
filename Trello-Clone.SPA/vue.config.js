const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@components": path.join(__dirname, "/src/components/"),
                "@views": path.join(__dirname, "/src/views/"),
                "@filters": path.join(__dirname, "/src/filters/"),
                "@data": path.join(__dirname, "/src/data/"),
                "@models": path.join(__dirname, "/src/data/models/"),
                "@enums": path.join(__dirname, "/src/data/enums"),
                "@store": path.join(__dirname, "/src/store/"),
                "@state": path.join(__dirname, "/src/store/state"),
                "@utils": path.join(__dirname, "/src/utils/"),
            }
        }
    }
}