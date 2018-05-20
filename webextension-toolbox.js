const path = require('path');
const webpack = require('webpack');

function configureMonaco(parentConfig) {

  let monacoEntries = {
    "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
		"json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
  }

  let monacoRules = [
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },
    {
			test: require.resolve('monaco-editor/esm/vs/editor/common/services/editorSimpleWorker'),
			use: [
				{
					loader: 'babel-loader',
					options: {
						plugins: [
							replaceSelfRequireWithGlobalRequire()
						]
					}
				}
			],
    }
  ]

  let monacoPlugins = [
    new webpack.IgnorePlugin(/^((fs)|(path)|(os)|(crypto)|(source-map-support))$/, /vs(\/|\\)language(\/|\\)typescript(\/|\\)lib/),
    new webpack.ContextReplacementPlugin(
			new RegExp('^' + path.dirname(require.resolve('monaco-editor/esm/vs/editor/common/services/editorSimpleWorker')) + '$'),
			'',
			{
				'vs/language/json/jsonWorker': require.resolve('monaco-editor/esm/vs/language/json/jsonWorker'),
			}
    )
  ]

  monacoRules.map((rule) => parentConfig.module.rules.push(rule))
  monacoPlugins.map((plugin) => parentConfig.plugins.unshift(plugin))

  parentConfig.entry = Object.assign({}, parentConfig.entry(), monacoEntries)

  return Object.assign({}, parentConfig, {
		name: 'worker',
		target: 'webworker',
		entry: monacoEntries,
		output: Object.assign({}, parentConfig.output, {
			filename: '[name].worker.bundle.js'
		})
  })
}

module.exports = {
  webpack: (config, { dev, vendor }) => {
    // Perform customizations to webpack config
    let monacoConfig = configureMonaco(config)

    config.output.publicPath = "/"
    config.mode = 'development'

    Object.assign(config, { devtool: 'inline-source-map' })

    return [config, monacoConfig]
  }
}

function replaceSelfRequireWithGlobalRequire() {
	return (babel) => {
		const { types: t } = babel;
		return {
			visitor: {
				CallExpression(path) {
					const { node } = path;
					const isSelfRequireExpression = (
						t.isMemberExpression(node.callee)
						&& t.isIdentifier(node.callee.object, { name: 'self' })
						&& t.isIdentifier(node.callee.property, { name: 'require' })
					);
					if (!isSelfRequireExpression) { return; }
					path.get('callee').replaceWith(t.identifier('require'));
				}
			}
		};
	};
}
