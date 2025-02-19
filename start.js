module.exports = {
  daemon: true,
  run: [{
    method: "shell.run",
    params: {
      path: "app",
      venv: "env",
      message: [
        "python gradio_app/app.py"
      ],
      env: {
        "PYTHONPATH": "."
      },
      on: [{
        // Pattern to match Gradio's local URL output
        "event": "/http:\\/\\/\\S+/",
        "done": true
      }]
    }
  }, {
    method: "local.set",
    params: {
      // Store the matched URL to display in the UI
      url: "{{input.event[0]}}"
    }
  }]
} 