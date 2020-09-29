import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-tomorrow';

// function onChange(newValue) {
//   console.log('change', newValue);
// }

export default function Editor(props) {
  const { text, onChange } = props;
  return (
    <React.Fragment>
      <AceEditor
        mode="yaml"
        theme="tomorrow"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={16}
        value={text}
        tabSize={2}
      />
    </React.Fragment>
  );
}
