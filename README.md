To see a linked list visualized as an HTML 5 canvas, run the following (on macOS):

```bash
$ git clone https://github.com/riyadshauk/linked-list-canvas-visualizer.git \
  && cd linked-list-canvas-visualizer \
  && npm install \
  && open public/index.html # this will launch the webpage on your default browser
```

FYI: I used a localhost Express server because when including JavaScript as an ES6 module, the browser enforces CORS... So running the static files from a localhost is a simple bypass to that.