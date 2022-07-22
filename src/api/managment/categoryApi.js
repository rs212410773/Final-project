export const getCategory = async () => {
     return await fetch(`http://localhost:8000/category/`)
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
            if (data != null) {
                return data;
            }
        })
        .catch(err => console.log(err))

}


export const addCategory = async (categoryName) => {
    
    return await fetch('http://localhost:8000/category/', {

       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       
       body: JSON.stringify(categoryName={categoryName})
       
          })
        .then(response => {
            console.log(response);
            if (response.ok) {
                console.log(`ok`)
                return response.json();
            }
            else
                throw new Error(response.status);
        })
        .then(data => {
            if (data != null) {
                alert(`${JSON.stringify(data)}`)
            }
        })
        .catch(err => console.log(err))

}

