module.exports = {
  run: [{
    method: "shell.run",
    params: {
      path: "app",
      venv: "env",
      message: [
        "python examples/gradio_app.py"
      ],
      env: {
        "PYTHONPATH": "."
      }
    }
  }]
} 