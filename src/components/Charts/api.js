
const url = 'https://dmrjm3z50m.execute-api.us-east-1.amazonaws.com/beta';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify()
};

fetch(url, options)
  .then(response => {
    if (response.ok) {
      console.log('POST request was successful');
    } else {
      console.log('POST request failed with status code: ', response.status);
    }
  })
  .catch(error => {
    console.error('Error occurred while making POST request: ', error);
  });
