
export const createLesson = async(lesson) => {
    return await fetch('http://localhost:8000/lesson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(lesson)
      
    })
    .then(response => {
        console.log(response);
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

// post<boolean>('Borrower/AthoticateUser',myUser).then(res=>{
//     debugger
//      alert("athorize")
//      if(user.theData.userType==2){
//      history.push("athoticateBank");
//    }
//   if(user.theData.userType==1){
//     history.push("athoticateBorrower");
//  }
//   }).catch(reson=>alert('לא הצלחתנו לאתר משתמש זה ודא כי שם המשתמש והסיסמא תקינים'))
 
//  } 