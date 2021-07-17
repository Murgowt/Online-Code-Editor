import React, { useState, useEffect } from 'react';

import Editor from './components/CodeEditor/Editor.tsx'
import './App.css';
import useLocalStorage from './components/CodeEditor/LocalStorage'
const InitialRender= () =>{
  
  const BORDER_SIZE = 400;
  const panel = document.getElementById("LiveView");

  let m_pos;
  function resize(e){
    const dy = m_pos - e.y;
    m_pos = e.y;
    panel.style.height = (parseInt(getComputedStyle(panel, '').height) + dy) + "px";
  }

    panel.addEventListener("mousedown", function(e){
      if (e.offsetY < BORDER_SIZE) {
        m_pos = e.y;
        document.addEventListener("mousemove", resize, false);
      }
    }, false);
  
    document.addEventListener("mouseup", function(){
        document.removeEventListener("mousemove", resize, false);
    }, false);
}

function App() {
  const [value, setValue] = React.useState(2);
  document.addEventListener('DOMContentLoaded', InitialRender, false);
  let htmlPreCode="<html>\n <body>\n  Write Your Code Here \n </body>\n</html>"
  let cssPreCode = "body\n{\n color: red;\n}"
  let JSPreCode="console.log('Start')"
  const [html, setHtml] = useLocalStorage(htmlPreCode, htmlPreCode)
  const [css, setCss] =  useLocalStorage(cssPreCode, cssPreCode)
  const [js, setJs] =  useLocalStorage(JSPreCode, JSPreCode)
  const [srcDoc, setSrcDoc] = useState('')
   useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  const [htmleditor,setHTML] =useState(true)
  const [csseditor,setCSS] =useState(false)
  const [jseditor,setJS] =useState(false)


  const HTMLEditor =()=>{
    setCSS(false)
    setJS(false)
    setHTML(true)
   
  }

  const CSSEditor =()=>{
    setJS(false)
    setHTML(false)
    setCSS(true)
  }

  const JSEditor =()=>{
    setCSS(false)
    setHTML(false)
    setJS(true)
  }

  return (
    <div className="App">
      <div className="Editor">
        <div className="FileExplorer">
           <button className="Button" onClick={HTMLEditor}>Index.html</button>
           <button className="Button" onClick={CSSEditor}>Index.css</button>
           <button className="Button" onClick={JSEditor}>Index.js</button>
        </div>
        <div className="CodeEditor">
        {htmleditor?<Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />:console.log("NOT HTML")}

        {csseditor?<Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />:console.log("NOT HTML")}

        {jseditor? <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />:console.log("NOT JS")} 

        </div>

      </div>
      <div id="LiveView">
        <iframe
         srcDoc={srcDoc}  
          height="100%"
          width="100%"
          title="LiveView"
          sandbox="allow-scripts"  
        />
      </div>
    </div>
  );
}

export default App;
