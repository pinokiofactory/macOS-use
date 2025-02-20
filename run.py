import subprocess
import os
import signal
def cleanup(signum, frame):
    global pid
    try:
        os.kill(int(pid), signal.SIGTERM)  # Sends a termination signal
    except ProcessLookupError:
        print(f'Process {pid} not found')
def main():
    global pid
    cwd = os.getcwd()
    python_path = os.path.join(cwd, 'app', 'env', 'bin', 'python')
    app_path = os.path.join(cwd, 'app', 'gradio_app', 'app.py')
    applescript = f'''tell application "Terminal" to do script "{python_path} {app_path}"
delay 1
tell application "System Events" to set terminal_pid to unix id of (first process whose name is "Terminal")
return terminal_pid
'''
    command = ['osascript', '-e', applescript]
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    try:
        pid = int(stdout.strip())
        print(f"PID:{pid}")
    except ValueError:
        print(f"Error retrieving Terminal PID: {stderr.decode()}")
    try:
        while True:
            pass
    except Exception as e:
        print(f"Error: {e}")
        cleanup(None, None)
signal.signal(signal.SIGINT, cleanup)
signal.signal(signal.SIGTERM, cleanup)
signal.signal(signal.SIGHUP, cleanup)
if __name__ == "__main__":
    main()
