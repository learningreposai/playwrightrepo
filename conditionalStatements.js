//launchBrowser function with if..else implementation

function launchBrowser (browserName){
     if(browserName=="Chrome"){
        console.log(browserName + " Launch Chrome browser")
     }else {
              console.log(browserName + " Other browser")
     }

}
launchBrowser("Chrome")
launchBrowser("Firefox")

console.log("-------------------------------------")

//runTests function with Switch case implementation 

function runTests (testType)
{
switch(testType){
    case "smoke": //true
         console.log("This is smoke testing")
         break //to stop the execution when the condition satisfied
    case "sanity" :
        console.log("This is sanity testing")
         break
    case  "regression":
        console.log("This is regression testing")
          break
    default :
     console.log("Default value -Smoke ")
}
}
runTests("smoke")
runTests("sanity")
runTests("regression")
runTests("default")


