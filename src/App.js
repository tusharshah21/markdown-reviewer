import React, { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState(defaultText);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Markdown Previewer</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <textarea
          id="editor"
          className="w-full md:w-1/2 h-96 p-4 border-2 border-gray-300 rounded-lg"
          value={markdown}
          onChange={handleChange}
        />
        <div
          id="preview"
          className="w-full md:w-1/2 h-96 p-4 border-2 border-gray-300 rounded-lg bg-white"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == \`\` && lastLine == \`\`) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
