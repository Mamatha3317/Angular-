function Ifunction(mydata) {
    return (mydata.Name + "" + mydata.Title);
}
var dat = { Name: "David", Title: "Associate" };
console.log(Ifunction(dat));
