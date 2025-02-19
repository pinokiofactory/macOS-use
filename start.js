module.exports = {
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
      }
    }
  }, {
    method: "local.set",
    params: {
       url: "{{input.event[0]}}"
    }
  }]
} 