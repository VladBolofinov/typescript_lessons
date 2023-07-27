let ageData: number = 51,
    isBirthdayData: boolean = true,
    userNameData: string = 'Anatoliy';

function logBrtMsg(isBirthday:boolean,age:number,userName:string) {
    if (isBirthday) {
        console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
    }
}

logBrtMsg(isBirthdayData,ageData,userNameData);