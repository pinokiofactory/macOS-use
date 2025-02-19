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
  }]
} 