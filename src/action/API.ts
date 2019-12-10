const url = ''

function postData(data: any){
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(x => x.json)
}

export {
  postData
}