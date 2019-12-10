const url = 'https://touchbistro-backend.herokuapp.com/'

async function postData(data: any){
  const _body = JSON.stringify(data)
  const res = await fetch(url, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: _body
  })

  return res.json()
}

export {
  postData
}