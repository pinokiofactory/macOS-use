module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/cocktailpeanut/macOS-use app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        venv_python: "3.11",
        path: "app",
        message: [
          "uv pip install -e .",
          "uv pip install gradio"
        ]
      }
    },
    {
      method: "fs.copy",
      params: {
        src: "app/.env.example",
        dest: "app/.env"
      }
    }
  ]
} 
