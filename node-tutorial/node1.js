
const fs = require("fs");
const filePath = "./data.json";


const loadArgument = () => {


    try {
        const databuffer = fs.readFileSync(filePath);
        const datajson = databuffer.toString()
        const data = JSON.parse(datajson)

        return data;
    }
    catch {
        return []
    }
}


const saveArguments = (task)=>{

    const datajson = JSON.stringify(task)
    fs.writeFileSync(filePath , datajson);

}





const addArguments = (task) =>{

    const tasks = loadArgument();
    tasks.push({task});
    saveArguments(tasks);

    console.log("task added " , task)

}


const listArguments = ()=>{

    const tasks = loadArgument();

    tasks.forEach((item , index) => {    
        console.log(`${index} : ${item.task}`)
    });

}



const deleteArguments = (arguments) =>{

    const dataArr = loadArgument();

    dataArr.splice(arguments , 1);

    saveArguments(dataArr);

}




const command = process.argv[2]
const arguments = process.argv[3]


if (command == "add") {
    addArguments(arguments);
}

else if (command == "list") {
    listArguments();

}
else if (command == "delete") {
    deleteArguments(arguments);
}
else {
    console.log("code run sucessfully")
}
