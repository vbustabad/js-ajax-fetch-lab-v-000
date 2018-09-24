const token = 'c1dd03d27b036d91469e88be2a83d5a1cc995502';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
     method:'POST',
       headers: {
         Authorization: `token ${getToken()}`
       }
     })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  const forkedLab = `<a href=${json.html_url}>Forked Lab</a>`;
  document.getElementById('results').innerHTML = forkedLab;
}

function createIssue() {
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
    }
    fetch(
      `https://api.github.com/repos/vbustabad/${repo}/issues`,
      {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      },
      body: JSON.stringify(postData)
    }).then(resp => resp.json())
    .then(json => getIssues())
  }
}

function getIssues() {
  fetch(`https://api.github.com/repos/vbustabad/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
    })
    .then(issues => issues.json())
    .then(json => console.log(json))
}
