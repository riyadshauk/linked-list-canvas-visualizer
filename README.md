To see a linked list visualized as an HTML 5 canvas, run the following:

```bash
$ git clone https://github.com/riyadshauk/linked-list-canvas-visualizer.git \
  && cd linked-list-canvas-visualizer \
  && npm install \
  && npm start
```

Then, in a new terminal shell, open the webpage in your default browser, on macOS, as such:
```bash
$ open http://localhost:3000/index.html
```

FYI: I used a localhost Express server because when including JavaScript as an ES6 module, the browser enforces CORS... So running the static files from a localhost server is a simple bypass to that.

![Linked List Visualization viewed from Flux on macOS](https://raw.githubusercontent.com/riyadshauk/linked-list-canvas-visualizer/master/screenshot.png)