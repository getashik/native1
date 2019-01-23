//import Config from 'react-native-config'
//const APIURL="http://10.1.1.47:3030";
const APIURL="http://ec2-18-191-99-102.us-east-2.compute.amazonaws.com:3030";

export const GetList = function () {

    return function(dispatch){
    fetch(`${APIURL}/get`)
      .then(res => res.json())
      .then(
        (result) => {
         
          
            dispatch(
                {  type: "GETAWSLIST",
                    payLoad: result
                })
           
        },
        (error) => {
        
           alert(error);
        }
      ) 
    }
    
    

}


export const PushUser = function (data) {
    
    return function(dispatch){
    fetch(`${APIURL}/put`,
    {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }
    )
      .then(res => res.json())
      .then(
        (result) => {
         
          
          dispatch(GetList())
           
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
           alert("Erooor");
        }
      ) 
    }
    
    

}

export const DeleteUser = function (data) {
    
  return function(dispatch){
  fetch(`${APIURL}/delete`,
  {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }
  )
    .then(res => res.json())
    .then(
      (result) => {
       
        
        dispatch(GetList())
         
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
         alert("Erooor");
      }
    ) 
  }
  
  

}