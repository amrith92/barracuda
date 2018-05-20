import React from 'react';
import MonacoEditor from 'react-monaco-editor';

export default class QueryEditor extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
			dimensions: {
				height: props.height,
				width: props.width || 100
			},
      query: '{"query": {"match_all": {}}}',
    }
  }

	editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    const onChange = this.onChange;
    const editorDidMount = this.editorDidMount;
		const {height, width} = this.state.dimensions;
    return (
      <MonacoEditor
				height={height}
        language="json"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    );
  }
}
