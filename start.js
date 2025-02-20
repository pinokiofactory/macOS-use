module.exports = async (kernel) => {
  const port = await kernel.port()
  return {
    daemon: true,
    run: [{
      method: "shell.run",
      params: {
        message: [
          `SERVER_PORT=${port} osascript -e 'tell app \"Terminal\" to do script \"{{path.resolve(cwd, 'app/env/bin/python')}} {{path.resolve(cwd, 'app/gradio_app/app.py')}}\"'`
        ],
      }
    }, {
      method: "process.wait",
      params: {
        sec: 3
      }
    }, {
      method: "local.set",
      params: {
        // Store the matched URL to display in the UI
        url: "http://127.0.0.1:" + port
      }
    }]
  }
} 
