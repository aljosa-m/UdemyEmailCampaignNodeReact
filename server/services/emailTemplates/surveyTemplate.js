const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text">
          <h3>I'd like your input</h3>
          <p>Please answer the questions</p>
          <o>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/thanks}">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/thanks}">No</a>
          </div>
        </div>
      </body>
    </html>
  `
};
