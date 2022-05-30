export const getCategory  = async (userName, password) => {
    return fetch(`http://localhost:8000/category/`)
    .then(response => {
    
        if (response.ok && response.status == 204)
            alert(" קטגוריות אין");
        else 
            if (response.ok)
                return response.json();                              
            else
                throw new Error(response.status);
    })
    .then(data => {
        if (data!=null) {

            return data;
        }
    })
    .catch(err => console.log(err))

}

export const addCategory = async(category) => {
    return await fetch('http://localhost:8000/category', {
        method: 'POST', 
        
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'http://localhost:3000',
        //   'Access-Control-Allow-Methods':'POST'
       
        },
        // headers.append('Access-Control-Allow-Origin', ),
        body: JSON.stringify(category)
      
    })
    .then(response => {
        console.log(response);
     debugger;
     alert(`ggg`)
        if (response.ok){
            console.log(`ok`)
            return response.json();
            }
        else
            throw new Error(response.status);
    })
    .then(data => {
        if (data!=null) {
            alert(`${JSON.stringify(data)}`)
        }
    })
    .catch(err => console.log(err))

}


  