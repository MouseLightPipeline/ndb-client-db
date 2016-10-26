var webpack = require('webpack');
var path = require('path');
var yargs = require('yargs');

var libraryName = 'ndb-client';
var plugins = [];
var outputFile;

if (yargs.argv.p) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: [
    __dirname + '/src/entityStore.ts',
    __dirname + '/src/dataService.ts',
    __dirname + '/src/brainAreaService.ts',
    __dirname + '/src/fluorophoreService.ts',
    __dirname + '/src/injectionService.ts',
    __dirname + '/src/injectionVirusService.ts',
    __dirname + '/src/mouseStrainService.ts',
    __dirname + '/src/neuronService.ts',
    __dirname + '/src/registrationTransformService.ts',
    __dirname + '/src/sampleService.ts',
    __dirname + '/src/structureIdentifierService.ts',
    __dirname + '/src/tracingNodeService.ts',
    __dirname + '/src/tracingService.ts'
 ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    preLoaders: [
      { test: /\.tsx?$/, loader: 'tslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.tsx?$/, loader: 'ts', exclude: /node_modules/ }
    ]
  },
  externals: {'angular': 'angular'},
  resolve: {
    root: path.resolve('./src'),
    extensions: [ '', '.js', '.ts', '.jsx', '.tsx' ]
  },
  plugins: plugins,

  // Individual Plugin Options
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
};

module.exports = config;
