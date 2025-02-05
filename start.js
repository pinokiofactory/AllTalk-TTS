module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        conda: "conda_env",
        env: { },
        path: "app",
        message: [
          "python script.py --tts_model piper"
        ],
        on: [
          {
          "event": "/http:\\/\\/127\\.0\\.0\\.1:\\d+\\?__theme=[a-zA-Z0-9]+/",
          "done": true
        },{
          "event": "/error/i",
          "break": false
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
