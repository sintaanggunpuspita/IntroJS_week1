let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Gret",
    email: "Sincere@april.biz",
    address: 
    {
        street:"Kulas Light",
        suite:"Apt. 556",
        city:"Gwenborough",
        zipcode: "929998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    };
let newData = {...data};
    newData.name = "Sinta Anggun Puspita";
    newData.email = "sintaanggunpuspita7@gmail.com";
    newData.hobbies = ["makan", "tidur", "nonton"];
    console.log(data);
    console.log(newData);

    let {street,city}=data.address
    console.log(street,city);