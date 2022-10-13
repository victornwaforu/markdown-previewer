const initialState = `# Requirements needed to pass the test!

# Heading 1
## Heading 2
### Heading 3

Heres an inline code, \`<div></div>\`.

\`\`\`
// This is a block of code:

let x = 1;
let y = 2;
ler z = x + y;
\`\`\`

**This is a Bold text**
_Or Italic_.
**_Or both Bold and Italic!_**

~~We can also have crossed-out text too~~.

[This is a link to Facebook](https://www.facebook.com), and
> Block Quotes!


- List for item 1.
  - Bulleted list for item 2.
     - A different indentation level list for item 3.


1. And there are numbered lists too.
1. Use just 1s if you want.

Embedded image for Facebook Logo:

![facebook Logo](https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png)
`;

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState(initialState);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">Enter your Markdown here:</h1>
      <textarea
        name="text"
        id="editor"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      ></textarea>
      <h3 className="mt-3">See the result:</h3>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
