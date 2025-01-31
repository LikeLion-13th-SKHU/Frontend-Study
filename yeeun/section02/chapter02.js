// 단락 평가

function returnFalse() {
    console.log("False");
    return undefined;
}

function returnTrue() {
    console.log("True");
    return true;
}

// console.log(returnFalse() && returnTrue()); //False
console.log(returnTrue() && returnFalse()); // True False

// 단락 평가 활용 사례

function printName(person) {
    // if(!pserson){
    //     console.log("person 값이 없음")
    // return;
    // }
    // console.log(person.name);

    // console.log(person && person.name);

    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

// printName();
printName({ name: "박예은" });

// * truthy || truthy 이면 왼쪽의 truthy 값이 반환
// * truthy && truthy 이면 오른쪽의 truthy 값이 반환