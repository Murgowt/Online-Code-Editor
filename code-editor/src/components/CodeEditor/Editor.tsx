import React, { useState, useEffect } from 'react';
import 'codemirror/mode/css/css'
import 'codemirror/mode/xml/xml'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/material.css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

const Editor = (props:any)=>{
    const {
        language,
        value,
        onChange
      } = props
      const [open, setOpen] = useState(true)
    
      function handleChange(editor:any, data:any, value:any) {
        onChange(value)
      }
    
      return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
          <div className="editor-title">
           
          </div>

          <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
              lineWrapping: true,
              lint: true,
              mode: language,
              theme: 'material',
              lineNumbers: true
            }}
          />

        </div>
        
      )
}
export default Editor;