export const ADD = "ADD";
export const GET_SECRETS = "GET_SECRETS";

import axios from "axios";

const URL = "https://whisperserver.herokuapp.com/api/secrets"

export const fetchSecrets = () => {
  return dispatch => {
    return axios
    .get(URL)
    .then(response =>{
      dispatch(fetchSecretsSuccess(response.data))
    })
    .catch(error => {throw error})
  }
}

export const fetchSecretsSuccess = secrets => (
  {
    type: GET_SECRETS,
    secrets: secrets
  }
)

export const addItem = (title,price) => ({
  type:ADD,
  title: title,
  price: price
})