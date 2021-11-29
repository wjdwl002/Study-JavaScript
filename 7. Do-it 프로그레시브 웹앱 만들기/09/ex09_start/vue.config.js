module.exports = {
    pwa : {
        workboxPluginMode : 'GenerateSW',
        workboxOptions :{
            runtimeCaching:[{
                include : [/^index\.html$/, /\.css$/, /\.js$/, /^manifest\.json$/, /\.png$/],
                exclude : []
            }]
        }
    }
}