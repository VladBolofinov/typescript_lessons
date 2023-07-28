
const userData = {
    ageData: 51,
    isBirthdayData: true,
    userNameData: 'Anatoliy'
}

const createError = (msg: string) => {
    throw new Error(msg);
}

function logBrtMsg({
    ageData,
    isBirthdayData,
    userNameData
}: {
    ageData:number,
    isBirthdayData:boolean,
    userNameData:string
}): string {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError('You get the Error!');
    }
}

console.log(logBrtMsg(userData));