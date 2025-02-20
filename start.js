module.exports = async (kernel) => {
  const port = await kernel.port()
  return {
    daemon: true,
    run: [{
      method: "shell.run",
      params: {
        env: { SERVER_PORT: port },
        message: 'python run.py',
        on: [{
          event: "/PID:([0-9]+)/",
          done: true
        }]
      }
    }, {
      method: "process.wait",
      params: {
        sec: 1
      }
    }, {
      method: "local.set",
      params: {
        url: "http://127.0.0.1:" + port
      }
    }]
  }
} 
