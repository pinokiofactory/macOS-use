module.exports = async (kernel) => {
  const port = await kernel.port()
  return {
    daemon: true,
    run: [{
      method: "shell.run",
      params: {
        env: {
          SERVER_PORT: port,
          LAUNCH_BROWSER: "True"
        },
        message: [
          "osascript -e 'tell app \"Terminal\" to do script \"{{path.resolve(cwd, 'app/env/bin/python')}} {{path.resolve(cwd, 'app/gradio_app/app.py')}}\"'"
        ],
      }
    }, {
      method: "local.set",
      params: {
        // Store the matched URL to display in the UI
        url: "{{input.event[0]}}"
      }
    }]
  }
} 
