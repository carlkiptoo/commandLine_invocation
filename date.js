#!/usr/bin/env node

function formatDate(date){
    return date.toDateString()+ " " + date.toTimeString().split(' ')[0] + date.toTimeString().split(' ')[1] + " " + date.getFullYear();

}
function dateCommand(){
    const currentDate = new Date();
    console.log(formatDate(currentDate));
}
dateCommand();