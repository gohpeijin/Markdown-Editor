import React, {useState} from 'react';
import parse from 'html-react-parser'; //import this to avoid using dangerouslySetInnerHtml 
import DOMPurify from 'dompurify';
import './App.css';

function App() {

  const [markdown,setMarkdown] = useState ("***Italic***\n**Bold**\n_Underline_");


  // const convertedMarkdown = DOMPurify.sanitize(markdown.replace(/\*\*\*([^]+?)\*\*\*/gm, '<i>$1</i>').replace(/\*\*([^]+?)\*\*/gm, '<b>$1</b>').replace(/_([^]+?)_/gm, '<u>$1</u>').replace(/\n/g, "<br>"), {
  //   USE_PROFILES: { html: true },
  // }); // line break will not reset

  const convertedMarkdown = DOMPurify.sanitize(markdown.replace(/\*\*\*(.+?)\*\*\*/gm, '<i>$1</i>').replace(/\*\*(.+?)\*\*/gm, '<b>$1</b>').replace(/_(.+?)_/gm, '<u>$1</u>').replace(/\n/g, "<br>"), {
    USE_PROFILES: { html: true },
  }); // line break will reset 

  return (
   <div>
    <h1 className="App">Markdown Editor</h1> 
    <div className="Text">
      <p>Editor</p><p>Preview</p>
    </div>
    <div className="Split">
    {/* <textarea  value = {markdown} onChange={handleChange} > </textarea> */}
    <textarea  value = {markdown} onChange={e => setMarkdown(e.target.value)} > </textarea>
      {/* <textarea   onBlur={handleBlur} > </textarea> */}
      <div className="Preview">
         <p>{parse(convertedMarkdown)}</p>
      </div>
    </div>
   </div>
  );
}

export default App;
