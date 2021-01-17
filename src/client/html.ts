export function html(payload: { title?: string; content: string }) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${payload.title ?? ""}</title>
      </head>

      <body>
        <div id="root">${payload.content}</div>
        <script type="text/javascript" src="./index.js"></script>
      </body>
    </html>
  `;
}
